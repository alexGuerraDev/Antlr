var express = require('express');
const path = require('path');
const antlr4 = require('antlr4/index');


const MatlabParser = require('./Matlab/MatlabParser');
const MatlabLexer = require('./Matlab/MatlabLexer');

const ErrorListener = require('./ErrorListener').ErrorListener;

var app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, '/public')));


app.get('/', (req, res) => {
  res.sendFile('/index.html');
})


app.post('/antlr', (req, res) => {
  console.log(req.body.input)
  var errors = [];
  var input = req.body.input;
  var chars = new antlr4.InputStream(input);

  var lexer = new MatlabLexer.MatlabLexer(chars);
  var lexerListener = new ErrorListener(errors);
  lexer.removeErrorListeners();
  lexer.addErrorListener(lexerListener);

  var tokens  = new antlr4.CommonTokenStream(lexer);

  var parser = new MatlabParser.MatlabParser(tokens);
  var errorListener = new ErrorListener(errors);
  parser.removeErrorListeners();
  parser.addErrorListener(errorListener);
  var tree = parser.evaluar();

  console.log(errors)
  res.end(JSON.stringify(errors));
})
app.listen(3000, () => {
  console.log('server on port', 3000)
})

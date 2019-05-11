// Generated from Matlab.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0003\u0011\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0005\u0004\u0010\n\u0004\u0002\u0002\u0005\u0003",
    "\u0002\u0005\u0002\u0007\u0003\u0003\u0002\u0004\u0003\u0002c|\u0003",
    "\u0002C\\\u0002\u000f\u0002\u0007\u0003\u0002\u0002\u0002\u0003\t\u0003",
    "\u0002\u0002\u0002\u0005\u000b\u0003\u0002\u0002\u0002\u0007\u000f\u0003",
    "\u0002\u0002\u0002\t\n\t\u0002\u0002\u0002\n\u0004\u0003\u0002\u0002",
    "\u0002\u000b\f\t\u0003\u0002\u0002\f\u0006\u0003\u0002\u0002\u0002\r",
    "\u0010\u0005\u0003\u0002\u0002\u000e\u0010\u0005\u0005\u0003\u0002\u000f",
    "\r\u0003\u0002\u0002\u0002\u000f\u000e\u0003\u0002\u0002\u0002\u0010",
    "\b\u0003\u0002\u0002\u0002\u0004\u0002\u000f\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function matlabLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

matlabLexer.prototype = Object.create(antlr4.Lexer.prototype);
matlabLexer.prototype.constructor = matlabLexer;

Object.defineProperty(matlabLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

matlabLexer.EOF = antlr4.Token.EOF;
matlabLexer.WORD = 1;

matlabLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

matlabLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

matlabLexer.prototype.literalNames = [  ];

matlabLexer.prototype.symbolicNames = [ null, "WORD" ];

matlabLexer.prototype.ruleNames = [ "LOWERCASE", "UPPERCASE", "WORD" ];

matlabLexer.prototype.grammarFileName = "Matlab.g4";



exports.matlabLexer = matlabLexer;


// Generated from String.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u0005!\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0005",
    "\u0006\u001c\n\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0002\u0002",
    "\t\u0003\u0002\u0005\u0002\u0007\u0002\t\u0002\u000b\u0003\r\u0004\u000f",
    "\u0005\u0003\u0002\u0005\u0003\u0002c|\u0003\u0002C\\\u0003\u00022;",
    "\u001d\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002",
    "\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0003\u0011\u0003\u0002\u0002",
    "\u0002\u0005\u0013\u0003\u0002\u0002\u0002\u0007\u0015\u0003\u0002\u0002",
    "\u0002\t\u0017\u0003\u0002\u0002\u0002\u000b\u001b\u0003\u0002\u0002",
    "\u0002\r\u001d\u0003\u0002\u0002\u0002\u000f\u001f\u0003\u0002\u0002",
    "\u0002\u0011\u0012\t\u0002\u0002\u0002\u0012\u0004\u0003\u0002\u0002",
    "\u0002\u0013\u0014\t\u0003\u0002\u0002\u0014\u0006\u0003\u0002\u0002",
    "\u0002\u0015\u0016\t\u0004\u0002\u0002\u0016\b\u0003\u0002\u0002\u0002",
    "\u0017\u0018\u0007a\u0002\u0002\u0018\n\u0003\u0002\u0002\u0002\u0019",
    "\u001c\u0005\u0003\u0002\u0002\u001a\u001c\u0005\u0005\u0003\u0002\u001b",
    "\u0019\u0003\u0002\u0002\u0002\u001b\u001a\u0003\u0002\u0002\u0002\u001c",
    "\f\u0003\u0002\u0002\u0002\u001d\u001e\u0005\u0007\u0004\u0002\u001e",
    "\u000e\u0003\u0002\u0002\u0002\u001f \u0005\t\u0005\u0002 \u0010\u0003",
    "\u0002\u0002\u0002\u0004\u0002\u001b\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function StringLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

StringLexer.prototype = Object.create(antlr4.Lexer.prototype);
StringLexer.prototype.constructor = StringLexer;

StringLexer.EOF = antlr4.Token.EOF;
StringLexer.LETRA = 1;
StringLexer.DIGITO = 2;
StringLexer.SEPARADOR = 3;


StringLexer.modeNames = [ "DEFAULT_MODE" ];

StringLexer.literalNames = [  ];

StringLexer.symbolicNames = [ null, "LETRA", "DIGITO", "SEPARADOR" ];

StringLexer.ruleNames = [ "MINUSCULAS", "MAYUSCULAS", "NUMBER", "GUION", 
                          "LETRA", "DIGITO", "SEPARADOR" ];

StringLexer.grammarFileName = "String.g4";



exports.StringLexer = StringLexer;


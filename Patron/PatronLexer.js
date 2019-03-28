// Generated from Patron.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0002\u0006%\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0005\u0006\u001e\n\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003",
    "\b\u0003\t\u0003\t\u0002\u0002\n\u0003\u0002\u0005\u0002\u0007\u0002",
    "\t\u0002\u000b\u0003\r\u0004\u000f\u0005\u0011\u0006\u0003\u0002\u0005",
    "\u0003\u0002c|\u0003\u0002C\\\u0003\u00022;!\u0002\u000b\u0003\u0002",
    "\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002",
    "\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0003\u0013\u0003\u0002",
    "\u0002\u0002\u0005\u0015\u0003\u0002\u0002\u0002\u0007\u0017\u0003\u0002",
    "\u0002\u0002\t\u0019\u0003\u0002\u0002\u0002\u000b\u001d\u0003\u0002",
    "\u0002\u0002\r\u001f\u0003\u0002\u0002\u0002\u000f!\u0003\u0002\u0002",
    "\u0002\u0011#\u0003\u0002\u0002\u0002\u0013\u0014\t\u0002\u0002\u0002",
    "\u0014\u0004\u0003\u0002\u0002\u0002\u0015\u0016\t\u0003\u0002\u0002",
    "\u0016\u0006\u0003\u0002\u0002\u0002\u0017\u0018\t\u0004\u0002\u0002",
    "\u0018\b\u0003\u0002\u0002\u0002\u0019\u001a\u0007a\u0002\u0002\u001a",
    "\n\u0003\u0002\u0002\u0002\u001b\u001e\u0005\u0003\u0002\u0002\u001c",
    "\u001e\u0005\u0005\u0003\u0002\u001d\u001b\u0003\u0002\u0002\u0002\u001d",
    "\u001c\u0003\u0002\u0002\u0002\u001e\f\u0003\u0002\u0002\u0002\u001f",
    " \u0005\u0007\u0004\u0002 \u000e\u0003\u0002\u0002\u0002!\"\u0005\t",
    "\u0005\u0002\"\u0010\u0003\u0002\u0002\u0002#$\u00070\u0002\u0002$\u0012",
    "\u0003\u0002\u0002\u0002\u0004\u0002\u001d\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function PatronLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

PatronLexer.prototype = Object.create(antlr4.Lexer.prototype);
PatronLexer.prototype.constructor = PatronLexer;

PatronLexer.EOF = antlr4.Token.EOF;
PatronLexer.LETRA = 1;
PatronLexer.DIGITO = 2;
PatronLexer.SEPARADOR = 3;
PatronLexer.PUNTO = 4;


PatronLexer.modeNames = [ "DEFAULT_MODE" ];

PatronLexer.literalNames = [  ];

PatronLexer.symbolicNames = [ null, "LETRA", "DIGITO", "SEPARADOR", "PUNTO" ];

PatronLexer.ruleNames = [ "MINUSCULAS", "MAYUSCULAS", "NUMBER", "GUION", 
                          "LETRA", "DIGITO", "SEPARADOR", "PUNTO" ];

PatronLexer.grammarFileName = "Patron.g4";



exports.PatronLexer = PatronLexer;


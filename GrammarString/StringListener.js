// Generated from String.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by StringParser.
function StringListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

StringListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
StringListener.prototype.constructor = StringListener;

// Enter a parse tree produced by StringParser#evaluar.
StringListener.prototype.enterEvaluar = function(ctx) {
};

// Exit a parse tree produced by StringParser#evaluar.
StringListener.prototype.exitEvaluar = function(ctx) {
};


// Enter a parse tree produced by StringParser#variable.
StringListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by StringParser#variable.
StringListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by StringParser#inicio.
StringListener.prototype.enterInicio = function(ctx) {
};

// Exit a parse tree produced by StringParser#inicio.
StringListener.prototype.exitInicio = function(ctx) {
};


// Enter a parse tree produced by StringParser#cuerpoDef.
StringListener.prototype.enterCuerpoDef = function(ctx) {
};

// Exit a parse tree produced by StringParser#cuerpoDef.
StringListener.prototype.exitCuerpoDef = function(ctx) {
};



exports.StringListener = StringListener;
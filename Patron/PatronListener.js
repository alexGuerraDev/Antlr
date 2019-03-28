// Generated from Patron.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by PatronParser.
function PatronListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

PatronListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
PatronListener.prototype.constructor = PatronListener;

// Enter a parse tree produced by PatronParser#evaluar.
PatronListener.prototype.enterEvaluar = function(ctx) {
};

// Exit a parse tree produced by PatronParser#evaluar.
PatronListener.prototype.exitEvaluar = function(ctx) {
};


// Enter a parse tree produced by PatronParser#nombreArchivo.
PatronListener.prototype.enterNombreArchivo = function(ctx) {
};

// Exit a parse tree produced by PatronParser#nombreArchivo.
PatronListener.prototype.exitNombreArchivo = function(ctx) {
};


// Enter a parse tree produced by PatronParser#extension.
PatronListener.prototype.enterExtension = function(ctx) {
};

// Exit a parse tree produced by PatronParser#extension.
PatronListener.prototype.exitExtension = function(ctx) {
};


// Enter a parse tree produced by PatronParser#nombre.
PatronListener.prototype.enterNombre = function(ctx) {
};

// Exit a parse tree produced by PatronParser#nombre.
PatronListener.prototype.exitNombre = function(ctx) {
};



exports.PatronListener = PatronListener;
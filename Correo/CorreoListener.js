// Generated from Correo.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by CorreoParser.
function CorreoListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

CorreoListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CorreoListener.prototype.constructor = CorreoListener;

// Enter a parse tree produced by CorreoParser#evaluar.
CorreoListener.prototype.enterEvaluar = function(ctx) {
};

// Exit a parse tree produced by CorreoParser#evaluar.
CorreoListener.prototype.exitEvaluar = function(ctx) {
};


// Enter a parse tree produced by CorreoParser#correo.
CorreoListener.prototype.enterCorreo = function(ctx) {
};

// Exit a parse tree produced by CorreoParser#correo.
CorreoListener.prototype.exitCorreo = function(ctx) {
};


// Enter a parse tree produced by CorreoParser#variable.
CorreoListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by CorreoParser#variable.
CorreoListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by CorreoParser#cuerpoDef.
CorreoListener.prototype.enterCuerpoDef = function(ctx) {
};

// Exit a parse tree produced by CorreoParser#cuerpoDef.
CorreoListener.prototype.exitCuerpoDef = function(ctx) {
};


// Enter a parse tree produced by CorreoParser#inicioCorreo.
CorreoListener.prototype.enterInicioCorreo = function(ctx) {
};

// Exit a parse tree produced by CorreoParser#inicioCorreo.
CorreoListener.prototype.exitInicioCorreo = function(ctx) {
};



exports.CorreoListener = CorreoListener;
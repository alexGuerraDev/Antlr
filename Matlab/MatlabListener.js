// Generated from Matlab.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by MatlabParser.
function MatlabListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

MatlabListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
MatlabListener.prototype.constructor = MatlabListener;

// Enter a parse tree produced by MatlabParser#evaluar.
MatlabListener.prototype.enterEvaluar = function(ctx) {
};

// Exit a parse tree produced by MatlabParser#evaluar.
MatlabListener.prototype.exitEvaluar = function(ctx) {
};


// Enter a parse tree produced by MatlabParser#line.
MatlabListener.prototype.enterLine = function(ctx) {
};

// Exit a parse tree produced by MatlabParser#line.
MatlabListener.prototype.exitLine = function(ctx) {
};



exports.MatlabListener = MatlabListener;
// Generated from Matlab/Matlab.g4 by ANTLR 4.7.2
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


// Enter a parse tree produced by MatlabParser#expresion.
MatlabListener.prototype.enterExpresion = function(ctx) {
};

// Exit a parse tree produced by MatlabParser#expresion.
MatlabListener.prototype.exitExpresion = function(ctx) {
};


// Enter a parse tree produced by MatlabParser#switch_.
MatlabListener.prototype.enterSwitch_ = function(ctx) {
};

// Exit a parse tree produced by MatlabParser#switch_.
MatlabListener.prototype.exitSwitch_ = function(ctx) {
};


// Enter a parse tree produced by MatlabParser#case_.
MatlabListener.prototype.enterCase_ = function(ctx) {
};

// Exit a parse tree produced by MatlabParser#case_.
MatlabListener.prototype.exitCase_ = function(ctx) {
};


// Enter a parse tree produced by MatlabParser#otherwise_.
MatlabListener.prototype.enterOtherwise_ = function(ctx) {
};

// Exit a parse tree produced by MatlabParser#otherwise_.
MatlabListener.prototype.exitOtherwise_ = function(ctx) {
};


// Enter a parse tree produced by MatlabParser#sentencia.
MatlabListener.prototype.enterSentencia = function(ctx) {
};

// Exit a parse tree produced by MatlabParser#sentencia.
MatlabListener.prototype.exitSentencia = function(ctx) {
};


// Enter a parse tree produced by MatlabParser#end_.
MatlabListener.prototype.enterEnd_ = function(ctx) {
};

// Exit a parse tree produced by MatlabParser#end_.
MatlabListener.prototype.exitEnd_ = function(ctx) {
};


// Enter a parse tree produced by MatlabParser#const_.
MatlabListener.prototype.enterConst_ = function(ctx) {
};

// Exit a parse tree produced by MatlabParser#const_.
MatlabListener.prototype.exitConst_ = function(ctx) {
};


// Enter a parse tree produced by MatlabParser#parens.
MatlabListener.prototype.enterParens = function(ctx) {
};

// Exit a parse tree produced by MatlabParser#parens.
MatlabListener.prototype.exitParens = function(ctx) {
};


// Enter a parse tree produced by MatlabParser#MulDiv.
MatlabListener.prototype.enterMulDiv = function(ctx) {
};

// Exit a parse tree produced by MatlabParser#MulDiv.
MatlabListener.prototype.exitMulDiv = function(ctx) {
};


// Enter a parse tree produced by MatlabParser#AddSub.
MatlabListener.prototype.enterAddSub = function(ctx) {
};

// Exit a parse tree produced by MatlabParser#AddSub.
MatlabListener.prototype.exitAddSub = function(ctx) {
};


// Enter a parse tree produced by MatlabParser#id.
MatlabListener.prototype.enterId = function(ctx) {
};

// Exit a parse tree produced by MatlabParser#id.
MatlabListener.prototype.exitId = function(ctx) {
};


// Enter a parse tree produced by MatlabParser#int.
MatlabListener.prototype.enterInt = function(ctx) {
};

// Exit a parse tree produced by MatlabParser#int.
MatlabListener.prototype.exitInt = function(ctx) {
};


// Enter a parse tree produced by MatlabParser#digito.
MatlabListener.prototype.enterDigito = function(ctx) {
};

// Exit a parse tree produced by MatlabParser#digito.
MatlabListener.prototype.exitDigito = function(ctx) {
};


// Enter a parse tree produced by MatlabParser#variable.
MatlabListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by MatlabParser#variable.
MatlabListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by MatlabParser#inic_variable.
MatlabListener.prototype.enterInic_variable = function(ctx) {
};

// Exit a parse tree produced by MatlabParser#inic_variable.
MatlabListener.prototype.exitInic_variable = function(ctx) {
};


// Enter a parse tree produced by MatlabParser#cuerpo_variable.
MatlabListener.prototype.enterCuerpo_variable = function(ctx) {
};

// Exit a parse tree produced by MatlabParser#cuerpo_variable.
MatlabListener.prototype.exitCuerpo_variable = function(ctx) {
};



exports.MatlabListener = MatlabListener;
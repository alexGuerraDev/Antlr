// Generated from Osia/Osia.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var OsiaListener = require('./OsiaListener').OsiaListener;
var grammarFileName = "Osia.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0016a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0005\u0004&\n\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0007\u0003\u0007\u0005\u00072\n\u0007\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0005\b<\n\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0007\bD\n\b\f\b\u000e\bG\u000b\b\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tN\n\t\u0003\n\u0003\n\u0005",
    "\nR\n\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b",
    "\u0003\u000b\u0003\u000b\u0007\u000b\\\n\u000b\f\u000b\u000e\u000b_",
    "\u000b\u000b\u0003\u000b\u0002\u0003\u000e\f\u0002\u0004\u0006\b\n\f",
    "\u000e\u0010\u0012\u0014\u0002\u0004\u0003\u0002\u0005\u0006\u0003\u0002",
    "\u0007\b\u0002c\u0002\u0016\u0003\u0002\u0002\u0002\u0004\u0019\u0003",
    "\u0002\u0002\u0002\u0006%\u0003\u0002\u0002\u0002\b\'\u0003\u0002\u0002",
    "\u0002\n,\u0003\u0002\u0002\u0002\f1\u0003\u0002\u0002\u0002\u000e;",
    "\u0003\u0002\u0002\u0002\u0010M\u0003\u0002\u0002\u0002\u0012O\u0003",
    "\u0002\u0002\u0002\u0014]\u0003\u0002\u0002\u0002\u0016\u0017\u0007",
    "\u000b\u0002\u0002\u0017\u0018\u0007\u0002\u0002\u0003\u0018\u0003\u0003",
    "\u0002\u0002\u0002\u0019\u001a\u0007\u0014\u0002\u0002\u001a\u001b\u0007",
    "\u0003\u0002\u0002\u001b\u001c\u0005\u0006\u0004\u0002\u001c\u001d\u0007",
    "\u0004\u0002\u0002\u001d\u001e\u0005\u000e\b\u0002\u001e\u001f\u0005",
    "\u0010\t\u0002\u001f\u0005\u0003\u0002\u0002\u0002 !\u0005\f\u0007\u0002",
    "!\"\u0007\u0012\u0002\u0002\"#\u0005\f\u0007\u0002#&\u0003\u0002\u0002",
    "\u0002$&\u0005\b\u0005\u0002% \u0003\u0002\u0002\u0002%$\u0003\u0002",
    "\u0002\u0002&\u0007\u0003\u0002\u0002\u0002\'(\u0007\u0003\u0002\u0002",
    "()\u0005\u0006\u0004\u0002)*\u0007\u0004\u0002\u0002*+\u0005\n\u0006",
    "\u0002+\t\u0003\u0002\u0002\u0002,-\u0007\u0013\u0002\u0002-.\u0005",
    "\b\u0005\u0002.\u000b\u0003\u0002\u0002\u0002/2\u0005\u0012\n\u0002",
    "02\u0007\u000f\u0002\u00021/\u0003\u0002\u0002\u000210\u0003\u0002\u0002",
    "\u00022\r\u0003\u0002\u0002\u000234\b\b\u0001\u00024<\u0007\u000f\u0002",
    "\u00025<\u0005\u0012\n\u00026<\u0007\n\u0002\u000278\u0007\u0003\u0002",
    "\u000289\u0005\u000e\b\u00029:\u0007\u0004\u0002\u0002:<\u0003\u0002",
    "\u0002\u0002;3\u0003\u0002\u0002\u0002;5\u0003\u0002\u0002\u0002;6\u0003",
    "\u0002\u0002\u0002;7\u0003\u0002\u0002\u0002<E\u0003\u0002\u0002\u0002",
    "=>\f\b\u0002\u0002>?\t\u0002\u0002\u0002?D\u0005\u000e\b\t@A\f\u0007",
    "\u0002\u0002AB\t\u0003\u0002\u0002BD\u0005\u000e\b\bC=\u0003\u0002\u0002",
    "\u0002C@\u0003\u0002\u0002\u0002DG\u0003\u0002\u0002\u0002EC\u0003\u0002",
    "\u0002\u0002EF\u0003\u0002\u0002\u0002F\u000f\u0003\u0002\u0002\u0002",
    "GE\u0003\u0002\u0002\u0002HN\u0007\u0016\u0002\u0002IJ\u0007\u0015\u0002",
    "\u0002JK\u0005\u000e\b\u0002KL\u0007\u0016\u0002\u0002LN\u0003\u0002",
    "\u0002\u0002MH\u0003\u0002\u0002\u0002MI\u0003\u0002\u0002\u0002N\u0011",
    "\u0003\u0002\u0002\u0002OQ\u0007\t\u0002\u0002PR\u0007\f\u0002\u0002",
    "QP\u0003\u0002\u0002\u0002QR\u0003\u0002\u0002\u0002RS\u0003\u0002\u0002",
    "\u0002ST\u0005\u0014\u000b\u0002T\u0013\u0003\u0002\u0002\u0002U\\\u0007",
    "\t\u0002\u0002V\\\u0007\n\u0002\u0002WX\u0007\t\u0002\u0002X\\\u0007",
    "\f\u0002\u0002YZ\u0007\n\u0002\u0002Z\\\u0007\f\u0002\u0002[U\u0003",
    "\u0002\u0002\u0002[V\u0003\u0002\u0002\u0002[W\u0003\u0002\u0002\u0002",
    "[Y\u0003\u0002\u0002\u0002\\_\u0003\u0002\u0002\u0002][\u0003\u0002",
    "\u0002\u0002]^\u0003\u0002\u0002\u0002^\u0015\u0003\u0002\u0002\u0002",
    "_]\u0003\u0002\u0002\u0002\u000b%1;CEMQ[]"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'('", "')'", "'*'", "'/'", "'+'", "'-'", null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, "'if'", "'else'", "'end'" ];

var symbolicNames = [ null, null, null, null, null, null, null, "LETRA", 
                      "DIGITO", "ENTEROS", "SEPARADOR", "ESPACIO", "SALTO", 
                      "CONSTANTE", "ENTERO", "DECIMAL", "OPERADORES_RELACIONALES", 
                      "OPERADORES_LOGICOS", "IF", "ELSE", "END" ];

var ruleNames =  [ "evaluar", "expresion", "condition", "aux", "aux_", "var_or_const", 
                   "expr", "end_", "variable", "cuerpo_variable" ];

function OsiaParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

OsiaParser.prototype = Object.create(antlr4.Parser.prototype);
OsiaParser.prototype.constructor = OsiaParser;

Object.defineProperty(OsiaParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

OsiaParser.EOF = antlr4.Token.EOF;
OsiaParser.T__0 = 1;
OsiaParser.T__1 = 2;
OsiaParser.T__2 = 3;
OsiaParser.T__3 = 4;
OsiaParser.T__4 = 5;
OsiaParser.T__5 = 6;
OsiaParser.LETRA = 7;
OsiaParser.DIGITO = 8;
OsiaParser.ENTEROS = 9;
OsiaParser.SEPARADOR = 10;
OsiaParser.ESPACIO = 11;
OsiaParser.SALTO = 12;
OsiaParser.CONSTANTE = 13;
OsiaParser.ENTERO = 14;
OsiaParser.DECIMAL = 15;
OsiaParser.OPERADORES_RELACIONALES = 16;
OsiaParser.OPERADORES_LOGICOS = 17;
OsiaParser.IF = 18;
OsiaParser.ELSE = 19;
OsiaParser.END = 20;

OsiaParser.RULE_evaluar = 0;
OsiaParser.RULE_expresion = 1;
OsiaParser.RULE_condition = 2;
OsiaParser.RULE_aux = 3;
OsiaParser.RULE_aux_ = 4;
OsiaParser.RULE_var_or_const = 5;
OsiaParser.RULE_expr = 6;
OsiaParser.RULE_end_ = 7;
OsiaParser.RULE_variable = 8;
OsiaParser.RULE_cuerpo_variable = 9;


function EvaluarContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OsiaParser.RULE_evaluar;
    return this;
}

EvaluarContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EvaluarContext.prototype.constructor = EvaluarContext;

EvaluarContext.prototype.ENTEROS = function() {
    return this.getToken(OsiaParser.ENTEROS, 0);
};

EvaluarContext.prototype.EOF = function() {
    return this.getToken(OsiaParser.EOF, 0);
};

EvaluarContext.prototype.enterRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.enterEvaluar(this);
	}
};

EvaluarContext.prototype.exitRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.exitEvaluar(this);
	}
};




OsiaParser.EvaluarContext = EvaluarContext;

OsiaParser.prototype.evaluar = function() {

    var localctx = new EvaluarContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, OsiaParser.RULE_evaluar);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 20;
        this.match(OsiaParser.ENTEROS);
        this.state = 21;
        this.match(OsiaParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpresionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OsiaParser.RULE_expresion;
    return this;
}

ExpresionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpresionContext.prototype.constructor = ExpresionContext;

ExpresionContext.prototype.IF = function() {
    return this.getToken(OsiaParser.IF, 0);
};

ExpresionContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

ExpresionContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

ExpresionContext.prototype.end_ = function() {
    return this.getTypedRuleContext(End_Context,0);
};

ExpresionContext.prototype.enterRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.enterExpresion(this);
	}
};

ExpresionContext.prototype.exitRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.exitExpresion(this);
	}
};




OsiaParser.ExpresionContext = ExpresionContext;

OsiaParser.prototype.expresion = function() {

    var localctx = new ExpresionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, OsiaParser.RULE_expresion);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        this.match(OsiaParser.IF);
        this.state = 24;
        this.match(OsiaParser.T__0);
        this.state = 25;
        this.condition();
        this.state = 26;
        this.match(OsiaParser.T__1);
        this.state = 27;
        this.expr(0);
        this.state = 28;
        this.end_();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConditionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OsiaParser.RULE_condition;
    return this;
}

ConditionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConditionContext.prototype.constructor = ConditionContext;

ConditionContext.prototype.var_or_const = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Var_or_constContext);
    } else {
        return this.getTypedRuleContext(Var_or_constContext,i);
    }
};

ConditionContext.prototype.OPERADORES_RELACIONALES = function() {
    return this.getToken(OsiaParser.OPERADORES_RELACIONALES, 0);
};

ConditionContext.prototype.aux = function() {
    return this.getTypedRuleContext(AuxContext,0);
};

ConditionContext.prototype.enterRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.enterCondition(this);
	}
};

ConditionContext.prototype.exitRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.exitCondition(this);
	}
};




OsiaParser.ConditionContext = ConditionContext;

OsiaParser.prototype.condition = function() {

    var localctx = new ConditionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, OsiaParser.RULE_condition);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 35;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case OsiaParser.LETRA:
        case OsiaParser.CONSTANTE:
            this.state = 30;
            this.var_or_const();
            this.state = 31;
            this.match(OsiaParser.OPERADORES_RELACIONALES);
            this.state = 32;
            this.var_or_const();
            break;
        case OsiaParser.T__0:
            this.state = 34;
            this.aux();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AuxContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OsiaParser.RULE_aux;
    return this;
}

AuxContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AuxContext.prototype.constructor = AuxContext;

AuxContext.prototype.condition = function() {
    return this.getTypedRuleContext(ConditionContext,0);
};

AuxContext.prototype.aux_ = function() {
    return this.getTypedRuleContext(Aux_Context,0);
};

AuxContext.prototype.enterRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.enterAux(this);
	}
};

AuxContext.prototype.exitRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.exitAux(this);
	}
};




OsiaParser.AuxContext = AuxContext;

OsiaParser.prototype.aux = function() {

    var localctx = new AuxContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, OsiaParser.RULE_aux);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 37;
        this.match(OsiaParser.T__0);
        this.state = 38;
        this.condition();
        this.state = 39;
        this.match(OsiaParser.T__1);
        this.state = 40;
        this.aux_();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Aux_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OsiaParser.RULE_aux_;
    return this;
}

Aux_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Aux_Context.prototype.constructor = Aux_Context;

Aux_Context.prototype.OPERADORES_LOGICOS = function() {
    return this.getToken(OsiaParser.OPERADORES_LOGICOS, 0);
};

Aux_Context.prototype.aux = function() {
    return this.getTypedRuleContext(AuxContext,0);
};

Aux_Context.prototype.enterRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.enterAux_(this);
	}
};

Aux_Context.prototype.exitRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.exitAux_(this);
	}
};




OsiaParser.Aux_Context = Aux_Context;

OsiaParser.prototype.aux_ = function() {

    var localctx = new Aux_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 8, OsiaParser.RULE_aux_);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 42;
        this.match(OsiaParser.OPERADORES_LOGICOS);
        this.state = 43;
        this.aux();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Var_or_constContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OsiaParser.RULE_var_or_const;
    return this;
}

Var_or_constContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Var_or_constContext.prototype.constructor = Var_or_constContext;

Var_or_constContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

Var_or_constContext.prototype.CONSTANTE = function() {
    return this.getToken(OsiaParser.CONSTANTE, 0);
};

Var_or_constContext.prototype.enterRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.enterVar_or_const(this);
	}
};

Var_or_constContext.prototype.exitRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.exitVar_or_const(this);
	}
};




OsiaParser.Var_or_constContext = Var_or_constContext;

OsiaParser.prototype.var_or_const = function() {

    var localctx = new Var_or_constContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, OsiaParser.RULE_var_or_const);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 47;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case OsiaParser.LETRA:
            this.state = 45;
            this.variable();
            break;
        case OsiaParser.CONSTANTE:
            this.state = 46;
            this.match(OsiaParser.CONSTANTE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExprContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OsiaParser.RULE_expr;
    return this;
}

ExprContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExprContext.prototype.constructor = ExprContext;


 
ExprContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ParensContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ParensContext.prototype = Object.create(ExprContext.prototype);
ParensContext.prototype.constructor = ParensContext;

OsiaParser.ParensContext = ParensContext;

ParensContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ParensContext.prototype.enterRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.enterParens(this);
	}
};

ParensContext.prototype.exitRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.exitParens(this);
	}
};


function MulDivContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

MulDivContext.prototype = Object.create(ExprContext.prototype);
MulDivContext.prototype.constructor = MulDivContext;

OsiaParser.MulDivContext = MulDivContext;

MulDivContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
MulDivContext.prototype.enterRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.enterMulDiv(this);
	}
};

MulDivContext.prototype.exitRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.exitMulDiv(this);
	}
};


function AddSubContext(parser, ctx) {
	ExprContext.call(this, parser);
    this.op = null; // Token;
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

AddSubContext.prototype = Object.create(ExprContext.prototype);
AddSubContext.prototype.constructor = AddSubContext;

OsiaParser.AddSubContext = AddSubContext;

AddSubContext.prototype.expr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExprContext);
    } else {
        return this.getTypedRuleContext(ExprContext,i);
    }
};
AddSubContext.prototype.enterRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.enterAddSub(this);
	}
};

AddSubContext.prototype.exitRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.exitAddSub(this);
	}
};


function IdContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IdContext.prototype = Object.create(ExprContext.prototype);
IdContext.prototype.constructor = IdContext;

OsiaParser.IdContext = IdContext;

IdContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};
IdContext.prototype.enterRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.enterId(this);
	}
};

IdContext.prototype.exitRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.exitId(this);
	}
};


function IntContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IntContext.prototype = Object.create(ExprContext.prototype);
IntContext.prototype.constructor = IntContext;

OsiaParser.IntContext = IntContext;

IntContext.prototype.CONSTANTE = function() {
    return this.getToken(OsiaParser.CONSTANTE, 0);
};
IntContext.prototype.enterRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.enterInt(this);
	}
};

IntContext.prototype.exitRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.exitInt(this);
	}
};


function DigitoContext(parser, ctx) {
	ExprContext.call(this, parser);
    ExprContext.prototype.copyFrom.call(this, ctx);
    return this;
}

DigitoContext.prototype = Object.create(ExprContext.prototype);
DigitoContext.prototype.constructor = DigitoContext;

OsiaParser.DigitoContext = DigitoContext;

DigitoContext.prototype.DIGITO = function() {
    return this.getToken(OsiaParser.DIGITO, 0);
};
DigitoContext.prototype.enterRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.enterDigito(this);
	}
};

DigitoContext.prototype.exitRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.exitDigito(this);
	}
};



OsiaParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, OsiaParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case OsiaParser.CONSTANTE:
            localctx = new IntContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 50;
            this.match(OsiaParser.CONSTANTE);
            break;
        case OsiaParser.LETRA:
            localctx = new IdContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 51;
            this.variable();
            break;
        case OsiaParser.DIGITO:
            localctx = new DigitoContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 52;
            this.match(OsiaParser.DIGITO);
            break;
        case OsiaParser.T__0:
            localctx = new ParensContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 53;
            this.match(OsiaParser.T__0);
            this.state = 54;
            this.expr(0);
            this.state = 55;
            this.match(OsiaParser.T__1);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 67;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,4,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 65;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, OsiaParser.RULE_expr);
                    this.state = 59;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 60;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===OsiaParser.T__2 || _la===OsiaParser.T__3)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 61;
                    this.expr(7);
                    break;

                case 2:
                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, OsiaParser.RULE_expr);
                    this.state = 62;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 63;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===OsiaParser.T__4 || _la===OsiaParser.T__5)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 64;
                    this.expr(6);
                    break;

                } 
            }
            this.state = 69;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,4,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function End_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OsiaParser.RULE_end_;
    return this;
}

End_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
End_Context.prototype.constructor = End_Context;

End_Context.prototype.END = function() {
    return this.getToken(OsiaParser.END, 0);
};

End_Context.prototype.ELSE = function() {
    return this.getToken(OsiaParser.ELSE, 0);
};

End_Context.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

End_Context.prototype.enterRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.enterEnd_(this);
	}
};

End_Context.prototype.exitRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.exitEnd_(this);
	}
};




OsiaParser.End_Context = End_Context;

OsiaParser.prototype.end_ = function() {

    var localctx = new End_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 14, OsiaParser.RULE_end_);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 75;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case OsiaParser.END:
            this.state = 70;
            this.match(OsiaParser.END);
            break;
        case OsiaParser.ELSE:
            this.state = 71;
            this.match(OsiaParser.ELSE);
            this.state = 72;
            this.expr(0);
            this.state = 73;
            this.match(OsiaParser.END);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OsiaParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.LETRA = function() {
    return this.getToken(OsiaParser.LETRA, 0);
};

VariableContext.prototype.cuerpo_variable = function() {
    return this.getTypedRuleContext(Cuerpo_variableContext,0);
};

VariableContext.prototype.SEPARADOR = function() {
    return this.getToken(OsiaParser.SEPARADOR, 0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.exitVariable(this);
	}
};




OsiaParser.VariableContext = VariableContext;

OsiaParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, OsiaParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        this.match(OsiaParser.LETRA);
        this.state = 79;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        if(la_===1) {
            this.state = 78;
            this.match(OsiaParser.SEPARADOR);

        }
        this.state = 81;
        this.cuerpo_variable();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Cuerpo_variableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = OsiaParser.RULE_cuerpo_variable;
    return this;
}

Cuerpo_variableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Cuerpo_variableContext.prototype.constructor = Cuerpo_variableContext;

Cuerpo_variableContext.prototype.LETRA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(OsiaParser.LETRA);
    } else {
        return this.getToken(OsiaParser.LETRA, i);
    }
};


Cuerpo_variableContext.prototype.DIGITO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(OsiaParser.DIGITO);
    } else {
        return this.getToken(OsiaParser.DIGITO, i);
    }
};


Cuerpo_variableContext.prototype.SEPARADOR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(OsiaParser.SEPARADOR);
    } else {
        return this.getToken(OsiaParser.SEPARADOR, i);
    }
};


Cuerpo_variableContext.prototype.enterRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.enterCuerpo_variable(this);
	}
};

Cuerpo_variableContext.prototype.exitRule = function(listener) {
    if(listener instanceof OsiaListener ) {
        listener.exitCuerpo_variable(this);
	}
};




OsiaParser.Cuerpo_variableContext = Cuerpo_variableContext;

OsiaParser.prototype.cuerpo_variable = function() {

    var localctx = new Cuerpo_variableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, OsiaParser.RULE_cuerpo_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 91;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 89;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 83;
                    this.match(OsiaParser.LETRA);
                    break;

                case 2:
                    this.state = 84;
                    this.match(OsiaParser.DIGITO);
                    break;

                case 3:
                    this.state = 85;
                    this.match(OsiaParser.LETRA);
                    this.state = 86;
                    this.match(OsiaParser.SEPARADOR);
                    break;

                case 4:
                    this.state = 87;
                    this.match(OsiaParser.DIGITO);
                    this.state = 88;
                    this.match(OsiaParser.SEPARADOR);
                    break;

                } 
            }
            this.state = 93;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


OsiaParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 6:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

OsiaParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);
		case 1:
			return this.precpred(this._ctx, 5);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.OsiaParser = OsiaParser;

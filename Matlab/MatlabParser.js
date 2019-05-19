// Generated from Matlab/Matlab.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MatlabListener = require('./MatlabListener').MatlabListener;
var grammarFileName = "Matlab.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0013\u009c\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0007\u0004\'\n\u0004\f\u0004\u000e\u0004*\u000b\u0004",
    "\u0003\u0004\u0006\u0004-\n\u0004\r\u0004\u000e\u0004.\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0007\u00055\n\u0005\f\u0005\u000e\u0005",
    "8\u000b\u0005\u0003\u0005\u0007\u0005;\n\u0005\f\u0005\u000e\u0005>",
    "\u000b\u0005\u0003\u0005\u0006\u0005A\n\u0005\r\u0005\u000e\u0005B\u0003",
    "\u0006\u0003\u0006\u0007\u0006G\n\u0006\f\u0006\u000e\u0006J\u000b\u0006",
    "\u0003\u0006\u0007\u0006M\n\u0006\f\u0006\u000e\u0006P\u000b\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0007\u0007U\n\u0007\f\u0007\u000e\u0007",
    "X\u000b\u0007\u0003\u0007\u0003\u0007\u0007\u0007\\\n\u0007\f\u0007",
    "\u000e\u0007_\u000b\u0007\u0003\u0007\u0006\u0007b\n\u0007\r\u0007\u000e",
    "\u0007c\u0003\b\u0003\b\u0007\bh\n\b\f\b\u000e\bk\u000b\b\u0003\b\u0007",
    "\bn\n\b\f\b\u000e\bq\u000b\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005\n}\n\n\u0003\n\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n\u0085\n\n\f\n\u000e\n\u0088",
    "\u000b\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0005\f",
    "\u008f\n\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007\r\u0097",
    "\n\r\f\r\u000e\r\u009a\u000b\r\u0003\r\u0002\u0003\u0012\u000e\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u0002\u0005\u0004",
    "\u0002\u000b\u000b\u000f\u000f\u0003\u0002\u0003\u0004\u0003\u0002\u0005",
    "\u0006\u0002\u00a5\u0002\u001a\u0003\u0002\u0002\u0002\u0004\u001d\u0003",
    "\u0002\u0002\u0002\u0006\"\u0003\u0002\u0002\u0002\b@\u0003\u0002\u0002",
    "\u0002\nD\u0003\u0002\u0002\u0002\fV\u0003\u0002\u0002\u0002\u000ee",
    "\u0003\u0002\u0002\u0002\u0010r\u0003\u0002\u0002\u0002\u0012|\u0003",
    "\u0002\u0002\u0002\u0014\u0089\u0003\u0002\u0002\u0002\u0016\u008c\u0003",
    "\u0002\u0002\u0002\u0018\u0098\u0003\u0002\u0002\u0002\u001a\u001b\u0005",
    "\u0004\u0003\u0002\u001b\u001c\u0007\u0002\u0002\u0003\u001c\u0003\u0003",
    "\u0002\u0002\u0002\u001d\u001e\u0005\u0006\u0004\u0002\u001e\u001f\u0005",
    "\b\u0005\u0002\u001f \u0005\n\u0006\u0002 !\u0005\u000e\b\u0002!\u0005",
    "\u0003\u0002\u0002\u0002\"#\u0007\u0010\u0002\u0002#$\u0007\r\u0002",
    "\u0002$(\u0005\u0014\u000b\u0002%\'\u0007\r\u0002\u0002&%\u0003\u0002",
    "\u0002\u0002\'*\u0003\u0002\u0002\u0002(&\u0003\u0002\u0002\u0002()",
    "\u0003\u0002\u0002\u0002),\u0003\u0002\u0002\u0002*(\u0003\u0002\u0002",
    "\u0002+-\u0007\u000e\u0002\u0002,+\u0003\u0002\u0002\u0002-.\u0003\u0002",
    "\u0002\u0002.,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/\u0007",
    "\u0003\u0002\u0002\u000201\u0007\u0011\u0002\u000212\u0007\r\u0002\u0002",
    "26\u0007\u000b\u0002\u000235\u0007\r\u0002\u000243\u0003\u0002\u0002",
    "\u000258\u0003\u0002\u0002\u000264\u0003\u0002\u0002\u000267\u0003\u0002",
    "\u0002\u00027<\u0003\u0002\u0002\u000286\u0003\u0002\u0002\u00029;\u0007",
    "\u000e\u0002\u0002:9\u0003\u0002\u0002\u0002;>\u0003\u0002\u0002\u0002",
    "<:\u0003\u0002\u0002\u0002<=\u0003\u0002\u0002\u0002=?\u0003\u0002\u0002",
    "\u0002><\u0003\u0002\u0002\u0002?A\u0005\f\u0007\u0002@0\u0003\u0002",
    "\u0002\u0002AB\u0003\u0002\u0002\u0002B@\u0003\u0002\u0002\u0002BC\u0003",
    "\u0002\u0002\u0002C\t\u0003\u0002\u0002\u0002DH\u0007\u0012\u0002\u0002",
    "EG\u0007\r\u0002\u0002FE\u0003\u0002\u0002\u0002GJ\u0003\u0002\u0002",
    "\u0002HF\u0003\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002IN\u0003\u0002",
    "\u0002\u0002JH\u0003\u0002\u0002\u0002KM\u0007\u000e\u0002\u0002LK\u0003",
    "\u0002\u0002\u0002MP\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002",
    "NO\u0003\u0002\u0002\u0002OQ\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002",
    "\u0002QR\u0005\f\u0007\u0002R\u000b\u0003\u0002\u0002\u0002SU\u0007",
    "\r\u0002\u0002TS\u0003\u0002\u0002\u0002UX\u0003\u0002\u0002\u0002V",
    "T\u0003\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002WY\u0003\u0002\u0002",
    "\u0002XV\u0003\u0002\u0002\u0002Y]\u0005\u0012\n\u0002Z\\\u0007\r\u0002",
    "\u0002[Z\u0003\u0002\u0002\u0002\\_\u0003\u0002\u0002\u0002][\u0003",
    "\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^a\u0003\u0002\u0002\u0002",
    "_]\u0003\u0002\u0002\u0002`b\u0007\u000e\u0002\u0002a`\u0003\u0002\u0002",
    "\u0002bc\u0003\u0002\u0002\u0002ca\u0003\u0002\u0002\u0002cd\u0003\u0002",
    "\u0002\u0002d\r\u0003\u0002\u0002\u0002ei\u0007\u0013\u0002\u0002fh",
    "\u0007\r\u0002\u0002gf\u0003\u0002\u0002\u0002hk\u0003\u0002\u0002\u0002",
    "ig\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002\u0002jo\u0003\u0002\u0002",
    "\u0002ki\u0003\u0002\u0002\u0002ln\u0007\u000e\u0002\u0002ml\u0003\u0002",
    "\u0002\u0002nq\u0003\u0002\u0002\u0002om\u0003\u0002\u0002\u0002op\u0003",
    "\u0002\u0002\u0002p\u000f\u0003\u0002\u0002\u0002qo\u0003\u0002\u0002",
    "\u0002rs\t\u0002\u0002\u0002s\u0011\u0003\u0002\u0002\u0002tu\b\n\u0001",
    "\u0002u}\u0007\u000f\u0002\u0002v}\u0005\u0014\u000b\u0002w}\u0007\u000b",
    "\u0002\u0002xy\u0007\u0007\u0002\u0002yz\u0005\u0012\n\u0002z{\u0007",
    "\b\u0002\u0002{}\u0003\u0002\u0002\u0002|t\u0003\u0002\u0002\u0002|",
    "v\u0003\u0002\u0002\u0002|w\u0003\u0002\u0002\u0002|x\u0003\u0002\u0002",
    "\u0002}\u0086\u0003\u0002\u0002\u0002~\u007f\f\b\u0002\u0002\u007f\u0080",
    "\t\u0003\u0002\u0002\u0080\u0085\u0005\u0012\n\t\u0081\u0082\f\u0007",
    "\u0002\u0002\u0082\u0083\t\u0004\u0002\u0002\u0083\u0085\u0005\u0012",
    "\n\b\u0084~\u0003\u0002\u0002\u0002\u0084\u0081\u0003\u0002\u0002\u0002",
    "\u0085\u0088\u0003\u0002\u0002\u0002\u0086\u0084\u0003\u0002\u0002\u0002",
    "\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0013\u0003\u0002\u0002\u0002",
    "\u0088\u0086\u0003\u0002\u0002\u0002\u0089\u008a\u0005\u0016\f\u0002",
    "\u008a\u008b\u0005\u0018\r\u0002\u008b\u0015\u0003\u0002\u0002\u0002",
    "\u008c\u008e\u0007\n\u0002\u0002\u008d\u008f\u0007\f\u0002\u0002\u008e",
    "\u008d\u0003\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002\u0002\u008f",
    "\u0017\u0003\u0002\u0002\u0002\u0090\u0097\u0007\n\u0002\u0002\u0091",
    "\u0097\u0007\u000b\u0002\u0002\u0092\u0093\u0007\n\u0002\u0002\u0093",
    "\u0097\u0007\f\u0002\u0002\u0094\u0095\u0007\u000b\u0002\u0002\u0095",
    "\u0097\u0007\f\u0002\u0002\u0096\u0090\u0003\u0002\u0002\u0002\u0096",
    "\u0091\u0003\u0002\u0002\u0002\u0096\u0092\u0003\u0002\u0002\u0002\u0096",
    "\u0094\u0003\u0002\u0002\u0002\u0097\u009a\u0003\u0002\u0002\u0002\u0098",
    "\u0096\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099",
    "\u0019\u0003\u0002\u0002\u0002\u009a\u0098\u0003\u0002\u0002\u0002\u0014",
    "(.6<BHNV]cio|\u0084\u0086\u008e\u0096\u0098"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'*'", "'/'", "'+'", "'-'", "'('", "')'", null, 
                     null, null, null, null, null, null, null, "'Case'", 
                     "'Otherwise'" ];

var symbolicNames = [ null, null, null, null, null, null, null, "OPERADORES", 
                      "LETRA", "DIGITO", "SEPARADOR", "ESPACIO", "SALTO", 
                      "CONSTANTE", "SWITCH", "CASE", "OTHERWISE", "END" ];

var ruleNames =  [ "evaluar", "expresion", "switch_", "case_", "otherwise_", 
                   "sentencia", "end_", "const_", "expr", "variable", "inic_variable", 
                   "cuerpo_variable" ];

function MatlabParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

MatlabParser.prototype = Object.create(antlr4.Parser.prototype);
MatlabParser.prototype.constructor = MatlabParser;

Object.defineProperty(MatlabParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

MatlabParser.EOF = antlr4.Token.EOF;
MatlabParser.T__0 = 1;
MatlabParser.T__1 = 2;
MatlabParser.T__2 = 3;
MatlabParser.T__3 = 4;
MatlabParser.T__4 = 5;
MatlabParser.T__5 = 6;
MatlabParser.OPERADORES = 7;
MatlabParser.LETRA = 8;
MatlabParser.DIGITO = 9;
MatlabParser.SEPARADOR = 10;
MatlabParser.ESPACIO = 11;
MatlabParser.SALTO = 12;
MatlabParser.CONSTANTE = 13;
MatlabParser.SWITCH = 14;
MatlabParser.CASE = 15;
MatlabParser.OTHERWISE = 16;
MatlabParser.END = 17;

MatlabParser.RULE_evaluar = 0;
MatlabParser.RULE_expresion = 1;
MatlabParser.RULE_switch_ = 2;
MatlabParser.RULE_case_ = 3;
MatlabParser.RULE_otherwise_ = 4;
MatlabParser.RULE_sentencia = 5;
MatlabParser.RULE_end_ = 6;
MatlabParser.RULE_const_ = 7;
MatlabParser.RULE_expr = 8;
MatlabParser.RULE_variable = 9;
MatlabParser.RULE_inic_variable = 10;
MatlabParser.RULE_cuerpo_variable = 11;

function EvaluarContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MatlabParser.RULE_evaluar;
    return this;
}

EvaluarContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EvaluarContext.prototype.constructor = EvaluarContext;

EvaluarContext.prototype.expresion = function() {
    return this.getTypedRuleContext(ExpresionContext,0);
};

EvaluarContext.prototype.EOF = function() {
    return this.getToken(MatlabParser.EOF, 0);
};

EvaluarContext.prototype.enterRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.enterEvaluar(this);
	}
};

EvaluarContext.prototype.exitRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.exitEvaluar(this);
	}
};




MatlabParser.EvaluarContext = EvaluarContext;

MatlabParser.prototype.evaluar = function() {

    var localctx = new EvaluarContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, MatlabParser.RULE_evaluar);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 24;
        this.expresion();
        this.state = 25;
        this.match(MatlabParser.EOF);
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
    this.ruleIndex = MatlabParser.RULE_expresion;
    return this;
}

ExpresionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpresionContext.prototype.constructor = ExpresionContext;

ExpresionContext.prototype.switch_ = function() {
    return this.getTypedRuleContext(Switch_Context,0);
};

ExpresionContext.prototype.case_ = function() {
    return this.getTypedRuleContext(Case_Context,0);
};

ExpresionContext.prototype.otherwise_ = function() {
    return this.getTypedRuleContext(Otherwise_Context,0);
};

ExpresionContext.prototype.end_ = function() {
    return this.getTypedRuleContext(End_Context,0);
};

ExpresionContext.prototype.enterRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.enterExpresion(this);
	}
};

ExpresionContext.prototype.exitRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.exitExpresion(this);
	}
};




MatlabParser.ExpresionContext = ExpresionContext;

MatlabParser.prototype.expresion = function() {

    var localctx = new ExpresionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, MatlabParser.RULE_expresion);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 27;
        this.switch_();
        this.state = 28;
        this.case_();
        this.state = 29;
        this.otherwise_();
        this.state = 30;
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

function Switch_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MatlabParser.RULE_switch_;
    return this;
}

Switch_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Switch_Context.prototype.constructor = Switch_Context;

Switch_Context.prototype.SWITCH = function() {
    return this.getToken(MatlabParser.SWITCH, 0);
};

Switch_Context.prototype.ESPACIO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MatlabParser.ESPACIO);
    } else {
        return this.getToken(MatlabParser.ESPACIO, i);
    }
};


Switch_Context.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

Switch_Context.prototype.SALTO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MatlabParser.SALTO);
    } else {
        return this.getToken(MatlabParser.SALTO, i);
    }
};


Switch_Context.prototype.enterRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.enterSwitch_(this);
	}
};

Switch_Context.prototype.exitRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.exitSwitch_(this);
	}
};




MatlabParser.Switch_Context = Switch_Context;

MatlabParser.prototype.switch_ = function() {

    var localctx = new Switch_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 4, MatlabParser.RULE_switch_);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 32;
        this.match(MatlabParser.SWITCH);
        this.state = 33;
        this.match(MatlabParser.ESPACIO);
        this.state = 34;
        this.variable();
        this.state = 38;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MatlabParser.ESPACIO) {
            this.state = 35;
            this.match(MatlabParser.ESPACIO);
            this.state = 40;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 42; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 41;
            this.match(MatlabParser.SALTO);
            this.state = 44; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===MatlabParser.SALTO);
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

function Case_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MatlabParser.RULE_case_;
    return this;
}

Case_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Case_Context.prototype.constructor = Case_Context;

Case_Context.prototype.CASE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MatlabParser.CASE);
    } else {
        return this.getToken(MatlabParser.CASE, i);
    }
};


Case_Context.prototype.ESPACIO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MatlabParser.ESPACIO);
    } else {
        return this.getToken(MatlabParser.ESPACIO, i);
    }
};


Case_Context.prototype.DIGITO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MatlabParser.DIGITO);
    } else {
        return this.getToken(MatlabParser.DIGITO, i);
    }
};


Case_Context.prototype.sentencia = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SentenciaContext);
    } else {
        return this.getTypedRuleContext(SentenciaContext,i);
    }
};

Case_Context.prototype.SALTO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MatlabParser.SALTO);
    } else {
        return this.getToken(MatlabParser.SALTO, i);
    }
};


Case_Context.prototype.enterRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.enterCase_(this);
	}
};

Case_Context.prototype.exitRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.exitCase_(this);
	}
};




MatlabParser.Case_Context = Case_Context;

MatlabParser.prototype.case_ = function() {

    var localctx = new Case_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 6, MatlabParser.RULE_case_);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 46;
            this.match(MatlabParser.CASE);
            this.state = 47;
            this.match(MatlabParser.ESPACIO);
            this.state = 48;
            this.match(MatlabParser.DIGITO);
            this.state = 52;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 49;
                    this.match(MatlabParser.ESPACIO); 
                }
                this.state = 54;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
            }

            this.state = 58;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===MatlabParser.SALTO) {
                this.state = 55;
                this.match(MatlabParser.SALTO);
                this.state = 60;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 61;
            this.sentencia();
            this.state = 64; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===MatlabParser.CASE);
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

function Otherwise_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MatlabParser.RULE_otherwise_;
    return this;
}

Otherwise_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Otherwise_Context.prototype.constructor = Otherwise_Context;

Otherwise_Context.prototype.OTHERWISE = function() {
    return this.getToken(MatlabParser.OTHERWISE, 0);
};

Otherwise_Context.prototype.sentencia = function() {
    return this.getTypedRuleContext(SentenciaContext,0);
};

Otherwise_Context.prototype.ESPACIO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MatlabParser.ESPACIO);
    } else {
        return this.getToken(MatlabParser.ESPACIO, i);
    }
};


Otherwise_Context.prototype.SALTO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MatlabParser.SALTO);
    } else {
        return this.getToken(MatlabParser.SALTO, i);
    }
};


Otherwise_Context.prototype.enterRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.enterOtherwise_(this);
	}
};

Otherwise_Context.prototype.exitRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.exitOtherwise_(this);
	}
};




MatlabParser.Otherwise_Context = Otherwise_Context;

MatlabParser.prototype.otherwise_ = function() {

    var localctx = new Otherwise_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 8, MatlabParser.RULE_otherwise_);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this.match(MatlabParser.OTHERWISE);
        this.state = 70;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 67;
                this.match(MatlabParser.ESPACIO); 
            }
            this.state = 72;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
        }

        this.state = 76;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MatlabParser.SALTO) {
            this.state = 73;
            this.match(MatlabParser.SALTO);
            this.state = 78;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 79;
        this.sentencia();
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

function SentenciaContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MatlabParser.RULE_sentencia;
    return this;
}

SentenciaContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SentenciaContext.prototype.constructor = SentenciaContext;

SentenciaContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};

SentenciaContext.prototype.ESPACIO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MatlabParser.ESPACIO);
    } else {
        return this.getToken(MatlabParser.ESPACIO, i);
    }
};


SentenciaContext.prototype.SALTO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MatlabParser.SALTO);
    } else {
        return this.getToken(MatlabParser.SALTO, i);
    }
};


SentenciaContext.prototype.enterRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.enterSentencia(this);
	}
};

SentenciaContext.prototype.exitRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.exitSentencia(this);
	}
};




MatlabParser.SentenciaContext = SentenciaContext;

MatlabParser.prototype.sentencia = function() {

    var localctx = new SentenciaContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, MatlabParser.RULE_sentencia);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MatlabParser.ESPACIO) {
            this.state = 81;
            this.match(MatlabParser.ESPACIO);
            this.state = 86;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 87;
        this.expr(0);
        this.state = 91;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MatlabParser.ESPACIO) {
            this.state = 88;
            this.match(MatlabParser.ESPACIO);
            this.state = 93;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 95; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 94;
            this.match(MatlabParser.SALTO);
            this.state = 97; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===MatlabParser.SALTO);
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

function End_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MatlabParser.RULE_end_;
    return this;
}

End_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
End_Context.prototype.constructor = End_Context;

End_Context.prototype.END = function() {
    return this.getToken(MatlabParser.END, 0);
};

End_Context.prototype.ESPACIO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MatlabParser.ESPACIO);
    } else {
        return this.getToken(MatlabParser.ESPACIO, i);
    }
};


End_Context.prototype.SALTO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MatlabParser.SALTO);
    } else {
        return this.getToken(MatlabParser.SALTO, i);
    }
};


End_Context.prototype.enterRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.enterEnd_(this);
	}
};

End_Context.prototype.exitRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.exitEnd_(this);
	}
};




MatlabParser.End_Context = End_Context;

MatlabParser.prototype.end_ = function() {

    var localctx = new End_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 12, MatlabParser.RULE_end_);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        this.match(MatlabParser.END);
        this.state = 103;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MatlabParser.ESPACIO) {
            this.state = 100;
            this.match(MatlabParser.ESPACIO);
            this.state = 105;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 109;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MatlabParser.SALTO) {
            this.state = 106;
            this.match(MatlabParser.SALTO);
            this.state = 111;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
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

function Const_Context(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MatlabParser.RULE_const_;
    return this;
}

Const_Context.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Const_Context.prototype.constructor = Const_Context;

Const_Context.prototype.DIGITO = function() {
    return this.getToken(MatlabParser.DIGITO, 0);
};

Const_Context.prototype.CONSTANTE = function() {
    return this.getToken(MatlabParser.CONSTANTE, 0);
};

Const_Context.prototype.enterRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.enterConst_(this);
	}
};

Const_Context.prototype.exitRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.exitConst_(this);
	}
};




MatlabParser.Const_Context = Const_Context;

MatlabParser.prototype.const_ = function() {

    var localctx = new Const_Context(this, this._ctx, this.state);
    this.enterRule(localctx, 14, MatlabParser.RULE_const_);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        _la = this._input.LA(1);
        if(!(_la===MatlabParser.DIGITO || _la===MatlabParser.CONSTANTE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
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
    this.ruleIndex = MatlabParser.RULE_expr;
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

MatlabParser.ParensContext = ParensContext;

ParensContext.prototype.expr = function() {
    return this.getTypedRuleContext(ExprContext,0);
};
ParensContext.prototype.enterRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.enterParens(this);
	}
};

ParensContext.prototype.exitRule = function(listener) {
    if(listener instanceof MatlabListener ) {
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

MatlabParser.MulDivContext = MulDivContext;

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
    if(listener instanceof MatlabListener ) {
        listener.enterMulDiv(this);
	}
};

MulDivContext.prototype.exitRule = function(listener) {
    if(listener instanceof MatlabListener ) {
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

MatlabParser.AddSubContext = AddSubContext;

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
    if(listener instanceof MatlabListener ) {
        listener.enterAddSub(this);
	}
};

AddSubContext.prototype.exitRule = function(listener) {
    if(listener instanceof MatlabListener ) {
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

MatlabParser.IdContext = IdContext;

IdContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};
IdContext.prototype.enterRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.enterId(this);
	}
};

IdContext.prototype.exitRule = function(listener) {
    if(listener instanceof MatlabListener ) {
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

MatlabParser.IntContext = IntContext;

IntContext.prototype.CONSTANTE = function() {
    return this.getToken(MatlabParser.CONSTANTE, 0);
};
IntContext.prototype.enterRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.enterInt(this);
	}
};

IntContext.prototype.exitRule = function(listener) {
    if(listener instanceof MatlabListener ) {
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

MatlabParser.DigitoContext = DigitoContext;

DigitoContext.prototype.DIGITO = function() {
    return this.getToken(MatlabParser.DIGITO, 0);
};
DigitoContext.prototype.enterRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.enterDigito(this);
	}
};

DigitoContext.prototype.exitRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.exitDigito(this);
	}
};



MatlabParser.prototype.expr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExprContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 16;
    this.enterRecursionRule(localctx, 16, MatlabParser.RULE_expr, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 122;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case MatlabParser.CONSTANTE:
            localctx = new IntContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 115;
            this.match(MatlabParser.CONSTANTE);
            break;
        case MatlabParser.LETRA:
            localctx = new IdContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 116;
            this.variable();
            break;
        case MatlabParser.DIGITO:
            localctx = new DigitoContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 117;
            this.match(MatlabParser.DIGITO);
            break;
        case MatlabParser.T__4:
            localctx = new ParensContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 118;
            this.match(MatlabParser.T__4);
            this.state = 119;
            this.expr(0);
            this.state = 120;
            this.match(MatlabParser.T__5);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 132;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 130;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MatlabParser.RULE_expr);
                    this.state = 124;
                    if (!( this.precpred(this._ctx, 6))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
                    }
                    this.state = 125;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===MatlabParser.T__0 || _la===MatlabParser.T__1)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 126;
                    this.expr(7);
                    break;

                case 2:
                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, MatlabParser.RULE_expr);
                    this.state = 127;
                    if (!( this.precpred(this._ctx, 5))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
                    }
                    this.state = 128;
                    localctx.op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if(!(_la===MatlabParser.T__2 || _la===MatlabParser.T__3)) {
                        localctx.op = this._errHandler.recoverInline(this);
                    }
                    else {
                    	this._errHandler.reportMatch(this);
                        this.consume();
                    }
                    this.state = 129;
                    this.expr(6);
                    break;

                } 
            }
            this.state = 134;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
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

function VariableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MatlabParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.inic_variable = function() {
    return this.getTypedRuleContext(Inic_variableContext,0);
};

VariableContext.prototype.cuerpo_variable = function() {
    return this.getTypedRuleContext(Cuerpo_variableContext,0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.exitVariable(this);
	}
};




MatlabParser.VariableContext = VariableContext;

MatlabParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, MatlabParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 135;
        this.inic_variable();
        this.state = 136;
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

function Inic_variableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MatlabParser.RULE_inic_variable;
    return this;
}

Inic_variableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Inic_variableContext.prototype.constructor = Inic_variableContext;

Inic_variableContext.prototype.LETRA = function() {
    return this.getToken(MatlabParser.LETRA, 0);
};

Inic_variableContext.prototype.SEPARADOR = function() {
    return this.getToken(MatlabParser.SEPARADOR, 0);
};

Inic_variableContext.prototype.enterRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.enterInic_variable(this);
	}
};

Inic_variableContext.prototype.exitRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.exitInic_variable(this);
	}
};




MatlabParser.Inic_variableContext = Inic_variableContext;

MatlabParser.prototype.inic_variable = function() {

    var localctx = new Inic_variableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, MatlabParser.RULE_inic_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138;
        this.match(MatlabParser.LETRA);
        this.state = 140;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        if(la_===1) {
            this.state = 139;
            this.match(MatlabParser.SEPARADOR);

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

function Cuerpo_variableContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MatlabParser.RULE_cuerpo_variable;
    return this;
}

Cuerpo_variableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Cuerpo_variableContext.prototype.constructor = Cuerpo_variableContext;

Cuerpo_variableContext.prototype.LETRA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MatlabParser.LETRA);
    } else {
        return this.getToken(MatlabParser.LETRA, i);
    }
};


Cuerpo_variableContext.prototype.DIGITO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MatlabParser.DIGITO);
    } else {
        return this.getToken(MatlabParser.DIGITO, i);
    }
};


Cuerpo_variableContext.prototype.SEPARADOR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MatlabParser.SEPARADOR);
    } else {
        return this.getToken(MatlabParser.SEPARADOR, i);
    }
};


Cuerpo_variableContext.prototype.enterRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.enterCuerpo_variable(this);
	}
};

Cuerpo_variableContext.prototype.exitRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.exitCuerpo_variable(this);
	}
};




MatlabParser.Cuerpo_variableContext = Cuerpo_variableContext;

MatlabParser.prototype.cuerpo_variable = function() {

    var localctx = new Cuerpo_variableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, MatlabParser.RULE_cuerpo_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 148;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,16,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 142;
                    this.match(MatlabParser.LETRA);
                    break;

                case 2:
                    this.state = 143;
                    this.match(MatlabParser.DIGITO);
                    break;

                case 3:
                    this.state = 144;
                    this.match(MatlabParser.LETRA);
                    this.state = 145;
                    this.match(MatlabParser.SEPARADOR);
                    break;

                case 4:
                    this.state = 146;
                    this.match(MatlabParser.DIGITO);
                    this.state = 147;
                    this.match(MatlabParser.SEPARADOR);
                    break;

                } 
            }
            this.state = 152;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
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


MatlabParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 8:
			return this.expr_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

MatlabParser.prototype.expr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 6);
		case 1:
			return this.precpred(this._ctx, 5);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.MatlabParser = MatlabParser;

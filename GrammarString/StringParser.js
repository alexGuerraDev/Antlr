// Generated from String.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var StringListener = require('./StringListener').StringListener;
var grammarFileName = "String.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0005 \u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0005\u0004\u0013",
    "\n\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0007\u0005\u001b\n\u0005\f\u0005\u000e\u0005\u001e\u000b",
    "\u0005\u0003\u0005\u0002\u0002\u0006\u0002\u0004\u0006\b\u0002\u0002",
    " \u0002\n\u0003\u0002\u0002\u0002\u0004\r\u0003\u0002\u0002\u0002\u0006",
    "\u0010\u0003\u0002\u0002\u0002\b\u001c\u0003\u0002\u0002\u0002\n\u000b",
    "\u0005\u0004\u0003\u0002\u000b\f\u0007\u0002\u0002\u0003\f\u0003\u0003",
    "\u0002\u0002\u0002\r\u000e\u0005\u0006\u0004\u0002\u000e\u000f\u0005",
    "\b\u0005\u0002\u000f\u0005\u0003\u0002\u0002\u0002\u0010\u0012\u0007",
    "\u0003\u0002\u0002\u0011\u0013\u0007\u0005\u0002\u0002\u0012\u0011\u0003",
    "\u0002\u0002\u0002\u0012\u0013\u0003\u0002\u0002\u0002\u0013\u0007\u0003",
    "\u0002\u0002\u0002\u0014\u001b\u0007\u0003\u0002\u0002\u0015\u001b\u0007",
    "\u0004\u0002\u0002\u0016\u0017\u0007\u0003\u0002\u0002\u0017\u001b\u0007",
    "\u0005\u0002\u0002\u0018\u0019\u0007\u0004\u0002\u0002\u0019\u001b\u0007",
    "\u0005\u0002\u0002\u001a\u0014\u0003\u0002\u0002\u0002\u001a\u0015\u0003",
    "\u0002\u0002\u0002\u001a\u0016\u0003\u0002\u0002\u0002\u001a\u0018\u0003",
    "\u0002\u0002\u0002\u001b\u001e\u0003\u0002\u0002\u0002\u001c\u001a\u0003",
    "\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002\u0002\u001d\t\u0003",
    "\u0002\u0002\u0002\u001e\u001c\u0003\u0002\u0002\u0002\u0005\u0012\u001a",
    "\u001c"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "LETRA", "DIGITO", "SEPARADOR" ];

var ruleNames =  [ "evaluar", "variable", "inicio", "cuerpoDef" ];

function StringParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

StringParser.prototype = Object.create(antlr4.Parser.prototype);
StringParser.prototype.constructor = StringParser;

Object.defineProperty(StringParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

StringParser.EOF = antlr4.Token.EOF;
StringParser.LETRA = 1;
StringParser.DIGITO = 2;
StringParser.SEPARADOR = 3;

StringParser.RULE_evaluar = 0;
StringParser.RULE_variable = 1;
StringParser.RULE_inicio = 2;
StringParser.RULE_cuerpoDef = 3;

function EvaluarContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StringParser.RULE_evaluar;
    return this;
}

EvaluarContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EvaluarContext.prototype.constructor = EvaluarContext;

EvaluarContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

EvaluarContext.prototype.EOF = function() {
    return this.getToken(StringParser.EOF, 0);
};

EvaluarContext.prototype.enterRule = function(listener) {
    if(listener instanceof StringListener ) {
        listener.enterEvaluar(this);
	}
};

EvaluarContext.prototype.exitRule = function(listener) {
    if(listener instanceof StringListener ) {
        listener.exitEvaluar(this);
	}
};




StringParser.EvaluarContext = EvaluarContext;

StringParser.prototype.evaluar = function() {

    var localctx = new EvaluarContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, StringParser.RULE_evaluar);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 8;
        this.variable();
        this.state = 9;
        this.match(StringParser.EOF);
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
    this.ruleIndex = StringParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.inicio = function() {
    return this.getTypedRuleContext(InicioContext,0);
};

VariableContext.prototype.cuerpoDef = function() {
    return this.getTypedRuleContext(CuerpoDefContext,0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof StringListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof StringListener ) {
        listener.exitVariable(this);
	}
};




StringParser.VariableContext = VariableContext;

StringParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, StringParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 11;
        this.inicio();
        this.state = 12;
        this.cuerpoDef();
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

function InicioContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StringParser.RULE_inicio;
    return this;
}

InicioContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InicioContext.prototype.constructor = InicioContext;

InicioContext.prototype.LETRA = function() {
    return this.getToken(StringParser.LETRA, 0);
};

InicioContext.prototype.SEPARADOR = function() {
    return this.getToken(StringParser.SEPARADOR, 0);
};

InicioContext.prototype.enterRule = function(listener) {
    if(listener instanceof StringListener ) {
        listener.enterInicio(this);
	}
};

InicioContext.prototype.exitRule = function(listener) {
    if(listener instanceof StringListener ) {
        listener.exitInicio(this);
	}
};




StringParser.InicioContext = InicioContext;

StringParser.prototype.inicio = function() {

    var localctx = new InicioContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, StringParser.RULE_inicio);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 14;
        this.match(StringParser.LETRA);
        this.state = 16;
        _la = this._input.LA(1);
        if(_la===StringParser.SEPARADOR) {
            this.state = 15;
            this.match(StringParser.SEPARADOR);
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

function CuerpoDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = StringParser.RULE_cuerpoDef;
    return this;
}

CuerpoDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CuerpoDefContext.prototype.constructor = CuerpoDefContext;

CuerpoDefContext.prototype.LETRA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StringParser.LETRA);
    } else {
        return this.getToken(StringParser.LETRA, i);
    }
};


CuerpoDefContext.prototype.DIGITO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StringParser.DIGITO);
    } else {
        return this.getToken(StringParser.DIGITO, i);
    }
};


CuerpoDefContext.prototype.SEPARADOR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(StringParser.SEPARADOR);
    } else {
        return this.getToken(StringParser.SEPARADOR, i);
    }
};


CuerpoDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof StringListener ) {
        listener.enterCuerpoDef(this);
	}
};

CuerpoDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof StringListener ) {
        listener.exitCuerpoDef(this);
	}
};




StringParser.CuerpoDefContext = CuerpoDefContext;

StringParser.prototype.cuerpoDef = function() {

    var localctx = new CuerpoDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, StringParser.RULE_cuerpoDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===StringParser.LETRA || _la===StringParser.DIGITO) {
            this.state = 24;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
            switch(la_) {
            case 1:
                this.state = 18;
                this.match(StringParser.LETRA);
                break;

            case 2:
                this.state = 19;
                this.match(StringParser.DIGITO);
                break;

            case 3:
                this.state = 20;
                this.match(StringParser.LETRA);
                this.state = 21;
                this.match(StringParser.SEPARADOR);
                break;

            case 4:
                this.state = 22;
                this.match(StringParser.DIGITO);
                this.state = 23;
                this.match(StringParser.SEPARADOR);
                break;

            }
            this.state = 28;
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


exports.StringParser = StringParser;

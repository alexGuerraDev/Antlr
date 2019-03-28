// Generated from Correo.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var CorreoListener = require('./CorreoListener').CorreoListener;
var grammarFileName = "Correo.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0007(\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005\u001f\n",
    "\u0005\f\u0005\u000e\u0005\"\u000b\u0005\u0003\u0006\u0003\u0006\u0005",
    "\u0006&\n\u0006\u0003\u0006\u0002\u0002\u0007\u0002\u0004\u0006\b\n",
    "\u0002\u0002\'\u0002\f\u0003\u0002\u0002\u0002\u0004\u000f\u0003\u0002",
    "\u0002\u0002\u0006\u0015\u0003\u0002\u0002\u0002\b \u0003\u0002\u0002",
    "\u0002\n#\u0003\u0002\u0002\u0002\f\r\u0005\u0004\u0003\u0002\r\u000e",
    "\u0007\u0002\u0002\u0003\u000e\u0003\u0003\u0002\u0002\u0002\u000f\u0010",
    "\u0005\u0006\u0004\u0002\u0010\u0011\u0007\u0006\u0002\u0002\u0011\u0012",
    "\u0005\u0006\u0004\u0002\u0012\u0013\u0007\u0007\u0002\u0002\u0013\u0014",
    "\u0005\u0006\u0004\u0002\u0014\u0005\u0003\u0002\u0002\u0002\u0015\u0016",
    "\u0005\n\u0006\u0002\u0016\u0017\u0005\b\u0005\u0002\u0017\u0007\u0003",
    "\u0002\u0002\u0002\u0018\u001f\u0007\u0003\u0002\u0002\u0019\u001f\u0007",
    "\u0004\u0002\u0002\u001a\u001b\u0007\u0003\u0002\u0002\u001b\u001f\u0007",
    "\u0005\u0002\u0002\u001c\u001d\u0007\u0004\u0002\u0002\u001d\u001f\u0007",
    "\u0005\u0002\u0002\u001e\u0018\u0003\u0002\u0002\u0002\u001e\u0019\u0003",
    "\u0002\u0002\u0002\u001e\u001a\u0003\u0002\u0002\u0002\u001e\u001c\u0003",
    "\u0002\u0002\u0002\u001f\"\u0003\u0002\u0002\u0002 \u001e\u0003\u0002",
    "\u0002\u0002 !\u0003\u0002\u0002\u0002!\t\u0003\u0002\u0002\u0002\"",
    " \u0003\u0002\u0002\u0002#%\u0007\u0003\u0002\u0002$&\u0007\u0005\u0002",
    "\u0002%$\u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002&\u000b\u0003",
    "\u0002\u0002\u0002\u0005\u001e %"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "LETRA", "DIGITO", "SEPARADOR", "ARROBA", "PUNTO" ];

var ruleNames =  [ "evaluar", "correo", "variable", "cuerpoDef", "inicioCorreo" ];

function CorreoParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

CorreoParser.prototype = Object.create(antlr4.Parser.prototype);
CorreoParser.prototype.constructor = CorreoParser;

Object.defineProperty(CorreoParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

CorreoParser.EOF = antlr4.Token.EOF;
CorreoParser.LETRA = 1;
CorreoParser.DIGITO = 2;
CorreoParser.SEPARADOR = 3;
CorreoParser.ARROBA = 4;
CorreoParser.PUNTO = 5;

CorreoParser.RULE_evaluar = 0;
CorreoParser.RULE_correo = 1;
CorreoParser.RULE_variable = 2;
CorreoParser.RULE_cuerpoDef = 3;
CorreoParser.RULE_inicioCorreo = 4;

function EvaluarContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CorreoParser.RULE_evaluar;
    return this;
}

EvaluarContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EvaluarContext.prototype.constructor = EvaluarContext;

EvaluarContext.prototype.correo = function() {
    return this.getTypedRuleContext(CorreoContext,0);
};

EvaluarContext.prototype.EOF = function() {
    return this.getToken(CorreoParser.EOF, 0);
};

EvaluarContext.prototype.enterRule = function(listener) {
    if(listener instanceof CorreoListener ) {
        listener.enterEvaluar(this);
	}
};

EvaluarContext.prototype.exitRule = function(listener) {
    if(listener instanceof CorreoListener ) {
        listener.exitEvaluar(this);
	}
};




CorreoParser.EvaluarContext = EvaluarContext;

CorreoParser.prototype.evaluar = function() {

    var localctx = new EvaluarContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, CorreoParser.RULE_evaluar);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 10;
        this.correo();
        this.state = 11;
        this.match(CorreoParser.EOF);
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

function CorreoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CorreoParser.RULE_correo;
    return this;
}

CorreoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CorreoContext.prototype.constructor = CorreoContext;

CorreoContext.prototype.variable = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VariableContext);
    } else {
        return this.getTypedRuleContext(VariableContext,i);
    }
};

CorreoContext.prototype.ARROBA = function() {
    return this.getToken(CorreoParser.ARROBA, 0);
};

CorreoContext.prototype.PUNTO = function() {
    return this.getToken(CorreoParser.PUNTO, 0);
};

CorreoContext.prototype.enterRule = function(listener) {
    if(listener instanceof CorreoListener ) {
        listener.enterCorreo(this);
	}
};

CorreoContext.prototype.exitRule = function(listener) {
    if(listener instanceof CorreoListener ) {
        listener.exitCorreo(this);
	}
};




CorreoParser.CorreoContext = CorreoContext;

CorreoParser.prototype.correo = function() {

    var localctx = new CorreoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, CorreoParser.RULE_correo);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 13;
        this.variable();
        this.state = 14;
        this.match(CorreoParser.ARROBA);
        this.state = 15;
        this.variable();
        this.state = 16;
        this.match(CorreoParser.PUNTO);
        this.state = 17;
        this.variable();
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
    this.ruleIndex = CorreoParser.RULE_variable;
    return this;
}

VariableContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VariableContext.prototype.constructor = VariableContext;

VariableContext.prototype.inicioCorreo = function() {
    return this.getTypedRuleContext(InicioCorreoContext,0);
};

VariableContext.prototype.cuerpoDef = function() {
    return this.getTypedRuleContext(CuerpoDefContext,0);
};

VariableContext.prototype.enterRule = function(listener) {
    if(listener instanceof CorreoListener ) {
        listener.enterVariable(this);
	}
};

VariableContext.prototype.exitRule = function(listener) {
    if(listener instanceof CorreoListener ) {
        listener.exitVariable(this);
	}
};




CorreoParser.VariableContext = VariableContext;

CorreoParser.prototype.variable = function() {

    var localctx = new VariableContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, CorreoParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 19;
        this.inicioCorreo();
        this.state = 20;
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

function CuerpoDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CorreoParser.RULE_cuerpoDef;
    return this;
}

CuerpoDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CuerpoDefContext.prototype.constructor = CuerpoDefContext;

CuerpoDefContext.prototype.LETRA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CorreoParser.LETRA);
    } else {
        return this.getToken(CorreoParser.LETRA, i);
    }
};


CuerpoDefContext.prototype.DIGITO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CorreoParser.DIGITO);
    } else {
        return this.getToken(CorreoParser.DIGITO, i);
    }
};


CuerpoDefContext.prototype.SEPARADOR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(CorreoParser.SEPARADOR);
    } else {
        return this.getToken(CorreoParser.SEPARADOR, i);
    }
};


CuerpoDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof CorreoListener ) {
        listener.enterCuerpoDef(this);
	}
};

CuerpoDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof CorreoListener ) {
        listener.exitCuerpoDef(this);
	}
};




CorreoParser.CuerpoDefContext = CuerpoDefContext;

CorreoParser.prototype.cuerpoDef = function() {

    var localctx = new CuerpoDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, CorreoParser.RULE_cuerpoDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 30;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===CorreoParser.LETRA || _la===CorreoParser.DIGITO) {
            this.state = 28;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            switch(la_) {
            case 1:
                this.state = 22;
                this.match(CorreoParser.LETRA);
                break;

            case 2:
                this.state = 23;
                this.match(CorreoParser.DIGITO);
                break;

            case 3:
                this.state = 24;
                this.match(CorreoParser.LETRA);
                this.state = 25;
                this.match(CorreoParser.SEPARADOR);
                break;

            case 4:
                this.state = 26;
                this.match(CorreoParser.DIGITO);
                this.state = 27;
                this.match(CorreoParser.SEPARADOR);
                break;

            }
            this.state = 32;
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

function InicioCorreoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = CorreoParser.RULE_inicioCorreo;
    return this;
}

InicioCorreoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InicioCorreoContext.prototype.constructor = InicioCorreoContext;

InicioCorreoContext.prototype.LETRA = function() {
    return this.getToken(CorreoParser.LETRA, 0);
};

InicioCorreoContext.prototype.SEPARADOR = function() {
    return this.getToken(CorreoParser.SEPARADOR, 0);
};

InicioCorreoContext.prototype.enterRule = function(listener) {
    if(listener instanceof CorreoListener ) {
        listener.enterInicioCorreo(this);
	}
};

InicioCorreoContext.prototype.exitRule = function(listener) {
    if(listener instanceof CorreoListener ) {
        listener.exitInicioCorreo(this);
	}
};




CorreoParser.InicioCorreoContext = InicioCorreoContext;

CorreoParser.prototype.inicioCorreo = function() {

    var localctx = new InicioCorreoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, CorreoParser.RULE_inicioCorreo);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 33;
        this.match(CorreoParser.LETRA);
        this.state = 35;
        _la = this._input.LA(1);
        if(_la===CorreoParser.SEPARADOR) {
            this.state = 34;
            this.match(CorreoParser.SEPARADOR);
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


exports.CorreoParser = CorreoParser;

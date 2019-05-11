// Generated from Matlab.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MatlabListener = require('./MatlabListener').MatlabListener;
var grammarFileName = "Matlab.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u000by\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0007\u0004!\n\u0004\f\u0004\u000e\u0004",
    "$\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007",
    "\u0005*\n\u0005\f\u0005\u000e\u0005-\u000b\u0005\u0003\u0005\u0007\u0005",
    "0\n\u0005\f\u0005\u000e\u00053\u000b\u0005\u0005\u00055\n\u0005\u0003",
    "\u0005\u0007\u00058\n\u0005\f\u0005\u000e\u0005;\u000b\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005A\n\u0005\f\u0005\u000e",
    "\u0005D\u000b\u0005\u0003\u0005\u0007\u0005G\n\u0005\f\u0005\u000e\u0005",
    "J\u000b\u0005\u0005\u0005L\n\u0005\u0003\u0005\u0007\u0005O\n\u0005",
    "\f\u0005\u000e\u0005R\u000b\u0005\u0007\u0005T\n\u0005\f\u0005\u000e",
    "\u0005W\u000b\u0005\u0003\u0006\u0003\u0006\u0007\u0006[\n\u0006\f\u0006",
    "\u000e\u0006^\u000b\u0006\u0003\u0007\u0003\u0007\u0007\u0007b\n\u0007",
    "\f\u0007\u000e\u0007e\u000b\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0005\tl\n\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007",
    "\nt\n\n\f\n\u000e\nw\u000b\n\u0003\n\u0002\u0002\u000b\u0002\u0004\u0006",
    "\b\n\f\u000e\u0010\u0012\u0002\u0002\u0002\u0080\u0002\u0014\u0003\u0002",
    "\u0002\u0002\u0004\u0017\u0003\u0002\u0002\u0002\u0006\u001c\u0003\u0002",
    "\u0002\u0002\b%\u0003\u0002\u0002\u0002\nX\u0003\u0002\u0002\u0002\f",
    "_\u0003\u0002\u0002\u0002\u000ef\u0003\u0002\u0002\u0002\u0010i\u0003",
    "\u0002\u0002\u0002\u0012u\u0003\u0002\u0002\u0002\u0014\u0015\u0005",
    "\u0004\u0003\u0002\u0015\u0016\u0007\u0002\u0002\u0003\u0016\u0003\u0003",
    "\u0002\u0002\u0002\u0017\u0018\u0005\u0006\u0004\u0002\u0018\u0019\u0005",
    "\b\u0005\u0002\u0019\u001a\u0005\n\u0006\u0002\u001a\u001b\u0005\f\u0007",
    "\u0002\u001b\u0005\u0003\u0002\u0002\u0002\u001c\u001d\u0007\b\u0002",
    "\u0002\u001d\u001e\u0007\u0006\u0002\u0002\u001e\"\u0005\u000e\b\u0002",
    "\u001f!\u0007\u0007\u0002\u0002 \u001f\u0003\u0002\u0002\u0002!$\u0003",
    "\u0002\u0002\u0002\" \u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002",
    "#\u0007\u0003\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002%&\u0007\t",
    "\u0002\u0002&\'\u0007\u0006\u0002\u0002\'4\u0007\u0004\u0002\u0002(",
    "*\u0007\u0006\u0002\u0002)(\u0003\u0002\u0002\u0002*-\u0003\u0002\u0002",
    "\u0002+)\u0003\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,5\u0003\u0002",
    "\u0002\u0002-+\u0003\u0002\u0002\u0002.0\u0007\u0007\u0002\u0002/.\u0003",
    "\u0002\u0002\u000203\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u0002",
    "12\u0003\u0002\u0002\u000225\u0003\u0002\u0002\u000231\u0003\u0002\u0002",
    "\u00024+\u0003\u0002\u0002\u000241\u0003\u0002\u0002\u000259\u0003\u0002",
    "\u0002\u000268\u0007\u0007\u0002\u000276\u0003\u0002\u0002\u00028;\u0003",
    "\u0002\u0002\u000297\u0003\u0002\u0002\u00029:\u0003\u0002\u0002\u0002",
    ":U\u0003\u0002\u0002\u0002;9\u0003\u0002\u0002\u0002<=\u0007\t\u0002",
    "\u0002=>\u0007\u0006\u0002\u0002>K\u0007\u0004\u0002\u0002?A\u0007\u0006",
    "\u0002\u0002@?\u0003\u0002\u0002\u0002AD\u0003\u0002\u0002\u0002B@\u0003",
    "\u0002\u0002\u0002BC\u0003\u0002\u0002\u0002CL\u0003\u0002\u0002\u0002",
    "DB\u0003\u0002\u0002\u0002EG\u0007\u0007\u0002\u0002FE\u0003\u0002\u0002",
    "\u0002GJ\u0003\u0002\u0002\u0002HF\u0003\u0002\u0002\u0002HI\u0003\u0002",
    "\u0002\u0002IL\u0003\u0002\u0002\u0002JH\u0003\u0002\u0002\u0002KB\u0003",
    "\u0002\u0002\u0002KH\u0003\u0002\u0002\u0002LP\u0003\u0002\u0002\u0002",
    "MO\u0007\u0007\u0002\u0002NM\u0003\u0002\u0002\u0002OR\u0003\u0002\u0002",
    "\u0002PN\u0003\u0002\u0002\u0002PQ\u0003\u0002\u0002\u0002QT\u0003\u0002",
    "\u0002\u0002RP\u0003\u0002\u0002\u0002S<\u0003\u0002\u0002\u0002TW\u0003",
    "\u0002\u0002\u0002US\u0003\u0002\u0002\u0002UV\u0003\u0002\u0002\u0002",
    "V\t\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002\u0002X\\\u0007\n\u0002",
    "\u0002Y[\u0007\u0007\u0002\u0002ZY\u0003\u0002\u0002\u0002[^\u0003\u0002",
    "\u0002\u0002\\Z\u0003\u0002\u0002\u0002\\]\u0003\u0002\u0002\u0002]",
    "\u000b\u0003\u0002\u0002\u0002^\\\u0003\u0002\u0002\u0002_c\u0007\u000b",
    "\u0002\u0002`b\u0007\u0007\u0002\u0002a`\u0003\u0002\u0002\u0002be\u0003",
    "\u0002\u0002\u0002ca\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002",
    "d\r\u0003\u0002\u0002\u0002ec\u0003\u0002\u0002\u0002fg\u0005\u0010",
    "\t\u0002gh\u0005\u0012\n\u0002h\u000f\u0003\u0002\u0002\u0002ik\u0007",
    "\u0003\u0002\u0002jl\u0007\u0005\u0002\u0002kj\u0003\u0002\u0002\u0002",
    "kl\u0003\u0002\u0002\u0002l\u0011\u0003\u0002\u0002\u0002mt\u0007\u0003",
    "\u0002\u0002nt\u0007\u0004\u0002\u0002op\u0007\u0003\u0002\u0002pt\u0007",
    "\u0005\u0002\u0002qr\u0007\u0004\u0002\u0002rt\u0007\u0005\u0002\u0002",
    "sm\u0003\u0002\u0002\u0002sn\u0003\u0002\u0002\u0002so\u0003\u0002\u0002",
    "\u0002sq\u0003\u0002\u0002\u0002tw\u0003\u0002\u0002\u0002us\u0003\u0002",
    "\u0002\u0002uv\u0003\u0002\u0002\u0002v\u0013\u0003\u0002\u0002\u0002",
    "wu\u0003\u0002\u0002\u0002\u0011\"+149BHKPU\\cksu"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, "'WITCH'", "'Case'", 
                     "'Otherwise'", "'END'" ];

var symbolicNames = [ null, "LETRA", "DIGITO", "SEPARADOR", "ESPACIO", "SALTO", 
                      "WITCH", "CASE", "OTHERWISE", "END" ];

var ruleNames =  [ "evaluar", "expresion", "cabecera", "case_", "otherwise_", 
                   "end_", "variable", "inic_variable", "cuerpo_variable" ];

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
MatlabParser.LETRA = 1;
MatlabParser.DIGITO = 2;
MatlabParser.SEPARADOR = 3;
MatlabParser.ESPACIO = 4;
MatlabParser.SALTO = 5;
MatlabParser.WITCH = 6;
MatlabParser.CASE = 7;
MatlabParser.OTHERWISE = 8;
MatlabParser.END = 9;

MatlabParser.RULE_evaluar = 0;
MatlabParser.RULE_expresion = 1;
MatlabParser.RULE_cabecera = 2;
MatlabParser.RULE_case_ = 3;
MatlabParser.RULE_otherwise_ = 4;
MatlabParser.RULE_end_ = 5;
MatlabParser.RULE_variable = 6;
MatlabParser.RULE_inic_variable = 7;
MatlabParser.RULE_cuerpo_variable = 8;

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
        this.state = 18;
        this.expresion();
        this.state = 19;
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

ExpresionContext.prototype.cabecera = function() {
    return this.getTypedRuleContext(CabeceraContext,0);
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
        this.state = 21;
        this.cabecera();
        this.state = 22;
        this.case_();
        this.state = 23;
        this.otherwise_();
        this.state = 24;
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

function CabeceraContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MatlabParser.RULE_cabecera;
    return this;
}

CabeceraContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CabeceraContext.prototype.constructor = CabeceraContext;

CabeceraContext.prototype.WITCH = function() {
    return this.getToken(MatlabParser.WITCH, 0);
};

CabeceraContext.prototype.ESPACIO = function() {
    return this.getToken(MatlabParser.ESPACIO, 0);
};

CabeceraContext.prototype.variable = function() {
    return this.getTypedRuleContext(VariableContext,0);
};

CabeceraContext.prototype.SALTO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(MatlabParser.SALTO);
    } else {
        return this.getToken(MatlabParser.SALTO, i);
    }
};


CabeceraContext.prototype.enterRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.enterCabecera(this);
	}
};

CabeceraContext.prototype.exitRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.exitCabecera(this);
	}
};




MatlabParser.CabeceraContext = CabeceraContext;

MatlabParser.prototype.cabecera = function() {

    var localctx = new CabeceraContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, MatlabParser.RULE_cabecera);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this.match(MatlabParser.WITCH);
        this.state = 27;
        this.match(MatlabParser.ESPACIO);
        this.state = 28;
        this.variable();
        this.state = 32;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MatlabParser.SALTO) {
            this.state = 29;
            this.match(MatlabParser.SALTO);
            this.state = 34;
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
        this.state = 35;
        this.match(MatlabParser.CASE);
        this.state = 36;
        this.match(MatlabParser.ESPACIO);
        this.state = 37;
        this.match(MatlabParser.DIGITO);
        this.state = 50;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
        switch(la_) {
        case 1:
            this.state = 41;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===MatlabParser.ESPACIO) {
                this.state = 38;
                this.match(MatlabParser.ESPACIO);
                this.state = 43;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.state = 47;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 44;
                    this.match(MatlabParser.SALTO); 
                }
                this.state = 49;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
            }

            break;

        }
        this.state = 55;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MatlabParser.SALTO) {
            this.state = 52;
            this.match(MatlabParser.SALTO);
            this.state = 57;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 83;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MatlabParser.CASE) {
            this.state = 58;
            this.match(MatlabParser.CASE);
            this.state = 59;
            this.match(MatlabParser.ESPACIO);
            this.state = 60;
            this.match(MatlabParser.DIGITO);
            this.state = 73;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
            switch(la_) {
            case 1:
                this.state = 64;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
                while(_la===MatlabParser.ESPACIO) {
                    this.state = 61;
                    this.match(MatlabParser.ESPACIO);
                    this.state = 66;
                    this._errHandler.sync(this);
                    _la = this._input.LA(1);
                }
                break;

            case 2:
                this.state = 70;
                this._errHandler.sync(this);
                var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                    if(_alt===1) {
                        this.state = 67;
                        this.match(MatlabParser.SALTO); 
                    }
                    this.state = 72;
                    this._errHandler.sync(this);
                    _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
                }

                break;

            }
            this.state = 78;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===MatlabParser.SALTO) {
                this.state = 75;
                this.match(MatlabParser.SALTO);
                this.state = 80;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 85;
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
        this.state = 86;
        this.match(MatlabParser.OTHERWISE);
        this.state = 90;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MatlabParser.SALTO) {
            this.state = 87;
            this.match(MatlabParser.SALTO);
            this.state = 92;
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
    this.enterRule(localctx, 10, MatlabParser.RULE_end_);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 93;
        this.match(MatlabParser.END);
        this.state = 97;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MatlabParser.SALTO) {
            this.state = 94;
            this.match(MatlabParser.SALTO);
            this.state = 99;
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
    this.enterRule(localctx, 12, MatlabParser.RULE_variable);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 100;
        this.inic_variable();
        this.state = 101;
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
    this.enterRule(localctx, 14, MatlabParser.RULE_inic_variable);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        this.match(MatlabParser.LETRA);
        this.state = 105;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===MatlabParser.SEPARADOR) {
            this.state = 104;
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
    this.enterRule(localctx, 16, MatlabParser.RULE_cuerpo_variable);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 115;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===MatlabParser.LETRA || _la===MatlabParser.DIGITO) {
            this.state = 113;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
            switch(la_) {
            case 1:
                this.state = 107;
                this.match(MatlabParser.LETRA);
                break;

            case 2:
                this.state = 108;
                this.match(MatlabParser.DIGITO);
                break;

            case 3:
                this.state = 109;
                this.match(MatlabParser.LETRA);
                this.state = 110;
                this.match(MatlabParser.SEPARADOR);
                break;

            case 4:
                this.state = 111;
                this.match(MatlabParser.DIGITO);
                this.state = 112;
                this.match(MatlabParser.SEPARADOR);
                break;

            }
            this.state = 117;
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


exports.MatlabParser = MatlabParser;

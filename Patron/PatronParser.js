// Generated from Patron.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');
var PatronListener = require('./PatronListener').PatronListener;
var grammarFileName = "Patron.g4";

var serializedATN = ["\u0003\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\u0003\u0006G\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004\u0017\n\u0004\u0005\u0004",
    "\u0019\n\u0004\u0003\u0005\u0003\u0005\u0007\u0005\u001d\n\u0005\f\u0005",
    "\u000e\u0005 \u000b\u0005\u0003\u0005\u0007\u0005#\n\u0005\f\u0005\u000e",
    "\u0005&\u000b\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0007\u0005.\n\u0005\f\u0005\u000e\u00051\u000b",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0007\u0005:\n\u0005\f\u0005\u000e\u0005=\u000b\u0005",
    "\u0003\u0005\u0007\u0005@\n\u0005\f\u0005\u000e\u0005C\u000b\u0005\u0005",
    "\u0005E\n\u0005\u0003\u0005\u0002\u0002\u0006\u0002\u0004\u0006\b\u0002",
    "\u0004\u0004\u0002\u0003\u0003\u0005\u0005\u0003\u0002\u0003\u0004P",
    "\u0002\n\u0003\u0002\u0002\u0002\u0004\r\u0003\u0002\u0002\u0002\u0006",
    "\u0018\u0003\u0002\u0002\u0002\bD\u0003\u0002\u0002\u0002\n\u000b\u0005",
    "\u0004\u0003\u0002\u000b\f\u0007\u0002\u0002\u0003\f\u0003\u0003\u0002",
    "\u0002\u0002\r\u000e\u0005\b\u0005\u0002\u000e\u000f\u0005\u0006\u0004",
    "\u0002\u000f\u0005\u0003\u0002\u0002\u0002\u0010\u0016\u0007\u0006\u0002",
    "\u0002\u0011\u0012\u0007\u0003\u0002\u0002\u0012\u0017\u0007\u0003\u0002",
    "\u0002\u0013\u0014\u0007\u0003\u0002\u0002\u0014\u0015\u0007\u0003\u0002",
    "\u0002\u0015\u0017\u0007\u0003\u0002\u0002\u0016\u0011\u0003\u0002\u0002",
    "\u0002\u0016\u0013\u0003\u0002\u0002\u0002\u0017\u0019\u0003\u0002\u0002",
    "\u0002\u0018\u0010\u0003\u0002\u0002\u0002\u0018\u0019\u0003\u0002\u0002",
    "\u0002\u0019\u0007\u0003\u0002\u0002\u0002\u001a\u001e\t\u0002\u0002",
    "\u0002\u001b\u001d\t\u0003\u0002\u0002\u001c\u001b\u0003\u0002\u0002",
    "\u0002\u001d \u0003\u0002\u0002\u0002\u001e\u001c\u0003\u0002\u0002",
    "\u0002\u001e\u001f\u0003\u0002\u0002\u0002\u001f$\u0003\u0002\u0002",
    "\u0002 \u001e\u0003\u0002\u0002\u0002!#\u0007\u0005\u0002\u0002\"!\u0003",
    "\u0002\u0002\u0002#&\u0003\u0002\u0002\u0002$\"\u0003\u0002\u0002\u0002",
    "$%\u0003\u0002\u0002\u0002%/\u0003\u0002\u0002\u0002&$\u0003\u0002\u0002",
    "\u0002\'(\u0007\u0003\u0002\u0002(.\u0007\u0005\u0002\u0002)*\u0007",
    "\u0004\u0002\u0002*.\u0007\u0005\u0002\u0002+.\u0007\u0003\u0002\u0002",
    ",.\u0007\u0004\u0002\u0002-\'\u0003\u0002\u0002\u0002-)\u0003\u0002",
    "\u0002\u0002-+\u0003\u0002\u0002\u0002-,\u0003\u0002\u0002\u0002.1\u0003",
    "\u0002\u0002\u0002/-\u0003\u0002\u0002\u0002/0\u0003\u0002\u0002\u0002",
    "0E\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u00022;\t\u0002\u0002",
    "\u000234\u0007\u0003\u0002\u00024:\u0007\u0005\u0002\u000256\u0007\u0004",
    "\u0002\u00026:\u0007\u0005\u0002\u00027:\u0007\u0003\u0002\u00028:\u0007",
    "\u0004\u0002\u000293\u0003\u0002\u0002\u000295\u0003\u0002\u0002\u0002",
    "97\u0003\u0002\u0002\u000298\u0003\u0002\u0002\u0002:=\u0003\u0002\u0002",
    "\u0002;9\u0003\u0002\u0002\u0002;<\u0003\u0002\u0002\u0002<A\u0003\u0002",
    "\u0002\u0002=;\u0003\u0002\u0002\u0002>@\u0007\u0005\u0002\u0002?>\u0003",
    "\u0002\u0002\u0002@C\u0003\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002",
    "AB\u0003\u0002\u0002\u0002BE\u0003\u0002\u0002\u0002CA\u0003\u0002\u0002",
    "\u0002D\u001a\u0003\u0002\u0002\u0002D2\u0003\u0002\u0002\u0002E\t\u0003",
    "\u0002\u0002\u0002\f\u0016\u0018\u001e$-/9;AD"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "LETRA", "DIGITO", "SEPARADOR", "PUNTO" ];

var ruleNames =  [ "evaluar", "nombreArchivo", "extension", "nombre" ];

function PatronParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

PatronParser.prototype = Object.create(antlr4.Parser.prototype);
PatronParser.prototype.constructor = PatronParser;

Object.defineProperty(PatronParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

PatronParser.EOF = antlr4.Token.EOF;
PatronParser.LETRA = 1;
PatronParser.DIGITO = 2;
PatronParser.SEPARADOR = 3;
PatronParser.PUNTO = 4;

PatronParser.RULE_evaluar = 0;
PatronParser.RULE_nombreArchivo = 1;
PatronParser.RULE_extension = 2;
PatronParser.RULE_nombre = 3;

function EvaluarContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PatronParser.RULE_evaluar;
    return this;
}

EvaluarContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EvaluarContext.prototype.constructor = EvaluarContext;

EvaluarContext.prototype.nombreArchivo = function() {
    return this.getTypedRuleContext(NombreArchivoContext,0);
};

EvaluarContext.prototype.EOF = function() {
    return this.getToken(PatronParser.EOF, 0);
};

EvaluarContext.prototype.enterRule = function(listener) {
    if(listener instanceof PatronListener ) {
        listener.enterEvaluar(this);
	}
};

EvaluarContext.prototype.exitRule = function(listener) {
    if(listener instanceof PatronListener ) {
        listener.exitEvaluar(this);
	}
};




PatronParser.EvaluarContext = EvaluarContext;

PatronParser.prototype.evaluar = function() {

    var localctx = new EvaluarContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, PatronParser.RULE_evaluar);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 8;
        this.nombreArchivo();
        this.state = 9;
        this.match(PatronParser.EOF);
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

function NombreArchivoContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PatronParser.RULE_nombreArchivo;
    return this;
}

NombreArchivoContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NombreArchivoContext.prototype.constructor = NombreArchivoContext;

NombreArchivoContext.prototype.nombre = function() {
    return this.getTypedRuleContext(NombreContext,0);
};

NombreArchivoContext.prototype.extension = function() {
    return this.getTypedRuleContext(ExtensionContext,0);
};

NombreArchivoContext.prototype.enterRule = function(listener) {
    if(listener instanceof PatronListener ) {
        listener.enterNombreArchivo(this);
	}
};

NombreArchivoContext.prototype.exitRule = function(listener) {
    if(listener instanceof PatronListener ) {
        listener.exitNombreArchivo(this);
	}
};




PatronParser.NombreArchivoContext = NombreArchivoContext;

PatronParser.prototype.nombreArchivo = function() {

    var localctx = new NombreArchivoContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, PatronParser.RULE_nombreArchivo);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 11;
        this.nombre();
        this.state = 12;
        this.extension();
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

function ExtensionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PatronParser.RULE_extension;
    return this;
}

ExtensionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExtensionContext.prototype.constructor = ExtensionContext;

ExtensionContext.prototype.PUNTO = function() {
    return this.getToken(PatronParser.PUNTO, 0);
};

ExtensionContext.prototype.LETRA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PatronParser.LETRA);
    } else {
        return this.getToken(PatronParser.LETRA, i);
    }
};


ExtensionContext.prototype.enterRule = function(listener) {
    if(listener instanceof PatronListener ) {
        listener.enterExtension(this);
	}
};

ExtensionContext.prototype.exitRule = function(listener) {
    if(listener instanceof PatronListener ) {
        listener.exitExtension(this);
	}
};




PatronParser.ExtensionContext = ExtensionContext;

PatronParser.prototype.extension = function() {

    var localctx = new ExtensionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, PatronParser.RULE_extension);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 22;
        _la = this._input.LA(1);
        if(_la===PatronParser.PUNTO) {
            this.state = 14;
            this.match(PatronParser.PUNTO);
            this.state = 20;
            this._errHandler.sync(this);
            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
            switch(la_) {
            case 1:
                this.state = 15;
                this.match(PatronParser.LETRA);
                this.state = 16;
                this.match(PatronParser.LETRA);
                break;

            case 2:
                this.state = 17;
                this.match(PatronParser.LETRA);
                this.state = 18;
                this.match(PatronParser.LETRA);
                this.state = 19;
                this.match(PatronParser.LETRA);
                break;

            }
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

function NombreContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = PatronParser.RULE_nombre;
    return this;
}

NombreContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NombreContext.prototype.constructor = NombreContext;

NombreContext.prototype.LETRA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PatronParser.LETRA);
    } else {
        return this.getToken(PatronParser.LETRA, i);
    }
};


NombreContext.prototype.SEPARADOR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PatronParser.SEPARADOR);
    } else {
        return this.getToken(PatronParser.SEPARADOR, i);
    }
};


NombreContext.prototype.DIGITO = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(PatronParser.DIGITO);
    } else {
        return this.getToken(PatronParser.DIGITO, i);
    }
};


NombreContext.prototype.enterRule = function(listener) {
    if(listener instanceof PatronListener ) {
        listener.enterNombre(this);
	}
};

NombreContext.prototype.exitRule = function(listener) {
    if(listener instanceof PatronListener ) {
        listener.exitNombre(this);
	}
};




PatronParser.NombreContext = NombreContext;

PatronParser.prototype.nombre = function() {

    var localctx = new NombreContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, PatronParser.RULE_nombre);
    var _la = 0; // Token type
    try {
        this.state = 66;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 24;
            _la = this._input.LA(1);
            if(!(_la===PatronParser.LETRA || _la===PatronParser.SEPARADOR)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 28;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 25;
                    _la = this._input.LA(1);
                    if(!(_la===PatronParser.LETRA || _la===PatronParser.DIGITO)) {
                    this._errHandler.recoverInline(this);
                    }
                    else {
                        this.consume();
                    } 
                }
                this.state = 30;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
            }

            this.state = 34;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PatronParser.SEPARADOR) {
                this.state = 31;
                this.match(PatronParser.SEPARADOR);
                this.state = 36;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 45;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PatronParser.LETRA || _la===PatronParser.DIGITO) {
                this.state = 43;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 37;
                    this.match(PatronParser.LETRA);
                    this.state = 38;
                    this.match(PatronParser.SEPARADOR);
                    break;

                case 2:
                    this.state = 39;
                    this.match(PatronParser.DIGITO);
                    this.state = 40;
                    this.match(PatronParser.SEPARADOR);
                    break;

                case 3:
                    this.state = 41;
                    this.match(PatronParser.LETRA);
                    break;

                case 4:
                    this.state = 42;
                    this.match(PatronParser.DIGITO);
                    break;

                }
                this.state = 47;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 48;
            _la = this._input.LA(1);
            if(!(_la===PatronParser.LETRA || _la===PatronParser.SEPARADOR)) {
            this._errHandler.recoverInline(this);
            }
            else {
                this.consume();
            }
            this.state = 57;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PatronParser.LETRA || _la===PatronParser.DIGITO) {
                this.state = 55;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
                switch(la_) {
                case 1:
                    this.state = 49;
                    this.match(PatronParser.LETRA);
                    this.state = 50;
                    this.match(PatronParser.SEPARADOR);
                    break;

                case 2:
                    this.state = 51;
                    this.match(PatronParser.DIGITO);
                    this.state = 52;
                    this.match(PatronParser.SEPARADOR);
                    break;

                case 3:
                    this.state = 53;
                    this.match(PatronParser.LETRA);
                    break;

                case 4:
                    this.state = 54;
                    this.match(PatronParser.DIGITO);
                    break;

                }
                this.state = 59;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 63;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===PatronParser.SEPARADOR) {
                this.state = 60;
                this.match(PatronParser.SEPARADOR);
                this.state = 65;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;

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


exports.PatronParser = PatronParser;

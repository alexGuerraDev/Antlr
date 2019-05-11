// Generated from Matlab.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var MatlabListener = require('./MatlabListener').MatlabListener;
var grammarFileName = "Matlab.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0003\u0010\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002",
    "\u0006\u0002\b\n\u0002\r\u0002\u000e\u0002\t\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0002\u0002\u0004\u0002\u0004\u0002",
    "\u0002\u0002\u000e\u0002\u0007\u0003\u0002\u0002\u0002\u0004\r\u0003",
    "\u0002\u0002\u0002\u0006\b\u0005\u0004\u0003\u0002\u0007\u0006\u0003",
    "\u0002\u0002\u0002\b\t\u0003\u0002\u0002\u0002\t\u0007\u0003\u0002\u0002",
    "\u0002\t\n\u0003\u0002\u0002\u0002\n\u000b\u0003\u0002\u0002\u0002\u000b",
    "\f\u0007\u0002\u0002\u0003\f\u0003\u0003\u0002\u0002\u0002\r\u000e\u0007",
    "\u0003\u0002\u0002\u000e\u0005\u0003\u0002\u0002\u0002\u0003\t"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [  ];

var symbolicNames = [ null, "WORD" ];

var ruleNames =  [ "evaluar", "line" ];

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
MatlabParser.WORD = 1;

MatlabParser.RULE_evaluar = 0;
MatlabParser.RULE_line = 1;

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

EvaluarContext.prototype.EOF = function() {
    return this.getToken(MatlabParser.EOF, 0);
};

EvaluarContext.prototype.line = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LineContext);
    } else {
        return this.getTypedRuleContext(LineContext,i);
    }
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
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 5; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 4;
            this.line();
            this.state = 7; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===MatlabParser.WORD);
        this.state = 9;
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

function LineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = MatlabParser.RULE_line;
    return this;
}

LineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LineContext.prototype.constructor = LineContext;

LineContext.prototype.WORD = function() {
    return this.getToken(MatlabParser.WORD, 0);
};

LineContext.prototype.enterRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.enterLine(this);
	}
};

LineContext.prototype.exitRule = function(listener) {
    if(listener instanceof MatlabListener ) {
        listener.exitLine(this);
	}
};




MatlabParser.LineContext = LineContext;

MatlabParser.prototype.line = function() {

    var localctx = new LineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, MatlabParser.RULE_line);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 11;
        this.match(MatlabParser.WORD);
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

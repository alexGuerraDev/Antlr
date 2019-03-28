// Generated from Hello.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');
var HelloListener = require('./HelloListener').HelloListener;
var grammarFileName = "Hello.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0005\b\u0004\u0002\t\u0002\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0002\u0002\u0002\u0003\u0002\u0002\u0002\u0002\u0006\u0002\u0004",
    "\u0003\u0002\u0002\u0002\u0004\u0005\u0007\u0003\u0002\u0002\u0005\u0006",
    "\u0007\u0004\u0002\u0002\u0006\u0003\u0003\u0002\u0002\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'hello'" ];

var symbolicNames = [ null, null, "ID", "WS" ];

var ruleNames =  [ "r" ];

function HelloParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

HelloParser.prototype = Object.create(antlr4.Parser.prototype);
HelloParser.prototype.constructor = HelloParser;

Object.defineProperty(HelloParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

HelloParser.EOF = antlr4.Token.EOF;
HelloParser.T__0 = 1;
HelloParser.ID = 2;
HelloParser.WS = 3;

HelloParser.RULE_r = 0;


function RContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = HelloParser.RULE_r;
    return this;
}

RContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RContext.prototype.constructor = RContext;

RContext.prototype.ID = function() {
    return this.getToken(HelloParser.ID, 0);
};

RContext.prototype.enterRule = function(listener) {
    if(listener instanceof HelloListener ) {
        listener.enterR(this);
	}
};

RContext.prototype.exitRule = function(listener) {
    if(listener instanceof HelloListener ) {
        listener.exitR(this);
	}
};




HelloParser.RContext = RContext;

HelloParser.prototype.r = function() {

    var localctx = new RContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, HelloParser.RULE_r);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 2;
        this.match(HelloParser.T__0);
        this.state = 3;
        this.match(HelloParser.ID);
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


exports.HelloParser = HelloParser;

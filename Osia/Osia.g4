grammar Osia;


/*
 * Parser Rules
 */


evaluar             : ENTEROS EOF ;

expresion           : IF '(' condition ')' expr end_ ;

condition           : ( var_or_const OPERADORES_RELACIONALES var_or_const | aux ) ;

aux                 : '(' condition ')' aux_;

aux_                : (OPERADORES_LOGICOS aux);

var_or_const        : (variable|CONSTANTE);

expr                :   expr op=('*'|'/') expr     # MulDiv
                    |   expr op=('+'|'-') expr      # AddSub
                    |   CONSTANTE                   # int
                    |   variable                    # id
                    |   DIGITO                      # digito
                    |   '(' expr ')'                # parens
                    ;  

end_                : (END | ELSE expr END);

variable            : LETRA (SEPARADOR)? cuerpo_variable ;

cuerpo_variable     : (LETRA | DIGITO | LETRA SEPARADOR | DIGITO SEPARADOR)*;


/*
 * Lexer Rules
 */


fragment MINUSCULAS      : [a-z];
fragment MAYUSCULAS      : [A-Z];
fragment NUMBER          : [1-9];
fragment ZERO            : [0];
fragment ALLNUMBERS		 : [0-9];
fragment GUION           : ('_');
fragment SIGNO_DECIMAL   : ('.'|',');
fragment SIGNO           : ('-' | '+');
fragment RELACIONAL      : ('=='|'!='|'<'|'>'|'>='|'<=');
fragment LOGICOS         : ('&&'|'||');




LETRA                   : (MINUSCULAS | MAYUSCULAS);

DIGITO                  : (ALLNUMBERS)+;

ENTEROS                 : NUMBER (NUMBER);

SEPARADOR               : (GUION);

ESPACIO                 : ( ' ' | '\t');

SALTO                   : ('\r'? '\n' | '\r');

CONSTANTE               : (ENTERO | DECIMAL);

ENTERO                  : (SIGNO NUMBER+ | ZERO);

DECIMAL                 : (SIGNO ALLNUMBERS+ SIGNO_DECIMAL ALLNUMBERS* NUMBER ALLNUMBERS* | SIGNO ALLNUMBERS* NUMBER ALLNUMBERS* SIGNO_DECIMAL ALLNUMBERS+);

OPERADORES_RELACIONALES : RELACIONAL;

OPERADORES_LOGICOS      : LOGICOS;





/*
 *Reserved words 
 *
 */

IF                   : 'if' ;
ELSE                 : 'else' ;
END                  : 'end' ;

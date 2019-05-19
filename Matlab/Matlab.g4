grammar Matlab;


/*
 * Parser Rules
 */

evaluar             : expresion EOF ;

expresion           : switch_ case_ otherwise_ end_;

switch_             : SWITCH ESPACIO variable ESPACIO* SALTO+ ;

case_               : (CASE ESPACIO DIGITO ESPACIO* SALTO* sentencia)+  ;

otherwise_          : OTHERWISE ESPACIO* SALTO* sentencia;

sentencia           : expr ESPACIO* SALTO+ ;

end_                : END ESPACIO* SALTO*  ;

const_              : DIGITO | CONSTANTE ;

expr                :   expr op=('*'|'/') expr      # MulDiv
                    |   expr op=('+'|'-') expr      # AddSub
                    |   CONSTANTE                   # int
                    |   variable                    # id
                    |   DIGITO                      # digito
                    |   '(' expr ')'                # parens
                    ;  

variable            : inic_variable cuerpo_variable ;

inic_variable       : LETRA (SEPARADOR)? ;

cuerpo_variable     : (LETRA | DIGITO | LETRA SEPARADOR | DIGITO SEPARADOR)* ;



                   



/*
 * Lexer Rules
 */


fragment MINUSCULAS  : [a-z];
fragment MAYUSCULAS  : [A-Z];
fragment NUMBER      : [0-9];
fragment GUION       : ('_');
fragment SIGNO_DECIMAL   : ('.'|',');
OPERADORES           : ('+' | '-' | '*' | '/');


LETRA                : (MINUSCULAS | MAYUSCULAS);

DIGITO               : (NUMBER);

SEPARADOR            : (GUION);

ESPACIO              : ( ' ' | '\t');

SALTO                : ('\r'? '\n' | '\r');

CONSTANTE            : DIGITO+ (SIGNO_DECIMAL DIGITO+)?;





/*
 *Reserved words 
 *
 */

SWITCH                : 'SWITCH' | 'switch' ;
CASE                 : 'Case'  ;
OTHERWISE            : 'Otherwise' ;
END                  : 'END'| 'end' ;




/*
 * Revisar que el digito del case reciba más de un digito. Ejemplo : 10, 12, 125
 * Revisar como se componen las sentencias
*/
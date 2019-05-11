grammar Matlab;


/*
 * Parser Rules
 */

evaluar             : expresion EOF ;

expresion           : cabecera case_ otherwise_ end_;

cabecera            : WITCH ESPACIO variable SALTO* ;

case_               : (CASE ESPACIO DIGITO (ESPACIO*|SALTO*) SALTO* )(CASE ESPACIO DIGITO (ESPACIO*|SALTO*) SALTO*)* ;

otherwise_          : OTHERWISE SALTO* ;

end_                : END SALTO*  ;

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


LETRA                : (MINUSCULAS | MAYUSCULAS);

DIGITO               : (NUMBER);

SEPARADOR            : (GUION);

ESPACIO              : ( ' ' | '\t');

SALTO                :('\r'? '\n' | '\r');



WITCH               : 'WITCH' ;
CASE                : 'Case'  ;
OTHERWISE           : 'Otherwise' ;
END                 : 'END' ;
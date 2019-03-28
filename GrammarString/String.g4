grammar String;

/*
 * Parser Rules
 */

evaluar             : variable EOF ;

variable            : inicio cuerpoDef ;

inicio              : LETRA (SEPARADOR)? ;

cuerpoDef           : (LETRA | DIGITO | LETRA SEPARADOR | DIGITO SEPARADOR)* ;




/*
* Lexer Rules
*/

fragment MINUSCULAS  : [a-z];
fragment MAYUSCULAS  : [A-Z];
fragment NUMBER      : [0-9];
fragment GUION   : ('_');


LETRA                : (MINUSCULAS | MAYUSCULAS);

DIGITO               : (NUMBER);

SEPARADOR            : (GUION);

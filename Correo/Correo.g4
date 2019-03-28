grammar Correo;

/*
 * Parser Rules
 */

evaluar             : correo EOF ;

correo              : variable ARROBA variable PUNTO variable ;

variable            : inicioCorreo cuerpoDef ;

cuerpoDef           : (LETRA | DIGITO | LETRA SEPARADOR | DIGITO SEPARADOR)* ;

inicioCorreo        : LETRA (SEPARADOR)? ;


/*
* Lexer Rules
* Definicion de Alfabetos
*/

fragment MINUSCULAS  : [a-z];
fragment MAYUSCULAS  : [A-Z];
fragment NUMBER      : [0-9];
fragment GUION   : ('_');

LETRA                : (MINUSCULAS | MAYUSCULAS);

DIGITO               : (NUMBER);

SEPARADOR            : (GUION);

ARROBA               : ('@');

PUNTO                : ('.');



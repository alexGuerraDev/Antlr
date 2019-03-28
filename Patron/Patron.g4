grammar Patron;

/*
 * Parser Rules
 */

evaluar             : nombreArchivo EOF ;

nombreArchivo       : nombre extension ;

extension           : (PUNTO (LETRA LETRA | LETRA LETRA LETRA))?;

nombre              : (LETRA | SEPARADOR) (LETRA | DIGITO )* SEPARADOR*  (LETRA SEPARADOR | DIGITO SEPARADOR | LETRA | DIGITO)* | (LETRA | SEPARADOR ) (LETRA SEPARADOR | DIGITO SEPARADOR | LETRA |  DIGITO)* SEPARADOR* ;



/*
* Lexer Rules
* Definicion de Alfabetos
*/

fragment MINUSCULAS  : [a-z];
fragment MAYUSCULAS  : [A-Z];
fragment NUMBER      : [0-9];
fragment GUION       : ('_');


LETRA                : (MINUSCULAS | MAYUSCULAS);

DIGITO               : (NUMBER);

SEPARADOR            : (GUION);

PUNTO                : ('.');



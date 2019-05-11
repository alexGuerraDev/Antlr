grammar Matlab;


/*
 * Parser Rules
 */

evaluar             : line+ EOF ;
 
line                : WORD ;


/*
 * Lexer Rules
 */

fragment LOWERCASE  : [a-z] ;
fragment UPPERCASE  : [A-Z] ;

WORD                :(LOWERCASE | UPPERCASE);

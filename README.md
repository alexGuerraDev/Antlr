# Antlr
==============

### 1. INSTALL ANTLR IN YOUR PC 🔧

    Linux

    + $ cd /usr/local/lib
    + $ wget https://www.antlr.org/download/antlr-4.7.2-complete.jar
    + $ export CLASSPATH=".:/usr/local/lib/antlr-4.7.2-complete.jar:$CLASSPATH"
    + $ alias antlr4='java -jar /usr/local/lib/antlr-4.7.2-complete.jar'
    + $ alias grun='java org.antlr.v4.gui.TestRig' 

    For other OS see here  https://www.antlr.org/

### 2. VERIFY THAT INSTALLATION WAS SUCCESSFUL 🔩

    write on your console the command  <antlr4>. If the installation was successful will should appear the options of the command.
    
    Example 

    ```
    ANTLR Parser Generator  Version 4.5.3
    -o ___              specify output directory where all output is generated
    -lib ___            specify location of grammars, tokens files
    -atn                generate rule augmented transition network diagrams
    -encoding ___       specify grammar file encoding; e.g., euc-jp
    -message-format ___ specify output style for messages in antlr, gnu, vs2005
    -long-messages      show exception details when available for errors and warnings
    -listener           generate parse tree listener (default)
    -no-listener        don't generate parse tree listener
    -visitor            generate parse tree visitor
    -no-visitor         don't generate parse tree visitor (default)
    -package ___        specify a package/namespace for the generated code
    -depend             generate file dependencies
    -D<option>=value    set/override a grammar-level option
    -Werror             treat warnings as errors
    -XdbgST             launch StringTemplate visualizer on generated code
    -XdbgSTWait         wait for STViz to close before continuing
    -Xforce-atn         use the ATN simulator for all predictions
    -Xlog               dump lots of logging info to antlr-timestamp.log
    ```


### 3. INSTALL DEPENDENCIES ⚙️

      npm i


### 4. RUN THE PROJECT 🚀

      npm start
  
    
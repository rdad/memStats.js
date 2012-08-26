import os

rev     = 0
source  = '../src/memStats.js'
build   = '../build/memStats.js'
header  = '// memStats.js r' + str( rev ) + ' - http://github.com/rdad/memStats.js\n'

os.system( 'java -jar compiler/compiler.jar --language_in=ECMASCRIPT5 --js ' + source + ' --js_output_file ' + build )

file = open( build, 'r' )
contents = file.read();
file.close()

file = open( build, 'w' )
file.write( header + contents )
file.close()

#!/bin/sh

STYLE="\n<style>"`cat presentation.css`"</style>\n"
MARP="./node_modules/.bin/marp"

mkdir -p public
cp -ar sessions public/
cp -ar exercises public/
rm -rf public/excercises/*/solutions
cd public

for file in `find | grep md$` 
do 
    sed -i s/##/\\n---\\n\\n##/ $file
    echo $STYLE >> $file
done
cd ..

$MARP --theme gaia -I public/ -o public/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gameOfThrones' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function gameOfThrones(s) {
    //ordena string p/ facilitar a contagem dos caracteres
    let word = s.split("").sort()
    // contador de caracteres com aparições ímpares
    let oddCounter = 0;
    //contador de aparição do caractere
    let counter = 1;
    
    for(let i=0; i<word.length; i++){
        if(word[i] == word[i+1]){
            counter++;
        }
        else {
            if(counter % 2 == 1){
                oddCounter++;
                if(oddCounter > 1){
                    return 'NO';
                }
            }
            counter = 1;
        }
    }
    return 'YES';
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = gameOfThrones(s);

    ws.write(result + '\n');

    ws.end();
}

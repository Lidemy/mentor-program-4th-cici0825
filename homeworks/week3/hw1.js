hw1 _________________________好多星星_________________________


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
});

const lines = [];

rl.on('line', (line) => {
    lines.push(line);
});

rl.on('close', () => {
    solve(lines);
});


function solve(lines) {

    let input = Number(lines);
    let result = '';

    for (let i = 0; i <= input; i++) {
        console.log(result += '*');
    }

    return result;
}

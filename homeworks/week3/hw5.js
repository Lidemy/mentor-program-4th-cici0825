
//hw5_________________________聯誼順序比大小_________________________

const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
    input: process.stdin,
});

rl.on('line', (line) => {
    lines.push(line);
});

rl.on('close', () => {
    solve(lines);
});

function solve(lines) {

    for (let i = 1; i < lines.length; i ++) {
        
        const input = lines[i].split(' ');
        const a = BigInt(input[0]);
        const b = BigInt(input[1]);
        if (a === b) {
            console.log('DRAW');
        }
        if (Number(input[2]) === 1) {
            if (a > b) {
                console.log('A');
            } else if (a < b) {
                console.log('B');
            }
        }
        if (Number(input[2]) === -1) {
            if (a > b) {
                console.log('B');
            } else if (a < b) {
                console.log('A');
            }
        }
    }
}


/*
function solution(n, k=0) {
    const answer = (n*12000) + (k * 2000)- (~~(n/10)*2000);
    return answer;
}

const result = solution(64,6);
console.log(result);
*/

/*
function solution(message) {
    return message.length*2;
}

const result = solution("I love you~");
console.log(result);
*/

/*
function solution(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers[numbers.length-1] * numbers[numbers.length-2];
}

const result = solution([0, 31, 24, 10, 1, 9]);
console.log(result);
*/

/*
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('숫자를 입력하세요: ', (answer) => {
    console.log(answer);
    rl.close();
});


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    solution(Number(input[0]));
});

function solution(n) {
    for (let i = 1; i < n + 1; i++) {
        console.log('*'.repeat(i));
    }
}
*/

/*
장군개미는 5의 공격력
병정개미는 3의 공격력
일개미는 1의 공격력

function solution(hp) {
    const a = ~~(hp/5);
    const b = ~~(hp%5)/3;
    const c = ~~((hp%5)%3);
    return a+b+c;
}

const result = solution(999);
console.log(result);
*/
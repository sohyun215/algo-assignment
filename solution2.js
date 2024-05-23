import readline from 'readline';

export function getNextTerm(curTerm) {
  const nextTerm = [];
  let repeatedNum = curTerm[0];
  let cnt = 1; // 반복되는 숫자 개수

  const curTermLen = curTerm.length;
  for (let i = 1; i < curTermLen; i++) {
    if (repeatedNum === curTerm[i]) {
      cnt += 1;
    } else {
      nextTerm.push(cnt + repeatedNum);

      repeatedNum = curTerm[i];
      cnt = 1;
    }
  }

  nextTerm.push(cnt + repeatedNum);

  return nextTerm.join('');
}

export function solution(n) {
  let a = '1';

  for (let i = 0; i < n - 1; i++) {
    a = getNextTerm(a);
  }

  const mid = a.length / 2;
  console.log(a[mid - 1] + a[mid]);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('양의 정수 n을 입력하세요: ', (line) => {
  const n = Number(line);
  solution(n);

  rl.close();
});

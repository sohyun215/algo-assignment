import readline from 'readline';

export function getNextTerm(curTerm) {
  let nextTerm = '';

  let repeatedNum = curTerm[0];
  let cnt = 1; // 반복되는 숫자 개수

  for (let i = 1; i < curTerm.length; i++) {
    if (repeatedNum === curTerm[i]) {
      cnt += 1;
    } else {
      nextTerm += cnt + repeatedNum; // 반복되는 개수와 숫자를 붙여쓴다.

      repeatedNum = curTerm[i];
      cnt = 1;
    }
  }

  nextTerm += cnt + repeatedNum; // 마지막 숫자에 대한 처리

  return nextTerm;
}

// n이 주어질 때, n번째 항의 자릿수 중 가운데 두 자리수 출력(첫 번째 항은 1, 3 < n < 100)
export function solution(n) {
  let a = '1';

  // n번째 항 구하기
  for (let i = 0; i < n - 1; i++) {
    a = getNextTerm(a);
  }

  const mid = a.length / 2;
  console.log(a.slice(mid - 1, mid + 1));
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('양의 정수 n을 입력하세요:', (line) => {
  const n = Number(line);
  solution(n);

  rl.close();
});

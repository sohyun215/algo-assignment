export function getNextTerm(number) {
  const curTerm = String(number);
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

  return Number(nextTerm);
}

console.log(getNextTerm(1));

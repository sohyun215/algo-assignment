# 보고 말하기 수열(look and say sequence)

## 실행 방법

```bash
# 테스트 실행
npm install
npm run test

# 코드 실행
node solution.js
node solution2.js
```

## 문제 설명

1. 첫 번째 항이 Ln = 1이라고 할 때,
2. 이전 항의 **이웃한 같은 숫자**들을 묶는다.
3. 묶인 숫자들의 개수와 숫자를 붙여 쓴다.
4. 2와 3을 반복한다.

양의 정수 n `(3 < n < 100)`이 주어질 때 n번째 항의 가운데 두 자리 수를 출력한다.

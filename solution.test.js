import { getNextTerm, solution } from './solution';

describe('look and say sequence test', () => {
  describe('첫 번째 항이 1일 때', () => {
    const expected = [1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211];

    for (let i = 1; i < expected.length; i++) {
      test(`이전 항이 ${expected[i - 1]}일 때, 현재 항은 ${
        expected[i]
      }이다.`, () => {
        expect(getNextTerm(String(expected[i - 1]))).toBe(String(expected[i]));
      });
    }
  });

  describe('첫 번째 항이 a일 때(1 < a < 10)', () => {
    let a = Math.floor(Math.random() * 8 + 2);

    const prefix = [
      '',
      '1',
      '111',
      '311',
      '13211',
      '111312211',
      '31131122211',
      '1321132132211',
    ];

    for (let i = 1; i < prefix.length; i++) {
      test(`이전 항이 ${prefix[i - 1]}a일 때, 현재 항은 ${
        prefix[i]
      }a이다.`, () => {
        expect(getNextTerm(prefix[i - 1] + a)).toBe(prefix[i] + a);
      });
    }
  });
});

describe('n번째 항의 자릿수 중 가운데 두 자리 수를 출력하는 함수 테스트(3 < n < 100, 첫 번째 항 = 1)', () => {
  test('5번 째 항의 가운데 두 자리 수는 12이다.', () => {
    const logSpy = jest.spyOn(console, 'log');
    solution(5);

    expect(logSpy).toHaveBeenCalledWith('12');
  });

  test('8번째 항의 가운데 두 자리 수는 21이다.', () => {
    const logSpy = jest.spyOn(console, 'log');
    solution(8);

    expect(logSpy).toHaveBeenCalledWith('21');
  });
});

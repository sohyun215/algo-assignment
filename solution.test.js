describe('look and say sequence test', () => {
  describe('첫 번째 항이 1일 때', () => {
    test('두 번째 항은 11이다.', () => {
      expect(solution(1)).toBe(11);
    });

    test('세 번째 항은 21이다.', () => {
      expect(solution(11).toBe(21));
    });

    test('네 번째 항은 1211이다.', () => {
      expect(solution(21).toBe(1211));
    });

    test('다섯 번째 항은 111221이다.', () => {
      expect(solution(1211).toBe(111221));
    });

    test('여섯 번째 항은 312211이다.', () => {
      expect(solution(111221).toBe(312211));
    });
  });

  describe('첫 번째 항이 a일 때(1 < a < 10)', () => {
    let a = Math.floor(Math.random() * 10);

    test('두 번째 항은 1a이다.', () => {
      expect(solution(a).toBe(Number('1' + a)));
    });

    test('세 번째 항은 111a이다.', () => {
      expect(solution(Number('1' + a)).toBe(Number('111' + a)));
    });

    test('네 번째 항은 311a이다.', () => {
      expect(solution(Number('111' + a)).toBe(Number('311' + a)));
    });

    test('다섯 번째 항은 13211a이다.', () => {
      expect(solution(Number('311' + a)).toBe(Number('13211' + a)));
    });

    test('여섯 번째 항은 111312211a이다.', () => {
      expect(solution(Number('13211' + a)).toBe(Number('11312211' + a)));
    });
  });
});

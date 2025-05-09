const assert = require('assert');
const add = require('./index');

describe('add 함수 테스트', () => {
  it('2 + 3 = 5', () => {
    assert.strictEqual(add(2, 3), 5);
  });

  it('0 + 0 = 0', () => {
    assert.strictEqual(add(0, 0), 0);
  });
});

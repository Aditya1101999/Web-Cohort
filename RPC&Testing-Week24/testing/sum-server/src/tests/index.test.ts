import {describe, expect, it} from '@jest/globals';
import {sum} from '../index';

describe('sum module', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  it('adds 4 + 5 to equal 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
});
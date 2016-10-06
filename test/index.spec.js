'use strict';

var expect = require('chai').expect,
    text = undefined,
    search = require('../index');

describe('search', () => {

  it('should return false if no text', () => {
    expect(search(text, 'remote', 'onsite')).to.equal(false);
  });

  it('should reject `text` if `offset` is present and not within `threshold` characters of `target`', () => {
    text = "2U | NYC | ONSITE | Various Positions sample text, sample text, sample text, sample text, sample text, some remote ok";
    expect(search(text, 'remote', 'onsite')).to.equal(false);
  });

  it('should accept `text` if `target` and `offset` are within `threshold` characters of each other', () => {
    text = "2U | NYC | ONSITE OR REMOTE ok | Various Positions";
    expect(search(text, 'remote', 'onsite')).to.equal(true);
  });

  it('should accept `text` if `target` is present', () => {
    text = "2U | NYC | REMOTE ok | Various Positions";
    expect(search(text, 'remote', 'onsite')).to.equal(true);
  });
});

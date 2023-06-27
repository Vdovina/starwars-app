import { getId } from './get-id';

describe('getId Tests', () => {
  it('getId gets correct path, ends with /', () => {
    expect(getId('some-path/2/')).toEqual('2');
  });

  it('getId gets correct path, ends with other symbol', () => {
    expect(getId('some-path/2/1')).toEqual('1');
  });

  it('getId gets wrong path', () => {
    expect(getId('some-string')).toEqual('some-string');
  });
});

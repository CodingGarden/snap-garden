const app = require('../src/app');

describe('authentication', () => {
  it('registered the authentication service', () => {
    expect(app.service('authentication')).toBeTruthy();
  });
  
});

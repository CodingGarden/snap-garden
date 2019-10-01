const app = require('../../src/app');

describe('\'upload\' service', () => {
  it('registered the service', () => {
    const service = app.service('upload');
    expect(service).toBeTruthy();
  });
});

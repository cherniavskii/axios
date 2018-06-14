var defaults = require('../../../lib/defaults');
var dispatchRequest = require('../../../lib/core/dispatchRequest');

describe('core::dispatchRequest', function() {
  beforeAll(function() {
    Object.freeze(defaults);
  });

  afterAll(function() {
    Object.seal(defaults);
  });

  it('should not mutate config', function() {
    expect(function() {
      dispatchRequest(defaults)
    }).not.toThrowError(TypeError, /Cannot assign to read only property|is read-only/);
  });
});

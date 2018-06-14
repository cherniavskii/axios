var defaults = require('../../../lib/defaults');
var dispatchRequest = require('../../../lib/core/dispatchRequest');

describe('core::dispatchRequest', function() {
  it('should not mutate config', function() {
    Object.freeze(defaults);

    expect(function() {
      dispatchRequest(defaults)
    }).not.toThrowError(TypeError, /Cannot assign to read only property|is read-only/);
  });
});

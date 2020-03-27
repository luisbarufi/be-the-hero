const generationUniqueId = require('../../src/utils/generationUniqueId');

describe('Generation Unique ID', () => {
  it('should generation an unique ID', () => {
    const id = generationUniqueId();

    expect(id).toHaveLength(8);
  });
});
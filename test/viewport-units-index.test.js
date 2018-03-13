const postcss = require('postcss');
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const plugin = require('postcss-viewport-units');

function compare(filename, warnings, options) {
  const actual = fs.readFileSync(
    path.resolve(__dirname, `viewport-units-fixtures/${filename}/actual.css`),
    { encoding: 'utf8' }
  );
  const expected = fs.readFileSync(
    path.resolve(__dirname, `viewport-units-fixtures/${filename}/expected.css`),
    { encoding: 'utf8' }
  );

  return postcss([plugin(options)])
    .process(actual)
    .then((result) => {
      assert.equal(result.css, expected);
      if (warnings) {
        assert.deepEqual(result.warnings().map(item => item.text), warnings);
      }

      return result;
    });
}

describe('postcss-viewport-units', () => {
  it('should automatically append `content` property', () => compare('default-options'));

  it('should only process `calc` value if `options.onlyCalc` is true', () => compare('given-options', null, { onlyCalc: true }));

  it('should give a warning if there is already a `content` property', () => (
    compare('with-content', [
      '\'.hero:after\' already has a \'content\' property, give up to overwrite it.',
    ])
  ));
});

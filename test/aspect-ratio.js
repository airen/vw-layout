var fs = require('fs')
var test = require('tape')
var tapDiff = require('tap-diff')
var postcss = require('postcss')
var plugin = require('..')

if(!module.parent) {
  test.createStream()
    .pipe(tapDiff())
    .pipe(process.stdout);
}

function filename(name) { return 'test/' + name + '.css' }
function read(name) { return fs.readFileSync(name, 'utf8') }

function compareFixtures(t, name, msg, opts, postcssOpts) {
  postcssOpts = postcssOpts || {}
  postcssOpts.from = filename('aspect-ratio-fixtures/' + name)
  opts = opts || {}
  var actual = postcss().use(plugin(opts)).process(read(postcssOpts.from), postcssOpts).css
  var expected = read(filename('aspect-ratio-fixtures/' + name + '.expected'))
  fs.writeFile(filename('aspect-ratio-fixtures/' + name + '.actual'), actual)
  t.equal(actual, expected, msg)
}

test('default', function(t) {
  compareFixtures(t, 'default', 'should equal')
  t.end()
})

test('aspect', function(t) {
  compareFixtures(t, 'aspect', 'should equal')
  t.end()
})

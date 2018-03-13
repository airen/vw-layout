'use strict';

var fs = require('fs');
var postcss = require('postcss');
var pxToViewport = require('postcss-px-to-viewport');
var css = fs.readFileSync('test/px-to-viewport-main.css', 'utf8');
var options = {
    replace: false
};
var processedCss = postcss(pxToViewport(options)).process(css).css;

fs.writeFile('test/px-to-viewport-test.css', processedCss, function (err) {
  if (err) {
    throw err;
  }
  console.log('File with viewport units written.');
});
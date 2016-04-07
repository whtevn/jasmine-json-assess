#!/bin/sh node
'use strict';

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var suite_set = require(process.cwd() + '/' + process.argv.slice(-1));

if ((0, _index2.default)(suite_set)) {
  process.exit(0);
} else {
  process.exit(1);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = assess;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function assess(suite_set) {
  var suites = Object.keys(suite_set).map(function (name) {
    return suite_set[name];
  });
  return check_suite.apply(undefined, _toConsumableArray(suites));
}

function check_suite(suite) {
  if (!suite) return true;

  for (var _len = arguments.length, remaining = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    remaining[_key - 1] = arguments[_key];
  }

  if (determine_passing.apply(undefined, _toConsumableArray(suite.specs))) return check_suite.apply(undefined, remaining);
  return false;
}

function determine_passing(spec) {
  if (!spec) return true;

  for (var _len2 = arguments.length, remaining = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    remaining[_key2 - 1] = arguments[_key2];
  }

  if (spec.status === "passed") return determine_passing.apply(undefined, remaining);
  return false;
}
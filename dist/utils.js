"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = exports.selected = exports.listDead = exports.listAlive = exports.list = void 0;

var _yargs = _interopRequireDefault(require("yargs"));

var _request = _interopRequireDefault(require("request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var list = function list(urlBase, args) {
  (0, _request["default"])({
    url: urlBase,
    json: true
  }, function (error, response) {
    response.body.results.forEach(function (element, index) {
      console.log("".concat(element.id, " ").concat(element.name));
    });
  });
};

exports.list = list;

var listAlive = function listAlive(urlAlive, args) {
  (0, _request["default"])({
    url: urlAlive,
    json: true
  }, function (error, response) {
    response.body.results.forEach(function (element, index) {
      console.log("".concat(element.id, " ").concat(element.name));
    });
  });
};

exports.listAlive = listAlive;

var listDead = function listDead(urlDead, args) {
  (0, _request["default"])({
    url: urlDead,
    json: true
  }, function (error, response) {
    response.body.results.forEach(function (element, index) {
      console.log("".concat(element.id, " ").concat(element.name));
    });
  });
};

exports.listDead = listDead;

var selected = function selected(urlBase, args) {
  (0, _request["default"])({
    url: "".concat(urlBase).concat(args.number),
    json: true
  }, function (error, response) {
    console.log("".concat(urlBase).concat(args.number));
    console.log(response.body);
  });
};

exports.selected = selected;

var search = function search(urlBase, args) {
  (0, _request["default"])({
    url: urlBase,
    json: true
  }, function (error, response) {
    response.body.results.forEach(function (element, index) {
      if (element.name == args.name) {
        (0, _request["default"])({
          url: "".concat(urlBase).concat(element.id),
          json: true
        }, function (error, response) {
          console.log(response.body);
        });
      }
    });
  });
};

exports.search = search;
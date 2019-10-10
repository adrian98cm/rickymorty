"use strict";

var _request = _interopRequireDefault(require("request"));

var _yargs = _interopRequireDefault(require("yargs"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var urlBase = 'https://rickandmortyapi.com/api/character/';
var urlAlive = 'https://rickandmortyapi.com/api/character/?status=alive';
var urlDead = 'https://rickandmortyapi.com/api/character/?status=dead';

_yargs["default"].command({
  command: 'list',
  describe: 'listing all characters ',
  handler: function handler(args) {
    (0, _utils.list)(urlBase, args);
  }
});

_yargs["default"].command({
  command: 'alive',
  describe: 'listing all alive characters ',
  handler: function handler(args) {
    (0, _utils.listAlive)(urlAlive, args);
  }
});

_yargs["default"].command({
  command: 'dead',
  describe: 'listing all dead characters ',
  handler: function handler(args) {
    (0, _utils.listDead)(urlDead, args);
  }
});

_yargs["default"].command({
  command: 'select',
  describe: 'selecting a character with his id ',
  builder: {
    number: {
      describe: 'Character ID',
      demandOption: true,
      type: 'number'
    }
  },
  handler: function handler(args) {
    (0, _utils.selected)(urlBase, args);
  }
});

_yargs["default"].command({
  command: 'search',
  describe: 'searching a character with his id ',
  builder: {
    name: {
      describe: 'Name of the character',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function handler(args) {
    (0, _utils.selected)(urlBase, args);
  }
});

_yargs["default"].parse();
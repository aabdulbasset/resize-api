'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var sharp_1 = __importDefault(require('sharp'));
var path_1 = __importDefault(require('path'));
function main(fileName, dimensions) {
  console.log(path_1.default.resolve('./'));
  try {
    (0, sharp_1.default)('../images/full/'.concat(fileName, '.jpg'))
      .resize(dimensions[0], dimensions[1])
      .toFile(
        '../images/thumb/'
          .concat(fileName, '_')
          .concat(dimensions[0], 'x')
          .concat(dimensions[1], '.jpg')
      );
  } catch (err) {}
}
exports.default = main;

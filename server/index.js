'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = __importDefault(require('express'));
var fs_1 = __importDefault(require('fs'));
var resize_1 = __importDefault(require('./resize'));
var path_1 = __importDefault(require('path'));
var port = 3000;
var app = (0, express_1.default)();
app.listen(port, function () {
  console.log('Server working on '.concat(port));
});
app.use(express_1.default.static(path_1.default.resolve('../images/thumb')));
app.get('/api/images', function (req, res) {
  var filename = req.query.filename;
  var width = Number(req.query.width);
  var height = Number(req.query.height);
  var isValid = sanitize(filename, width, height);
  if (isValid == -1) {
    res.send('Invalid request').status(400);
    return;
  }
  fs_1.default.stat('../images/full/'.concat(filename, '.jpg'), function (err) {
    if (err != null) {
      res.send('Image does not exist').status(400);
    } else {
      fs_1.default.stat(
        '../images/thumb/'
          .concat(filename, '_')
          .concat(width, 'x')
          .concat(height, '.jpg'),
        function (err, stat) {
          if (err == null) {
            console.log('sending cache');
          } else {
            console.log('Resizing');
            (0, resize_1.default)(filename, [width, height]);
          }
          setTimeout(function () {
            res.send(
              '<img style="margin:auto;display:block;position:relative;top:50%;transform:translate(0,-50%)" src='
                .concat(req.protocol + '://' + req.get('host'), '/')
                .concat(filename, '_')
                .concat(width, 'x')
                .concat(height, '.jpg></img>')
            );
          }, 200);
        }
      );
    }
  });
});
function sanitize(filename, width, height) {
  if (filename == undefined) {
    return -1;
  }
  if (width == 0 || isNaN(width) || height == 0 || isNaN(height)) {
    return -1;
  }
  return 0;
}
exports.default = app;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./config"));

var _solicitudes = _interopRequireDefault(require("./routes/solicitudes.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); //Configuracion

app.set('port', _config["default"].port); //Intermedios

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_solicitudes["default"]);
var _default = app;
exports["default"] = _default;
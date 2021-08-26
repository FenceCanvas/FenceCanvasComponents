"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactThreeFiber = require("react-three-fiber");

var _GLTFLoader = require("three/examples/jsm/loaders/GLTFLoader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Loader = _ref => {
  let {
    objPath,
    position
  } = _ref;
  const gltf = (0, _reactThreeFiber.useLoader)(_GLTFLoader.GLTFLoader, objPath);
  return /*#__PURE__*/_react.default.createElement("primitive", {
    object: gltf.scene,
    position: position
  });
};

var _default = Loader;
exports.default = _default;
"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _drei = require("@react-three/drei");

var _react = _interopRequireWildcard(require("react"));

var THREE = _interopRequireWildcard(require("three"));

var _reactThreeFiber = require("react-three-fiber");

var _core = require("@material-ui/core");

var _reactRedux = require("react-redux");

var _Loader = _interopRequireDefault(require("../../objects/Loader"));

var _objectUpload = require("./objectUpload.slice");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyles = (0, _core.makeStyles)(() => (0, _core.createStyles)({
  canvas: {
    minHeight: '25rem'
  }
}));

const ObjectPreview = () => {
  const classes = useStyles();
  const {
    objectPath
  } = (0, _reactRedux.useSelector)(_objectUpload.ObjectUploadState);
  const cam = (0, _reactThreeFiber.useResource)();
  const defaultCameraPosition = new THREE.Vector3(0, 0, 4);
  (0, _react.useEffect)(() => {
    THREE.Object3D.DefaultUp = new THREE.Vector3(0, 0, 1);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_reactThreeFiber.Canvas, {
    className: classes.canvas,
    onCreated: _ref => {
      let {
        camera
      } = _ref;
      return camera.lookAt(0, 0, 0);
    }
  }, /*#__PURE__*/_react.default.createElement(_react.Suspense, {
    fallback: null
  }, /*#__PURE__*/_react.default.createElement(_drei.PerspectiveCamera, {
    position: defaultCameraPosition,
    near: 1,
    far: 1000,
    makeDefault: true,
    up: new THREE.Vector3(0, 0, 1),
    ref: cam
  }), /*#__PURE__*/_react.default.createElement(_drei.OrbitControls, {
    up: new THREE.Vector3(0, 1, 0),
    center: new THREE.Vector3(0, 0, 0),
    enablePan: true,
    enableZoom: true,
    enableRotate: true,
    camera: cam.current
  }), /*#__PURE__*/_react.default.createElement("ambientLight", {
    intensity: 0.5
  }), /*#__PURE__*/_react.default.createElement("spotLight", {
    intensity: 0.8,
    position: [300, 300, 400]
  }), /*#__PURE__*/_react.default.createElement(_drei.Environment, {
    preset: "forest",
    background: true
  }), objectPath && objectPath !== '' && /*#__PURE__*/_react.default.createElement(_react.Suspense, {
    fallback: null
  }, /*#__PURE__*/_react.default.createElement(_Loader.default, {
    objPath: objectPath,
    position: [0, 0, 0]
  }))));
};

var _default = ObjectPreview;
exports.default = _default;
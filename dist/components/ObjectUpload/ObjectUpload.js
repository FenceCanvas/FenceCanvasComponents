"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/web.url.js");

var _core = require("@material-ui/core");

var _materialUiDropzone = require("material-ui-dropzone");

var _react = _interopRequireWildcard(require("react"));

var _ObjectPreview = _interopRequireDefault(require("./ObjectPreview"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyles = (0, _core.makeStyles)(() => (0, _core.createStyles)({
  dropzone: {
    minHeight: '10rem !important',
    height: '13rem'
  }
}));

const ObjectUpload = _ref => {
  let {
    open,
    onClose,
    onUpload
  } = _ref;
  const classes = useStyles();
  const [file, setFile] = (0, _react.useState)();

  const handleDialogClose = () => {
    onClose();
  };

  const handleFileUpload = files => {
    setFile(files[0]);
  };

  (0, _react.useEffect)(() => {
    if (file) {
      onUpload(URL.createObjectURL(file));
      setFile(undefined);
    }
  }, [file]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_core.Dialog, {
    maxWidth: "md",
    fullWidth: true,
    open: open,
    onClose: handleDialogClose
  }, /*#__PURE__*/_react.default.createElement(_core.DialogTitle, null, "Object Upload"), /*#__PURE__*/_react.default.createElement(_core.DialogContent, null, /*#__PURE__*/_react.default.createElement(_materialUiDropzone.DropzoneArea, {
    acceptedFiles: ['.glb', '.obj', '.gltf'],
    filesLimit: 1,
    onChange: handleFileUpload,
    dropzoneText: "Import Objects to be uploaded to the cloud.",
    showFileNames: true,
    useChipsForPreview: true,
    dropzoneClass: classes.dropzone
  }), /*#__PURE__*/_react.default.createElement(_react.Suspense, {
    fallback: null
  }, /*#__PURE__*/_react.default.createElement(_ObjectPreview.default, null))), /*#__PURE__*/_react.default.createElement(_core.DialogActions, null, /*#__PURE__*/_react.default.createElement(_core.Button, {
    color: "secondary",
    onClick: handleDialogClose
  }, "Cancel"), /*#__PURE__*/_react.default.createElement(_core.Button, {
    color: "primary"
  }, "Upload"))));
};

var _default = ObjectUpload;
exports.default = _default;
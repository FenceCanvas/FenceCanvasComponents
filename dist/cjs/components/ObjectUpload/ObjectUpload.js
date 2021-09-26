"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var core_1 = require("@material-ui/core");
var material_ui_dropzone_1 = require("material-ui-dropzone");
var react_1 = require("react");
var ObjectPreview_1 = __importDefault(require("./ObjectPreview"));
var useStyles = core_1.makeStyles(function () {
    return core_1.createStyles({
        dropzone: {
            minHeight: '10rem !important',
            height: '13rem',
        },
    });
});
var ObjectUpload = function (_a) {
    var open = _a.open, onClose = _a.onClose, onUpload = _a.onUpload;
    var classes = useStyles();
    var _b = react_1.useState(), file = _b[0], setFile = _b[1];
    var _c = react_1.useState(), filePath = _c[0], setFilePath = _c[1];
    var handleDialogClose = function () {
        onClose();
    };
    var handleUploadClick = function () {
        onUpload(file);
    };
    var handleFileUpload = function (files) {
        setFile(files[0]);
    };
    react_1.useEffect(function () {
        if (file) {
            setFilePath(URL.createObjectURL(file));
        }
    }, [file]);
    return (jsx_runtime_1.jsx(jsx_runtime_1.Fragment, { children: jsx_runtime_1.jsxs(core_1.Dialog, __assign({ maxWidth: 'md', fullWidth: true, open: open, onClose: handleDialogClose }, { children: [jsx_runtime_1.jsx(core_1.DialogTitle, { children: "Object Upload" }, void 0), jsx_runtime_1.jsxs(core_1.DialogContent, { children: [jsx_runtime_1.jsx(material_ui_dropzone_1.DropzoneArea, { acceptedFiles: ['.glb', '.obj', '.gltf'], filesLimit: 1, onChange: handleFileUpload, dropzoneText: 'Import Objects to be uploaded to the cloud.', showFileNames: true, useChipsForPreview: true, dropzoneClass: classes.dropzone }, void 0), jsx_runtime_1.jsx(react_1.Suspense, __assign({ fallback: null }, { children: filePath && (jsx_runtime_1.jsx(ObjectPreview_1.default, { objectPath: filePath }, void 0)) }), void 0)] }, void 0), jsx_runtime_1.jsxs(core_1.DialogActions, { children: [jsx_runtime_1.jsx(core_1.Button, __assign({ color: 'secondary', onClick: handleDialogClose }, { children: "Cancel" }), void 0), jsx_runtime_1.jsx(core_1.Button, __assign({ color: 'primary', onClick: handleUploadClick }, { children: "Upload" }), void 0)] }, void 0)] }), void 0) }, void 0));
};
exports.default = ObjectUpload;

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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, createStyles, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
import { Suspense, useEffect, useState } from 'react';
import ObjectPreview from './ObjectPreview';
var useStyles = makeStyles(function () {
    return createStyles({
        dropzone: {
            minHeight: '10rem !important',
            height: '13rem',
        },
    });
});
var ObjectUpload = function (_a) {
    var open = _a.open, onClose = _a.onClose, onUpload = _a.onUpload;
    var classes = useStyles();
    var _b = useState(), file = _b[0], setFile = _b[1];
    var _c = useState(), filePath = _c[0], setFilePath = _c[1];
    var handleDialogClose = function () {
        onClose();
    };
    var handleUploadClick = function () {
        onUpload(file);
    };
    var handleFileUpload = function (files) {
        setFile(files[0]);
    };
    useEffect(function () {
        if (file) {
            setFilePath(URL.createObjectURL(file));
        }
    }, [file]);
    return (_jsx(_Fragment, { children: _jsxs(Dialog, __assign({ maxWidth: 'md', fullWidth: true, open: open, onClose: handleDialogClose }, { children: [_jsx(DialogTitle, { children: "Object Upload" }, void 0), _jsxs(DialogContent, { children: [_jsx(DropzoneArea, { acceptedFiles: ['.glb', '.obj', '.gltf'], filesLimit: 1, onChange: handleFileUpload, dropzoneText: 'Import Objects to be uploaded to the cloud.', showFileNames: true, useChipsForPreview: true, dropzoneClass: classes.dropzone }, void 0), _jsx(Suspense, __assign({ fallback: null }, { children: filePath && (_jsx(ObjectPreview, { objectPath: filePath }, void 0)) }), void 0)] }, void 0), _jsxs(DialogActions, { children: [_jsx(Button, __assign({ color: 'secondary', onClick: handleDialogClose }, { children: "Cancel" }), void 0), _jsx(Button, __assign({ color: 'primary', onClick: handleUploadClick }, { children: "Upload" }), void 0)] }, void 0)] }), void 0) }, void 0));
};
export default ObjectUpload;

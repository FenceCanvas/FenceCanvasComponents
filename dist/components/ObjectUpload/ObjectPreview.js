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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import * as THREE from 'three';
import { Canvas, } from '@react-three/fiber';
import { createStyles, makeStyles } from '@material-ui/core';
import GltfLoader from '../GLTFLoader';
import ObjLoader from '../OBJLoader';
var useStyles = makeStyles(function () {
    return createStyles({
        canvas: {
            minHeight: '25rem',
        },
    });
});
var ObjectPreview = function (_a) {
    var _b;
    var objectPath = _a.objectPath;
    var classes = useStyles();
    var defaultCameraPosition = new THREE.Vector3(0, 0, 4);
    return (_jsx(Canvas, __assign({ className: classes.canvas, onCreated: function (_a) {
            var camera = _a.camera;
            return camera.lookAt(0, 0, 0);
        } }, { children: _jsxs(Suspense, __assign({ fallback: null }, { children: [_jsx(PerspectiveCamera, { position: defaultCameraPosition, near: 1, far: 1000, makeDefault: true }, void 0), _jsx(OrbitControls, { enablePan: true, enableZoom: true, enableRotate: true }, void 0), _jsx("ambientLight", { intensity: 0.5 }, void 0), _jsx("spotLight", { intensity: 0.8, position: [300, 300, 400] }, void 0), _jsx(Environment, { preset: 'forest', background: true }, void 0), (objectPath && objectPath !== '') && (_jsx(Suspense, __assign({ fallback: null }, { children: ((_b = objectPath.split('.').pop()) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === 'gltf' ? (_jsx(GltfLoader, { objPath: objectPath, position: [0, 0, 0] }, void 0)) : (_jsx(ObjLoader, { objPath: objectPath, position: [0, 0, 0] }, void 0)) }), void 0))] }), void 0) }), void 0));
};
export default ObjectPreview;

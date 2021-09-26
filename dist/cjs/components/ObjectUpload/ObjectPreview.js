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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var drei_1 = require("@react-three/drei");
var react_1 = require("react");
var THREE = __importStar(require("three"));
var fiber_1 = require("@react-three/fiber");
var core_1 = require("@material-ui/core");
var GLTFLoader_1 = __importDefault(require("../GLTFLoader"));
var OBJLoader_1 = __importDefault(require("../OBJLoader"));
var useStyles = core_1.makeStyles(function () {
    return core_1.createStyles({
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
    return (jsx_runtime_1.jsx(fiber_1.Canvas, __assign({ className: classes.canvas, onCreated: function (_a) {
            var camera = _a.camera;
            return camera.lookAt(0, 0, 0);
        } }, { children: jsx_runtime_1.jsxs(react_1.Suspense, __assign({ fallback: null }, { children: [jsx_runtime_1.jsx(drei_1.PerspectiveCamera, { position: defaultCameraPosition, near: 1, far: 1000, makeDefault: true }, void 0), jsx_runtime_1.jsx(drei_1.OrbitControls, { enablePan: true, enableZoom: true, enableRotate: true }, void 0), jsx_runtime_1.jsx("ambientLight", { intensity: 0.5 }, void 0), jsx_runtime_1.jsx("spotLight", { intensity: 0.8, position: [300, 300, 400] }, void 0), jsx_runtime_1.jsx(drei_1.Environment, { preset: 'forest', background: true }, void 0), (objectPath && objectPath !== '') && (jsx_runtime_1.jsx(react_1.Suspense, __assign({ fallback: null }, { children: ((_b = objectPath.split('.').pop()) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === 'gltf' ? (jsx_runtime_1.jsx(GLTFLoader_1.default, { objPath: objectPath, position: [0, 0, 0] }, void 0)) : (jsx_runtime_1.jsx(OBJLoader_1.default, { objPath: objectPath, position: [0, 0, 0] }, void 0)) }), void 0))] }), void 0) }), void 0));
};
exports.default = ObjectPreview;

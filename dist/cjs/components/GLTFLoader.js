"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var fiber_1 = require("@react-three/fiber");
var GLTFLoader_1 = require("three/examples/jsm/loaders/GLTFLoader");
var GltfLoader = function (_a) {
    var objPath = _a.objPath, position = _a.position;
    var gltf = fiber_1.useLoader(GLTFLoader_1.GLTFLoader, objPath);
    return (jsx_runtime_1.jsx("primitive", { object: gltf.scene, position: position }, void 0));
};
exports.default = GltfLoader;

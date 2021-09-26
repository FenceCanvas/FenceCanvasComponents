"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var fiber_1 = require("@react-three/fiber");
var OBJLoader_1 = require("three/examples/jsm/loaders/OBJLoader");
var ObjLoader = function (_a) {
    var objPath = _a.objPath, position = _a.position;
    var obj = fiber_1.useLoader(OBJLoader_1.OBJLoader, objPath);
    return (jsx_runtime_1.jsx("primitive", { object: obj, position: position }, void 0));
};
exports.default = ObjLoader;

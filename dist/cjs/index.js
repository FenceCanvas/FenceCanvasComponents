"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjLoader = exports.GltfLoader = exports.ObjectUpload = void 0;
var ObjectUpload_1 = __importDefault(require("./components/ObjectUpload/ObjectUpload"));
exports.ObjectUpload = ObjectUpload_1.default;
var GLTFLoader_1 = __importDefault(require("./components/GLTFLoader"));
exports.GltfLoader = GLTFLoader_1.default;
var OBJLoader_1 = __importDefault(require("./components/OBJLoader"));
exports.ObjLoader = OBJLoader_1.default;

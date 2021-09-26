import { jsx as _jsx } from "react/jsx-runtime";
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
var GltfLoader = function (_a) {
    var objPath = _a.objPath, position = _a.position;
    var gltf = useLoader(GLTFLoader, objPath);
    return (_jsx("primitive", { object: gltf.scene, position: position }, void 0));
};
export default GltfLoader;

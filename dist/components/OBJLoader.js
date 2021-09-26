import { jsx as _jsx } from "react/jsx-runtime";
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
var ObjLoader = function (_a) {
    var objPath = _a.objPath, position = _a.position;
    var obj = useLoader(OBJLoader, objPath);
    return (_jsx("primitive", { object: obj, position: position }, void 0));
};
export default ObjLoader;

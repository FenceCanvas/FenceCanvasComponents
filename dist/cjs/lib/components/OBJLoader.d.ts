import React from 'react';
import * as THREE from 'three';
export interface LoaderProps {
    objPath: string;
    position: [number, number, number] | THREE.Vector3;
}
declare const ObjLoader: ({ objPath, position }: LoaderProps) => React.ReactElement;
export default ObjLoader;

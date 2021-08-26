import React from 'react';
import * as THREE from 'three';
export interface LoaderProps {
    objPath: string;
    position: [number, number, number] | THREE.Vector3;
}
declare const Loader: ({ objPath, position }: LoaderProps) => React.ReactElement;
export default Loader;

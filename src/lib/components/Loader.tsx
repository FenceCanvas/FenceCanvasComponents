import React from 'react';
import { ObjectMap, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export interface LoaderProps {
  objPath: string;
  position: [number, number, number] | THREE.Vector3
}

const Loader = ({ objPath, position }: LoaderProps): React.ReactElement => {
	const gltf: GLTF & ObjectMap = useLoader(GLTFLoader, objPath);

	return (
		<primitive object={gltf.scene} position={position} />
	);
};

export default Loader;

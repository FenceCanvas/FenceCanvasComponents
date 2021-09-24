import React from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export interface LoaderProps {
  objPath: string;
  position: [number, number, number] | THREE.Vector3
}

const ObjLoader = ({ objPath, position }: LoaderProps): React.ReactElement => {
	const obj: THREE.Group = useLoader(OBJLoader, objPath);

	return (
		<primitive object={obj} position={position} />
	);
};

export default ObjLoader;

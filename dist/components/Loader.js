import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Loader = ({
  objPath,
  position
}) => {
  const gltf = useLoader(GLTFLoader, objPath);
  return <primitive object={gltf.scene} position={position} />;
};

export default Loader;
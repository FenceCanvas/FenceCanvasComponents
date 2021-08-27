import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import React, { Suspense } from 'react';
import * as THREE from 'three';
import {
	Canvas,
} from '@react-three/fiber';
import { createStyles, makeStyles } from '@material-ui/core';
import Loader from '../Loader';

const useStyles = makeStyles(() =>
	createStyles({
		canvas: {
			minHeight: '25rem',
		},
	}));

export interface ObjectPreviewProps {
	objectPath: string;
}

const ObjectPreview = ({ objectPath }: ObjectPreviewProps): React.ReactElement => {
	const classes = useStyles();

	const defaultCameraPosition: THREE.Vector3 = new THREE.Vector3(0, 0, 4);

	return (
		<Canvas className={classes.canvas} onCreated={({ camera }) => camera.lookAt(0, 0, 0)}>
			<Suspense fallback={null}>
				<PerspectiveCamera
					position={defaultCameraPosition}
					near={1}
					far={1000}
					makeDefault
				/>
				<OrbitControls enablePan enableZoom enableRotate />
				<ambientLight intensity={0.5} />
				<spotLight intensity={0.8} position={[300, 300, 400]} />
				<Environment preset='forest' background />
				{(objectPath && objectPath !== '') && (
					<Suspense fallback={null}>
						<Loader objPath={objectPath} position={[0, 0, 0]} />
					</Suspense>
				)}
			</Suspense>
		</Canvas>
	);
};

export default ObjectPreview;

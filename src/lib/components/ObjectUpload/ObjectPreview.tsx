import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import React, { Suspense, useEffect } from 'react';
import * as THREE from 'three';
import {
	Camera, Canvas, useResource,
} from 'react-three-fiber';
import { createStyles, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Loader from '../../objects/Loader';
import { ObjectUploadState } from './objectUpload.slice';

const useStyles = makeStyles(() =>
	createStyles({
		canvas: {
			minHeight: '25rem',
		},
	}));

const ObjectPreview = (): React.ReactElement => {
	const classes = useStyles();

	const { objectPath } = useSelector(ObjectUploadState);

	const cam = useResource<Camera>();

	const defaultCameraPosition: THREE.Vector3 = new THREE.Vector3(0, 0, 4);

	useEffect(() => {
		THREE.Object3D.DefaultUp = new THREE.Vector3(0, 0, 1);
	}, []);

	return (
		<Canvas className={classes.canvas} onCreated={({ camera }) => camera.lookAt(0, 0, 0)}>
			<Suspense fallback={null}>
				<PerspectiveCamera
					position={defaultCameraPosition}
					near={1}
					far={1000}
					makeDefault
					up={new THREE.Vector3(0, 0, 1)}
					ref={cam}
				/>
				<OrbitControls up={new THREE.Vector3(0, 1, 0)} center={new THREE.Vector3(0, 0, 0)} enablePan enableZoom enableRotate camera={cam.current} />
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

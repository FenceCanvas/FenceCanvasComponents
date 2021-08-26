import {
	Button,
	createStyles,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	makeStyles,
} from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
import React, { Suspense, useEffect, useState } from 'react';

import ObjectPreview from './ObjectPreview';

const useStyles = makeStyles(() =>
	createStyles({
		dropzone: {
			minHeight: '10rem !important',
			height: '13rem',
		},
	}));

export interface ObjectUploadProps {
	open: boolean;
	onClose: () => void;
}

const ObjectUpload = ({ open, onClose }: ObjectUploadProps): React.ReactElement => {
	const classes = useStyles();

	const [file, setFile] = useState<File>();
	const [filePath, setFilePath] = useState<string>();

	const handleDialogClose = (): void => {
		onClose();
	};

	const handleFileUpload = (files: File[]): void => {
		setFile(files[0]);
	};

	useEffect(() => {
		if (file) {
			setFilePath(URL.createObjectURL(file));
			setFile(undefined);
		}
	}, [file]);

	return (
		<>
			<Dialog maxWidth='md' fullWidth open={open} onClose={handleDialogClose}>
				<DialogTitle>Object Upload</DialogTitle>
				<DialogContent>
					<DropzoneArea
						acceptedFiles={['.glb', '.obj', '.gltf']}
						filesLimit={1}
						onChange={handleFileUpload}
						dropzoneText='Import Objects to be uploaded to the cloud.'
						showFileNames
						useChipsForPreview
						dropzoneClass={classes.dropzone}
					/>
					<Suspense fallback={null}>
						{filePath && (
							<ObjectPreview objectPath={filePath} />
						)}
					</Suspense>
				</DialogContent>
				<DialogActions>
					<Button color='secondary' onClick={handleDialogClose}>Cancel</Button>
					<Button color='primary'>Upload</Button>
				</DialogActions>
			</Dialog>
		</>
	);
};

export default ObjectUpload;

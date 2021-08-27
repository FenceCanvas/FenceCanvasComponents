import { Button, createStyles, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles } from '@material-ui/core';
import { DropzoneArea } from 'material-ui-dropzone';
import React, { Suspense, useEffect, useState } from 'react';
import ObjectPreview from './ObjectPreview';
const useStyles = makeStyles(() => createStyles({
  dropzone: {
    minHeight: '10rem !important',
    height: '13rem'
  }
}));

const ObjectUpload = ({
  open,
  onClose,
  onUpload
}) => {
  const classes = useStyles();
  const [file, setFile] = useState();
  const [filePath, setFilePath] = useState();

  const handleDialogClose = () => {
    onClose();
  };

  const handleUploadClick = () => {
    onUpload(file);
  };

  const handleFileUpload = files => {
    setFile(files[0]);
  };

  useEffect(() => {
    if (file) {
      setFilePath(URL.createObjectURL(file));
    }
  }, [file]);
  return <>
			<Dialog maxWidth='md' fullWidth open={open} onClose={handleDialogClose}>
				<DialogTitle>Object Upload</DialogTitle>
				<DialogContent>
					<DropzoneArea acceptedFiles={['.glb', '.obj', '.gltf']} filesLimit={1} onChange={handleFileUpload} dropzoneText='Import Objects to be uploaded to the cloud.' showFileNames useChipsForPreview dropzoneClass={classes.dropzone} />
					<Suspense fallback={null}>
						{filePath && <ObjectPreview objectPath={filePath} />}
					</Suspense>
				</DialogContent>
				<DialogActions>
					<Button color='secondary' onClick={handleDialogClose}>Cancel</Button>
					<Button color='primary' onClick={handleUploadClick}>Upload</Button>
				</DialogActions>
			</Dialog>
		</>;
};

export default ObjectUpload;
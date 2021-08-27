import React, { useState } from 'react';
import { ObjectUpload } from './lib';
import './App.css';

const App = (): React.ReactElement => {
  const [showObjectUpload, setShowObjectUpload] = useState<boolean>(true);
  const [fileName, setFileName] = useState<string>('');

  const handleObjectUploadClose = (): void => {
    setShowObjectUpload(!showObjectUpload);
  };

  const handleObjectUpload = (file: File): void => {
    setFileName(file.name);
  };

  return (
    <>
      <button onClick={handleObjectUploadClose}>Show Object Uploader</button>
      {fileName}
      <ObjectUpload open={showObjectUpload} onClose={handleObjectUploadClose} onUpload={handleObjectUpload} />
    </>
  );
}

export default App;

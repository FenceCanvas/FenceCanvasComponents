import React, { useState } from 'react';
import { ObjectUpload } from './lib';
import './App.css';
import { Button, CssBaseline } from '@material-ui/core';
import { IListItem } from './interface/listItem.interface';
import HomeIcon from '@material-ui/icons/Home';
import Sidebar from './lib/components/Sidebar/Sidebar';

const sidebarListItems: IListItem[] = [
  {
    icon: <HomeIcon />,
    text: 'Home',
  }
]

export const FENCE_CANVAS_RED = '#8D1539';
export const FENCE_CANVAS_LIGHT_RED = '#b9335b';
export const FENCE_CANVAS_YELLOW = '#FEBD28';
export const FENCE_CANVAS_DARK_YELLOW = '#e4aa24';

const App = (): React.ReactElement => {
  const [showObjectUpload, setShowObjectUpload] = useState<boolean>(true);
  const [fileName, setFileName] = useState<string>('');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  const handleObjectUploadClose = (): void => {
    setShowObjectUpload(!showObjectUpload);
  };

  const handleObjectUpload = (file: File | undefined): void => {
    if (file) {
      setFileName(file.name);
    }
  };

  const handleSidebarToggle = (): void => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div style={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar color='primary' open={sidebarOpen} listItems={sidebarListItems} onClose={handleSidebarToggle} />
      <main style={{ flexGrow: 1, padding: '2rem' }}>
        <Button color='primary' variant='contained' onClick={handleObjectUploadClose}>Show Object Uploader</Button>
        {fileName}
        <ObjectUpload open={showObjectUpload} onClose={handleObjectUploadClose} onUpload={handleObjectUpload} />
      </main>
    </div>
  );
}

export default App;

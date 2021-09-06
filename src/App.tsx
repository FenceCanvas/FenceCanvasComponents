import React, { useState } from 'react';
import { ObjectUpload } from './lib';
import './App.css';
import { Button, createTheme, CssBaseline, FormLabel, Switch, Theme, ThemeOptions, ThemeProvider } from '@material-ui/core';
import { IListItem } from './interface/listItem.interface';
import HomeIcon from '@material-ui/icons/Home';
import Sidebar from './lib/components/Sidebar/Sidebar';
import Logo from './assets/images/placeholder_fence_logo.jpg';

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

const darkTheme: ThemeOptions = {
	palette: {
		type: 'dark',
		primary: {
			main: FENCE_CANVAS_YELLOW,
		},
		secondary: {
			main: FENCE_CANVAS_LIGHT_RED,
		},
	},
	spacing: 8,
};

const lightTheme: ThemeOptions = {
	palette: {
		type: 'light',
		primary: {
			main: FENCE_CANVAS_RED,
		},
		secondary: {
			main: FENCE_CANVAS_DARK_YELLOW,
      contrastText: 'black',
		},
	},
	spacing: 8,
};

const App = (): React.ReactElement => {
  const [showObjectUpload, setShowObjectUpload] = useState<boolean>(true);
  const [fileName, setFileName] = useState<string>('');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  const appliedTheme: Theme = createTheme(theme === 'dark' ? darkTheme : lightTheme);

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

  const handleDarkModeSwitchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (event.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeProvider theme={appliedTheme}>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Sidebar color={theme === 'light' ? 'primary' : 'secondary'} open={sidebarOpen} listItems={sidebarListItems} onClose={handleSidebarToggle} logoSrc={Logo} />
        <main style={{ flexGrow: 1, padding: '2rem' }}>
          <FormLabel color='primary'>Dark Mode</FormLabel>
          <Switch color='primary' onChange={handleDarkModeSwitchChange} checked={theme === 'dark'} name='darkMode' />
          <Button color='primary' variant='contained' onClick={handleObjectUploadClose}>Show Object Uploader</Button>
          {fileName}
          <ObjectUpload open={showObjectUpload} onClose={handleObjectUploadClose} onUpload={handleObjectUpload} />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;

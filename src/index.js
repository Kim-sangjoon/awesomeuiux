import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import SampleAppMain from './components/SampleAppMain';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './css/SampleAppStyle';
import './css/style.css';


ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SampleAppMain />
    </ThemeProvider>
  </React.StrictMode>
);
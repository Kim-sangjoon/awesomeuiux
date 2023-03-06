import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
  Box,
  Drawer,
  AppBar
} from '@mui/material';
import Prism from 'prismjs';
import LnbArea from './LnbArea';
import HeaderWrap from './HeaderWrap';
// Page Component
import MainLayoutPage from './page/MainLayoutPage';
import MainComponentPage from './page/MainConponentPage';
import MainWebGridPage from './page/MainWebGridPage';
import MainWebChartPage from './page/MainWebChartPage';
import MainCommonCodePage from './page/MainCommonCodePage';
import MainMessagePage from './page/MainMessagePage';
import NotFound from './page/NotFound';


const drawerWidth = 200; //lnb width Size

Prism.manual = true;
Prism.highlightAll();

export default function SampleAppMain() {
  return (
    <BrowserRouter>
      <Box className='sampleApp' sx={{ display: 'flex' }}>
        <AppBar
          position="fixed"
          sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`, boxShadow: 'none',
          borderBottom: '1px solid #dbdbdb',
          backgroundColor: 'transparent'
          }}
        >
          <HeaderWrap />
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <LnbArea /> 
        </Drawer>
        <Routes>
          <Route path="/" element={<MainLayoutPage />}></Route>
          <Route path="/component" element={<MainComponentPage />}></Route>
          <Route path="/webgrid" element={<MainWebGridPage />}></Route>
          <Route path="/webchart" element={<MainWebChartPage />}></Route>
          <Route path="/commoncode" element={<MainCommonCodePage />}></Route>
          <Route path="/message" element={<MainMessagePage />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}
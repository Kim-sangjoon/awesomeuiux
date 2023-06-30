import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
  Box,
  Drawer,
  AppBar,
  CircularProgress
} from '@mui/material';
import Prism from 'prismjs';
import LnbArea from './LnbArea';
import HeaderWrap from './HeaderWrap';
// Page Component
const MainLayoutPage = lazy(() => import('./page/MainLayoutPage'));  
const MainComponentPage = lazy(() => import('./page/MainConponentPage'));  
const MainWebGridPage = lazy(() => import('./page/MainWebGridPage'));  
const MainWebChartPage = lazy(() => import('./page/MainWebChartPage'));  
const MainCommonCodePage = lazy(() => import('./page/MainCommonCodePage'));  
const MainMessagePage = lazy(() => import('./page/MainMessagePage'));  
const NotFound = lazy(() => import('./page/NotFound'));  


const drawerWidth = 200; //lnb width Size

Prism.manual = true;
Prism.highlightAll();

export default function SampleAppMain() {
  return (
    <BrowserRouter basename='/'>
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

        <Suspense fallback={
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 'calc(100vh - 64px)'}}>
            <CircularProgress className='page-loading' color='primary'/>
          </Box>
        }>
          <Routes>
            <Route path="/" element={<MainLayoutPage />}></Route>
            <Route path="/component" element={<MainComponentPage />}></Route>
            <Route path="/webgrid" element={<MainWebGridPage />}></Route>
            <Route path="/webchart" element={<MainWebChartPage />}></Route>
            <Route path="/commoncode" element={<MainCommonCodePage />}></Route>
            <Route path="/message" element={<MainMessagePage />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </Suspense>
      </Box>
    </BrowserRouter>
  );
}
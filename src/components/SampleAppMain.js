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
const MainComponentPage = lazy(() => import('./page/MainComponentPage'));  
const MainWebGridPage = lazy(() => import('./page/MainWebGridPage'));  
const MainWebChartPage = lazy(() => import('./page/MainWebChartPage'));  
const MainCommonCodePage = lazy(() => import('./page/MainCommonCodePage'));  
const MainApiPage = lazy(() => import('./page/MainApiPage'));  
const NotFound = lazy(() => import('./page/NotFound'));  


const drawerWidth = 200; //lnb width Size

Prism.manual = true;
Prism.highlightAll();

export default function SampleAppMain() {
  return (
    <BrowserRouter basename='/react-sample-app'>
      <Box className='sampleApp' sx={{ display: 'flex' }}>
        <AppBar
          position="fixed"
          sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`, boxShadow: 'none',
          borderBottom: '1px solid #dbdbdb',
          backgroundColor: 'transparent',
          '@media (max-width:1200px)':{
            width: '100%',
            ml: '10px'
          }
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
            '@media (max-width: 1200px)': {
              width: 0,
              display: 'none'
            }
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
            <Route path="/" exact element={<MainLayoutPage />}></Route>
            <Route path="/layout" element={<MainLayoutPage />}></Route>
            <Route path="/component" element={<MainComponentPage />}></Route>
            <Route path="/webgrid" element={<MainWebGridPage />}></Route>
            <Route path="/webchart" element={<MainWebChartPage />}></Route>
            <Route path="/commoncode" element={<MainCommonCodePage />}></Route>
            <Route path="/api" element={<MainApiPage />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
        </Suspense>
      </Box>
    </BrowserRouter>
  );
}
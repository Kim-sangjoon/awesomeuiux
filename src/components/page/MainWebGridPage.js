import React from 'react';
// import { styled } from '@mui/material/styles';
import { 
  Box,
  Toolbar
} from '@mui/material';
import SamplePqgrid from '../component/SamplePqgrid';

const MainWebGridPage = (props) => {
    return (
        <>
            <Box className='contentboxwrap'>
                <Toolbar />
                <Box>
                    <h1>웹그리드</h1>
                    <h2>Basic</h2>
                    <p className='contText'>기본 데이터 그리드</p>
                    <SamplePqgrid />
                </Box>
            </Box>
        </>
    );
};

export default MainWebGridPage;
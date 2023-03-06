import React from 'react';
import { 
  Box,
  Toolbar
} from '@mui/material';


const NotFound = (props) => {
    return (
        <>
            <Box className='contentboxwrap'>
                <Box>
                    <Toolbar />
                    <h1>NotFound <br/>404 Error</h1>
                </Box>
            </Box>
        </>
    );
};

export default NotFound;
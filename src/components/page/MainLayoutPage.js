import React from 'react';
import { styled } from '@mui/material/styles';
import { 
  Box,
  Toolbar,
  Grid,
  Paper
} from '@mui/material';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  
}));

const MainLayoutPage = (props) => {
    return (
        <>
            <Box className='contentboxwrap'>
                <Toolbar />
                <Box>
                <h1>레이아웃</h1>
                <h2>2Depth</h2>
                <p className='contText'>레아아웃 컴포넌트</p>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <LiveProvider code="<button>버튼</button>">
                                <Grid item xs={12} md={6}>
                                    <Item sx={{border: '1px solid #ddd', boxShadow: 'none', height: '300px', overflowY: 'auto'}}>
                                        <LivePreview />
                                        <LiveError />
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Item sx={{border: '1px solid #ddd', boxShadow: 'none', height: '300px', backgroundColor: '#333', overflowY: 'auto'}}>
                                        <LiveEditor />
                                    </Item>
                                </Grid>
                            </LiveProvider>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default MainLayoutPage;
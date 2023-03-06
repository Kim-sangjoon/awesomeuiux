import React from 'react';
import { styled } from '@mui/material/styles';
import { 
  Box,
  Toolbar,
  Grid,
  Paper
} from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const MainWebGridPage = (props) => {
    return (
        <>
            <Box className='contentboxwrap'>
                <Toolbar />
                <Box>
                    <h1>웹그리드</h1>
                    <h2>Basic</h2>
                    <p className='contText'>기본 데이터 그리드</p>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Item sx={{border: '1px solid #ddd', boxShadow: 'none'}}>
                            component area
                            </Item>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Item sx={{border: '1px solid #ddd', boxShadow: 'none'}}>
                            <code>code area</code>
                            </Item>
                        </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default MainWebGridPage;
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

const MainConponentPage = (props) => {
    return (
        <>
            <Box className='contentboxwrap'>
                <Toolbar />
                <Box>
                    <h1>컴포넌트</h1>
                    <h2>Button</h2>
                    <p className='contText'>버튼을 사용하면 사용자가 탭 한 번으로 조치를 취하고 선택을 할 수 있습니다.</p>
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

export default MainConponentPage;
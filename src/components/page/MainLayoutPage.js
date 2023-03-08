import React from 'react';
import { styled } from '@mui/material/styles';
import { 
  Box,
  Button,
  Toolbar,
  Grid,
  Paper,
  Tabs,
  Tab
} from '@mui/material';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const scope = { 
    Box,
    Button,
    Toolbar,
    Grid,
    Paper,
    Tabs,
    Tab  };


const code = `<Button variant="contained">Hello World</Button>`;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  
}));

const leftComponentBox = {border: '1px solid #ddd', boxShadow: 'none', height: '300px', overflowY: 'auto', display:'flex', justifyContent: 'center', alignItems: 'center'}
const rightCodeBox = {border: '1px solid #ddd', boxShadow: 'none', height: '300px', backgroundColor: '#333', overflowY: 'auto'}


const MainLayoutPage = (props) => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box className='contentboxwrap'>
                <Toolbar />
                <Box>
                <h1>레이아웃</h1>
                <Tabs className='contentTab' value={value} onChange={handleChange}>
                    <Tab label="분할 샘플" />
                    <Tab label="2분할" />
                    <Tab label="3분할" />
                    <Tab label="4분할" />
                </Tabs>
                <p className='contText'>레아아웃 컴포넌트</p>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <LiveProvider code={code} scope={scope}>
                                <Grid item xs={12} md={6}>
                                    <Item sx={leftComponentBox}>
                                        <LivePreview />
                                        <LiveError />
                                    </Item>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Item sx={rightCodeBox}>
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
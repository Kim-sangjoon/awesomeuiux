import React from 'react';
import { styled } from '@mui/material/styles';
import { 
  Box,
  Button,
  Toolbar,
  Grid,
  Paper,
  Tabs,
  Tab,
  Stack
} from '@mui/material';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import CopyButton from '../component/CopyButton';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const scope = { 
    Box,
    Button,
    Toolbar,
    Grid,
    Paper,
    Tabs,
    Tab,
    Stack
};
const leftComponentBox = {border: '1px solid #ddd', boxShadow: 'none', height: '300px', overflowY: 'auto', display:'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}
const rightCodeBox = {border: '1px solid #ddd', boxShadow: 'none', height: '300px', backgroundColor: 'rgb(29, 31, 33)', overflowY: 'auto', textAlign: 'left'}
const code01=`<div className='code-sample'>
    <Stack spacing={2} direction="row" justifyContent="center">
        <Button variant="text">Button</Button>
        <Button variant="contained">Button</Button>
        <Button variant="outlined">Button</Button>
    </Stack>
</div>
`;

const MainComponentPage = (props) => {
    React.useEffect(()=> {
        handleScrollTop();
    },[])
    const [toast, setToast] = React.useState(false);
    const handleToast = () => {
        setToast(!toast)
    }

    const [TabValue, setTabValue] = React.useState(0); //탭컨트롤러 상태 0,1,2,3
    const sFix = 90;
    const tab01 = 0;
    const tab02 = 475;
    const tab03 = 895;
    const tab04 = 1080;

    const handleTabChange = (event, newTabValue) => {
        if (newTabValue === 0) {
            window.scrollTo({
                top: tab01 + 1,
                behavior: "smooth"
            });
        } else if (newTabValue === 1) {
            window.scrollTo({
                top: tab02 + 1,
                behavior: "smooth"
            });
        } else if (newTabValue === 2) {
            window.scrollTo({
                top: tab03 + 1,
                behavior: "smooth"
            });
        } else if (newTabValue === 3) {
            window.scrollTo({
                top: tab04 + 1,
                behavior: "smooth"
            });
        }
    };

    //탭컨트롤러 스크롤
    const tabRef = React.useRef(null);
    const handleScroll = () => {
        let scValue = window.scrollY;
        console.log("현재좌표" + scValue);
        if (scValue === 0) {
            document.getElementsByClassName('top-button')[0].classList.remove('show');
        } else {
            document.getElementsByClassName('top-button')[0].classList.add('show');
        }
        if (scValue > sFix) {
            tabRef.current.classList.add('fixed'); 
            if(scValue > tab01 && scValue < tab02){
                setTabValue(0);
            } else if(scValue > tab02 && scValue < tab03){
                setTabValue(1);
            } else if(scValue > tab03 && scValue < tab04){
                setTabValue(2);
            } else if(scValue > tab04){
                setTabValue(3);
            }
        } else if (scValue < sFix) {
            if (tabRef.current) {
                tabRef.current.classList.remove('fixed');
            }
        }
    };

    // 탭 컨트롤 하는 함수
    React.useEffect(()=> {
        const timer = setInterval(() => {
            window.addEventListener("scroll", handleScroll);
        }, 100);
        return () => {
            clearInterval(timer);
            window.removeEventListener("scroll", handleScroll);
        }
    },[])

    //스크롤 top 컨트롤
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <Box className='contentboxwrap'>
                <Toolbar />
                <Box>
                    <h1>컴포넌트</h1>
                    <Tabs className='contentTab' ref={tabRef} value={TabValue} variant="scrollable" scrollButtons="auto" onChange={handleTabChange} sx={{backgroundColor: 'rgb(255 255 255 / 60%)'}}>
                        <Tab label="Button" />
                        <Tab label="Checkbox" />
                        <Tab label="Radio Group" />
                        <Tab label="Select" />
                        <Tab label="Text Field" />
                        <Tab label="List" />
                        <Tab label="Table" />
                        <Tab label="Tooltip" />
                        <Tab label="Alert" />
                        <Tab label="Dialog" />
                        <Tab label="Accordion" />
                        <Tab label="Pagination" />
                        <Tab label="Tabs" />
                        <Tab label="Modal" />
                        <Tab label="Date Pickers" />
                    </Tabs>
                    <Box className='tab-item'>
                        <h2>버튼</h2>
                        <p className='contText'>버튼 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code01} scope={scope}>
                                    <Grid item xs={12} md={6}>
                                        <Item sx={leftComponentBox}>
                                            <LivePreview />
                                            <LiveError />
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{position: 'relative'}}>
                                        <Item sx={rightCodeBox}>
                                            <LiveEditor />
                                        </Item>
                                        <CopyButton onClick={handleToast} code={code01} />
                                    </Grid>
                                </LiveProvider>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='tab-item'>
                        <h2>버튼</h2>
                        <p className='contText'>버튼 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code01} scope={scope}>
                                    <Grid item xs={12} md={6}>
                                        <Item sx={leftComponentBox}>
                                            <LivePreview />
                                            <LiveError />
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{position: 'relative'}}>
                                        <Item sx={rightCodeBox}>
                                            <LiveEditor />
                                        </Item>
                                        <CopyButton onClick={handleToast} code={code01} />
                                    </Grid>
                                </LiveProvider>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='tab-item'>
                        <h2>버튼</h2>
                        <p className='contText'>버튼 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code01} scope={scope}>
                                    <Grid item xs={12} md={6}>
                                        <Item sx={leftComponentBox}>
                                            <LivePreview />
                                            <LiveError />
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{position: 'relative'}}>
                                        <Item sx={rightCodeBox}>
                                            <LiveEditor />
                                        </Item>
                                        <CopyButton onClick={handleToast} code={code01} />
                                    </Grid>
                                </LiveProvider>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='tab-item'>
                        <h2>버튼</h2>
                        <p className='contText'>버튼 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code01} scope={scope}>
                                    <Grid item xs={12} md={6}>
                                        <Item sx={leftComponentBox}>
                                            <LivePreview />
                                            <LiveError />
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{position: 'relative'}}>
                                        <Item sx={rightCodeBox}>
                                            <LiveEditor />
                                        </Item>
                                        <CopyButton onClick={handleToast} code={code01} />
                                    </Grid>
                                </LiveProvider>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='bottom-last'></Box>
                </Box>
                <Box className='top-button' onClick={handleScrollTop}>TOP</Box>
            </Box>
        </>
    );
};

export default MainComponentPage;
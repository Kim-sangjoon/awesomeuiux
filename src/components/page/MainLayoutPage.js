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
    Tab};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  
}));

const leftComponentBox = {border: '1px solid #ddd', boxShadow: 'none', height: '300px', overflowY: 'auto', display:'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}
const rightCodeBox = {border: '1px solid #ddd', boxShadow: 'none', height: '300px', backgroundColor: '#333', overflowY: 'auto'}
const code01=`<div className='code-sample'>
    <Button variant="contained">Hello World</Button>
</div>
`;

const MainLayoutPage = (props) => {
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
            tabRef.current.classList.remove('fixed');
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
                    <h1>레이아웃</h1>
                    <Tabs className='contentTab' ref={tabRef} value={TabValue} onChange={handleTabChange}>
                        <Tab label="분할 샘플" />
                        <Tab label="2분할" />
                        <Tab label="3분할" />
                        <Tab label="4분할" />
                    </Tabs>
                    <div className='tab-item'>
                        <h2>분할 샘플(반응형)</h2>
                        <p className='contText'>레아아웃 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code01} scope={scope}>
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
                    </div>
                    <div className='tab-item'>
                        <h2>분할 샘플(반응형)</h2>
                        <p className='contText'>레아아웃 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code01} scope={scope}>
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
                    </div>
                    <div className='tab-item'>
                        <h2>분할 샘플(반응형)</h2>
                        <p className='contText'>레아아웃 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code01} scope={scope}>
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
                    </div>
                    <div className='tab-item'>
                        <h2>분할 샘플(반응형)</h2>
                        <p className='contText'>레아아웃 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code01} scope={scope}>
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
                    </div>
                    <div className='tab-item'>
                        <h2>분할 샘플(반응형)</h2>
                        <p className='contText'>레아아웃 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code01} scope={scope}>
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
                    </div>
                    <p className='bottom-last'></p>
                </Box>
                <p className='top-button' onClick={handleScrollTop}>TOP</p>
            </Box>
        </>
    );
};

export default MainLayoutPage;
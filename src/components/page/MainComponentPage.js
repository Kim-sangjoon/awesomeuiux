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
  Stack,
  Checkbox,
  FormGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
  TextField
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
    Stack,
    Checkbox,
    FormGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Radio,
    RadioGroup,
    InputLabel,
    MenuItem,
    FormHelperText,
    Select,
    TextField
};
const leftComponentBox = {border: '1px solid #ddd', boxShadow: 'none', height: '400px', overflowY: 'auto', display:'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}
const rightCodeBox = {border: '1px solid #ddd', boxShadow: 'none', height: '400px', backgroundColor: 'rgb(29, 31, 33)', overflowY: 'auto', textAlign: 'left'}
const code01=` <Box sx={{ '& button': { m: 1 } }}>
    <div>
    <Button size="small">Small</Button>
    <Button size="medium">Medium</Button>
    <Button size="large">Large</Button>
    </div>
    <div>
    <Button variant="outlined" size="small">
        Small
    </Button>
    <Button variant="outlined" size="medium">
        Medium
    </Button>
    <Button variant="outlined" size="large">
        Large
    </Button>
    </div>
    <div>
    <Button variant="contained" size="small">
        Small
    </Button>
    <Button variant="contained" size="medium">
        Medium
    </Button>
    <Button variant="contained" size="large">
        Large
    </Button>
    </div>
</Box>
`;
const code02=`<Box sx={{display: 'flex', justifyContent: 'center'}}>
    <FormGroup>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
        <FormControlLabel required control={<Checkbox />} label="Required" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
    </FormGroup>
</Box>
`;
const code03=`<FormControl>
    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
    <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
    >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
</FormControl>
`;
const code04=`const Selectbox = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div>
        <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
        <InputLabel id="demo-simple-select-disabled-label">Age</InputLabel>
        <Select
            labelId="demo-simple-select-disabled-label"
            id="demo-simple-select-disabled"
            value={age}
            label="Age"
            onChange={handleChange}
        >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Disabled</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} error>
        <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
        <Select
            labelId="demo-simple-select-error-label"
            id="demo-simple-select-error"
            value={age}
            label="Age"
            onChange={handleChange}
            renderValue={value}
        >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Error</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-readonly-label">Age</InputLabel>
        <Select
            labelId="demo-simple-select-readonly-label"
            id="demo-simple-select-readonly"
            value={age}
            label="Age"
            onChange={handleChange}
            inputProps={{ readOnly: true }}
        >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Read only</FormHelperText>
        </FormControl>
        <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
        <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={age}
            label="Age *"
            onChange={handleChange}
        >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
        </FormControl>
        </div>
    )
}
`;
const code05 = `<Box
component="form"
sx={{
  '& .MuiTextField-root': { m: 1, width: '33ch' },
}}
noValidate
autoComplete="off"
>
    <div>
    <TextField
        label="Size"
        id="outlined-size-small"
        defaultValue="Small"
        size="small"
    />
    <TextField label="Size" id="outlined-size-normal" defaultValue="Normal" />
    </div>
    <div>
    <TextField
        label="Size"
        id="filled-size-small"
        defaultValue="Small"
        variant="filled"
        size="small"
    />
    <TextField
        label="Size"
        id="filled-size-normal"
        defaultValue="Normal"
        variant="filled"
    />
    </div>
    <div>
    <TextField
        label="Size"
        id="standard-size-small"
        defaultValue="Small"
        size="small"
        variant="standard"
    />
    <TextField
        label="Size"
        id="standard-size-normal"
        defaultValue="Normal"
        variant="standard"
    />
    </div>
</Box>
`;
const code06 = `<div>Coming soon</div>`;
const code07 = `<div>Coming soon</div>`;
const code08 = `<div>Coming soon</div>`;
const code09 = `<div>Coming soon</div>`;
const code10 = `<div>Coming soon</div>`;
const code11 = `<div>Coming soon</div>`;
const code12 = `<div>Coming soon</div>`;
const code13 = `<div>Coming soon</div>`;
const code14 = `<div>Coming soon</div>`;
const code15 = `<div>Coming soon</div>`;
const Selectbox = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div>
        <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
        <InputLabel id="demo-simple-select-disabled-label">Age</InputLabel>
        <Select
            labelId="demo-simple-select-disabled-label"
            id="demo-simple-select-disabled"
            value={age}
            label="Age"
            onChange={handleChange}
        >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Disabled</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} error>
        <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
        <Select
            labelId="demo-simple-select-error-label"
            id="demo-simple-select-error"
            value={age}
            label="Age"
            onChange={handleChange}
            renderValue={(value) => `⚠️  - ${value}`}
        >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Error</FormHelperText>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-readonly-label">Age</InputLabel>
        <Select
            labelId="demo-simple-select-readonly-label"
            id="demo-simple-select-readonly"
            value={age}
            label="Age"
            onChange={handleChange}
            inputProps={{ readOnly: true }}
        >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Read only</FormHelperText>
        </FormControl>
        <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
        <Select
            labelId="demo-simple-select-required-label"
            id="demo-simple-select-required"
            value={age}
            label="Age *"
            onChange={handleChange}
        >
            <MenuItem value="">
            <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
        </FormControl>
        </div>
    )
};

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
    const tab01 = 0;    // Button
    const tab02 = 526;  // Checkbox
    const tab03 = 1053; // Radio
    const tab04 = 1578; // Select
    const tab05 = 2092; // Text Field
    const tab06 = 2619; // List
    const tab07 = 3133; // Table
    const tab08 = 3659; // Tooltip
    const tab09 = 4185; // Alert
    const tab10 = 4699; // Dialog
    const tab11 = 5226; // Accordion
    const tab12 = 5739; // Pagination
    const tab13 = 6277; // Tabs
    const tab14 = 6790; // Modal
    const tab15 = 7318; // Date Pickers

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
        } else if (newTabValue === 4) {
            window.scrollTo({
                top: tab05 + 1,
                behavior: "smooth"
            });
        } else if (newTabValue === 5) {
            window.scrollTo({
                top: tab06 + 1,
                behavior: "smooth"
            });
        } else if (newTabValue === 6) {
            window.scrollTo({
                top: tab07 + 1,
                behavior: "smooth"
            });
        } else if (newTabValue === 7) {
            window.scrollTo({
                top: tab08 + 1,
                behavior: "smooth"
            });
        } else if (newTabValue === 8) {
            window.scrollTo({
                top: tab09 + 1,
                behavior: "smooth"
            });
        } else if (newTabValue === 9) {
            window.scrollTo({
                top: tab10 + 1,
                behavior: "smooth"
            });
        } else if (newTabValue === 10) {
            window.scrollTo({
                top: tab11 + 1,
                behavior: "smooth"
            });
        } else if (newTabValue === 11) {
            window.scrollTo({
                top: tab12 + 1,
                behavior: "smooth"
            });
        } else if (newTabValue === 12) {
            window.scrollTo({
                top: tab13 + 1,
                behavior: "smooth"
            });
        } else if (newTabValue === 13) {
            window.scrollTo({
                top: tab14 + 1,
                behavior: "smooth"
            });
        } else if (newTabValue === 14) {
            window.scrollTo({
                top: tab15 + 1,
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
            } else if(scValue > tab04 && scValue < tab05){
                setTabValue(3);
            } else if(scValue > tab05 && scValue < tab06){
                setTabValue(4);
            } else if(scValue > tab06 && scValue < tab07){
                setTabValue(5);
            } else if(scValue > tab07 && scValue < tab08){
                setTabValue(6);
            } else if(scValue > tab08 && scValue < tab09){
                setTabValue(7);
            } else if(scValue > tab09 && scValue < tab10){
                setTabValue(8);
            } else if(scValue > tab10 && scValue < tab11){
                setTabValue(9);
            } else if(scValue > tab11 && scValue < tab12){
                setTabValue(10);
            } else if(scValue > tab12 && scValue < tab13){
                setTabValue(11);
            } else if(scValue > tab13 && scValue < tab14){
                setTabValue(12);
            } else if(scValue > tab14 && scValue < tab15){
                setTabValue(13);
            } else if(scValue > tab15){
                setTabValue(14);
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
                        <h2>체크박스</h2>
                        <p className='contText'>체크박스 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code02} scope={scope}>
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
                                        <CopyButton onClick={handleToast} code={code02} />
                                    </Grid>
                                </LiveProvider>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='tab-item'>
                        <h2>라디오</h2>
                        <p className='contText'>라디오 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code03} scope={scope}>
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
                                        <CopyButton onClick={handleToast} code={code03} />
                                    </Grid>
                                </LiveProvider>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='tab-item'>
                        <h2>셀렉트</h2>
                        <p className='contText'>셀렉트 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code04} scope={scope}>
                                    <Grid item xs={12} md={6}>
                                        <Item sx={leftComponentBox}>
                                            {/* <LivePreview />
                                            <LiveError /> */}
                                            <Selectbox />
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12} md={6} sx={{position: 'relative'}}>
                                        <Item sx={rightCodeBox}>
                                            <LiveEditor disabled/>
                                        </Item>
                                        <CopyButton onClick={handleToast} code={code04} />
                                    </Grid>
                                </LiveProvider>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='tab-item'>
                        <h2>TextField</h2>
                        <p className='contText'>TextField 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code05} scope={scope}>
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
                                        <CopyButton onClick={handleToast} code={code05} />
                                    </Grid>
                                </LiveProvider>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='tab-item'>
                        <h2>LIST</h2>
                        <p className='contText'>LIST 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code06} scope={scope}>
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
                                        <CopyButton onClick={handleToast} code={code06} />
                                    </Grid>
                                </LiveProvider>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='tab-item'>
                        <h2>TABLE</h2>
                        <p className='contText'>TABLE 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code07} scope={scope}>
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
                                        <CopyButton onClick={handleToast} code={code07} />
                                    </Grid>
                                </LiveProvider>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='tab-item'>
                        <h2>ToolTip</h2>
                        <p className='contText'>ToolTip 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code08} scope={scope}>
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
                                        <CopyButton onClick={handleToast} code={code08} />
                                    </Grid>
                                </LiveProvider>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='tab-item'>
                        <h2>Alert</h2>
                        <p className='contText'>Alert 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code09} scope={scope}>
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
                                        <CopyButton onClick={handleToast} code={code09} />
                                    </Grid>
                                </LiveProvider>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='tab-item'>
                        <h2>Dialog</h2>
                        <p className='contText'>Dialog 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code10} scope={scope}>
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
                                        <CopyButton onClick={handleToast} code={code10} />
                                    </Grid>
                                </LiveProvider>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='tab-item'>
                        <h2>Accordion</h2>
                        <p className='contText'>Accordion 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code11} scope={scope}>
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
                                        <CopyButton onClick={handleToast} code={code11} />
                                    </Grid>
                                </LiveProvider>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='tab-item'>
                        <h2>Pagination</h2>
                        <p className='contText'>Pagination 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code12} scope={scope}>
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
                                        <CopyButton onClick={handleToast} code={code12} />
                                    </Grid>
                                </LiveProvider>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='tab-item'>
                        <h2>Tabs</h2>
                        <p className='contText'>Tabs 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code13} scope={scope}>
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
                                        <CopyButton onClick={handleToast} code={code13} />
                                    </Grid>
                                </LiveProvider>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='tab-item'>
                        <h2>Modal</h2>
                        <p className='contText'>Modal 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code14} scope={scope}>
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
                                        <CopyButton onClick={handleToast} code={code14} />
                                    </Grid>
                                </LiveProvider>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className='tab-item'>
                        <h2>Date Pickers</h2>
                        <p className='contText'>Date Pickers 컴포넌트</p>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <LiveProvider code={code15} scope={scope}>
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
                                        <CopyButton onClick={handleToast} code={code15} />
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
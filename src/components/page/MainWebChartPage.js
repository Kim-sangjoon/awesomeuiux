import React from 'react';
import { styled } from '@mui/material/styles';
import { 
  Box,
  Toolbar,
  Grid,
  Paper
} from '@mui/material';
import { PieChart, Pie, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import CopyButton from '../component/CopyButton';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const leftComponentBox = {border: '1px solid #ddd', boxShadow: 'none', height: '400px', overflowY: 'auto', display:'flex', justifyContent: 'start', alignItems: 'start', textAlign: 'center'}
const rightCodeBox = {border: '1px solid #ddd', boxShadow: 'none', height: '400px', backgroundColor: 'rgb(29, 31, 33)', overflowY: 'auto', textAlign: 'left'}

// const data01 = [
//     { name: "Group A", value: 400 },
//     { name: "Group B", value: 300 },
//     { name: "Group C", value: 300 },
//     { name: "Group D", value: 200 }
// ];
// const data02 = [
//     { name: "A1", value: 100 },
//     { name: "A2", value: 300 },
//     { name: "B1", value: 100 },
//     { name: "B2", value: 80 },
//     { name: "B3", value: 40 },
//     { name: "B4", value: 30 },
//     { name: "B5", value: 50 },
//     { name: "C1", value: 100 },
//     { name: "C2", value: 200 },
//     { name: "D1", value: 150 },
//     { name: "D2", value: 50 }
// ];
const scope = { 
    PieChart, 
    Pie,
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Box,
    Toolbar,
    Grid,
    Paper,
};
const code01 = `<PieChart width={300} height={300}>
<Pie
    data={[
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 }
    ]}
    dataKey="value"
    cx={150}
    cy={150}
    outerRadius={60}
    fill="#8884d8"
/>
<Pie
    data={[
        { name: "A1", value: 100 },
        { name: "A2", value: 300 },
        { name: "B1", value: 100 },
        { name: "B2", value: 80 },
        { name: "B3", value: 40 },
        { name: "B4", value: 30 },
        { name: "B5", value: 50 },
        { name: "C1", value: 100 },
        { name: "C2", value: 200 },
        { name: "D1", value: 150 },
        { name: "D2", value: 50 }
    ]}
    dataKey="value"
    cx={150}
    cy={150}
    innerRadius={70}
    outerRadius={90}
    fill="#82ca9d"
    label
/>
</PieChart>`;

const code02 = `<BarChart width={400} height={300} data={[
    { name: "Jan", 월매출: 4000, 분기매출: 2400 },
    { name: "Feb", 월매출: 3000, 분기매출: 1398 },
    { name: "Mar", 월매출: 2000, 분기매출: 9800 },
    { name: "Apr", 월매출: 2780, 분기매출: 3908 },
    { name: "May", 월매출: 1890, 분기매출: 4800 },
    { name: "Jun", 월매출: 2390, 분기매출: 3800 },
]}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="월매출" fill="#8884d8" />
    <Bar dataKey="분기매출" fill="#82ca9d" />
</BarChart>`;

const code03 = `<LineChart width={400} height={300} data={[
    { name: "Jan", 방문자: 4000, 클릭수: 2400 },
    { name: "Feb", 방문자: 3000, 클릭수: 1398 },
    { name: "Mar", 방문자: 2000, 클릭수: 9800 },
    { name: "Apr", 방문자: 2780, 클릭수: 3908 },
    { name: "May", 방문자: 1890, 클릭수: 4800 },
    { name: "Jun", 방문자: 2390, 클릭수: 3800 },
]}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="방문자" stroke="#8884d8" />
    <Line type="monotone" dataKey="클릭수" stroke="#82ca9d" />
</LineChart>`;

// const MyPieChart = () => {
//     return(
//         <PieChart width={300} height={300}>
//             <Pie
//                 data={data01}
//                 dataKey="value"
//                 cx={150}
//                 cy={150}
//                 outerRadius={60}
//                 fill="#8884d8"
//             />
//             <Pie
//                 data={data02}
//                 dataKey="value"
//                 cx={150}
//                 cy={150}
//                 innerRadius={70}
//                 outerRadius={90}
//                 fill="#82ca9d"
//                 label
//             />
//         </PieChart>
// )}

const MainWebChartPage = (props) => {
    React.useEffect(()=> {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    },[])
    const [toast, setToast] = React.useState(false);
    const handleToast = () => {
        setToast(!toast)
    }

    function handleScrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <>
            <Box className='contentboxwrap'>
                <Toolbar />
                <Box className="tab-item" >
                    <h1>웹차트</h1>
                    <h2>파이차트</h2>
                    <p className='contText'>차트 컴포넌트</p>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <LiveProvider code={code01} scope={scope}>
                                <Grid item xs={12} md={6}>
                                    <Item sx={leftComponentBox}>
                                        <LivePreview />
                                        <LiveError />
                                        {/* <MyPieChart /> */}
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
                <Box className="tab-item" >
                    <h2>바차트</h2>
                    <p className='contText'>차트 컴포넌트</p>
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
                <Box className="tab-item" >
                    <h2>라인차트</h2>
                    <p className='contText'>차트 컴포넌트</p>
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
                <Box className='bottom-last'></Box>
                <Box className='top-button' onClick={handleScrollTop}>TOP</Box>
            </Box>
        </>
    );
};

export default MainWebChartPage;
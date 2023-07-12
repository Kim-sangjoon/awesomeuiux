import React from 'react';
import { styled } from '@mui/material/styles';
import { 
  Box,
  Toolbar,
  Grid,
  Paper
} from '@mui/material';
import { PieChart, Pie } from "recharts";
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
                <Box>
                <h1>웹차트</h1>
                <h2>2Depth</h2>
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
                    <Box className='bottom-last'></Box>
                </Box>
                <Box className='top-button' onClick={handleScrollTop}>TOP</Box>
            </Box>
        </>
    );
};

export default MainWebChartPage;
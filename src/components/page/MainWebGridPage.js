import React from 'react';
import { styled } from '@mui/material/styles';
import { 
  Box,
  Toolbar,
  Grid,
  Paper
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import CopyButton from '../component/CopyButton';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const leftComponentBox = {border: '1px solid #ddd', boxShadow: 'none', height: '400px', overflowY: 'auto', display:'flex', justifyContent: 'start', alignItems: 'start', textAlign: 'center'}
const rightCodeBox = {border: '1px solid #ddd', boxShadow: 'none', height: '400px', backgroundColor: 'rgb(29, 31, 33)', overflowY: 'auto', textAlign: 'left'}
// const rows = [
//     { id: 1, col1: 'Hello', col2: 'World' },
//     { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
//     { id: 3, col1: 'MUI', col2: 'is Amazing' },
//   ];
  
// const columns = [
//     { field: 'col1', headerName: 'Column 1', width: 150 },
//     { field: 'col2', headerName: 'Column 2', width: 150 },
// ];

const scope = { 
    Box,
    Toolbar,
    Grid,
    Paper,
    Item,
    DataGrid
};

const code01 =`<Box>
<DataGrid
    rows={[
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'DataGrid', col2: 'is Awesome' },
        { id: 3, col1: 'Awesome UI', col2: 'is Amazing' },
        { id: 4, col1: 'Kim Sangjoon', col2: 'is Good' },
        { id: 5, col1: 'AAA', col2: 'is BBB' },
        { id: 6, col1: 'BBB', col2: 'is CCC' },
        { id: 7, col1: 'CCC', col2: 'is DDD' },
        { id: 8, col1: 'DDD', col2: 'is EEE' },
        { id: 9, col1: 'EEE', col2: 'is FFF' },
        { id: 10, col1: 'FFF', col2: 'is GGG' },
    ]}                 
    columns={[
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 }
    ]}
/>
</Box>`;



const MainWebGridPage = (props) => {
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
                <h1>Data-Grid</h1>
                <h2>2Depth</h2>
                <p className='contText'>그리드 컴포넌트</p>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <LiveProvider code={code01} scope={scope}>
                                <Grid item xs={12} md={6}>
                                    <Item sx={leftComponentBox}>
                                        {/* <DataGrid rows={rows} columns={columns} /> */}
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
                    <Box className='bottom-last'></Box>
                </Box>
                <Box className='top-button' onClick={handleScrollTop}>TOP</Box>
            </Box>
        </>
    );
};

export default MainWebGridPage;
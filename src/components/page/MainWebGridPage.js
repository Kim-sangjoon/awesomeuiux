import React from 'react';
import { styled } from '@mui/material/styles';
import { 
  Box,
  Toolbar,
  Grid,
  Paper
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];
  
const columns = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
];

const MainWebGridPage = (props) => {
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
                            <Grid item xs={12} md={6}>
                                <Item sx={{border: '1px solid #ddd', boxShadow: 'none'}}>
                                    <div style={{ height: 300, width: '100%' }}>
                                        <DataGrid rows={rows} columns={columns} />
                                    </div>
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
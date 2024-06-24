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
  TextField,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
  ClickAwayListener,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Pagination,
  Modal
} from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import CopyButton from '../component/CopyButton';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
    TextField,
    AdapterDayjs,
    LocalizationProvider,
    DatePicker,
    Divider,
    InboxIcon,
    DraftsIcon,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    createData,
    IconButton,
    Tooltip,
    ClickAwayListener,
    DeleteIcon,
    Alert,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    ExpandMoreIcon,
    Pagination,
    TabContext,
    TabList,
    TabPanel,
    Modal
};
const leftComponentBox = {border: '1px solid #ddd', boxShadow: 'none', height: '400px', overflowY: 'auto', display:'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', backgroundColor: 'rgb(243, 246, 249)'}
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
const code02=`<Box 
sx={{
display: 'flex', 
justifyContent: 'center'}}
>
    <FormGroup>
        <FormControlLabel 
        control={<Checkbox defaultChecked />} 
        label="Label" 
        />
        <FormControlLabel 
        required 
        control={<Checkbox />} 
        label="Required" 
        />
        <FormControlLabel 
        disabled 
        control={<Checkbox />} 
        label="Disabled" 
        />
    </FormGroup>
</Box>
`;
const code03=`<FormControl>
<FormLabel 
id="demo-radio-buttons-group-label"
>
Gender
</FormLabel>
    <RadioGroup
    aria-labelledby=
    "demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
    >
        <FormControlLabel 
        value="female" 
        control={<Radio />} 
        label="Female" 
        />
        <FormControlLabel 
        value="male" 
        control={<Radio />} 
        label="Male" 
        />
        <FormControlLabel 
        value="other" 
        control={<Radio />} 
        label="Other" 
        />
    </RadioGroup>
</FormControl>
`;
const code04=`const Selectbox = () => {
const [
    age, 
    setAge
] = React.useState('');

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
  '& .MuiTextField-root': { 
    m: 1, width: '33ch' 
},
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
    <TextField label="Size" 
    id="outlined-size-normal" 
    defaultValue="Normal" />
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
const code06 = `<Box 
sx={{ 
    width: '100%', 
    maxWidth: 300, 
    bgcolor: 'background.paper',
    display: 'inline-block'
}}>
<nav aria-label="main mailbox folders">
<List>
    <ListItem disablePadding>
        <ListItemButton>
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
        </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
        <ListItemButton>
            <ListItemIcon>
                <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
        </ListItemButton>
    </ListItem>
</List>
</nav>
<Divider />
<nav 
aria-label="secondary 
mailbox 
folders">
    <List>
    <ListItem disablePadding>
        <ListItemButton>
            <ListItemText primary="Trash" />
        </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
        <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Spam" />
        </ListItemButton>
    </ListItem>
</List>
</nav>
</Box>`;
const code07 = `<TableContainer 
component={Paper}>
<Table 
sx={{ minWidth: 650 }} 
aria-label="simple table"
>
<TableHead>
    <TableRow>
        <TableCell>Dessert (100g serving)</TableCell>
        <TableCell align="right">Calories</TableCell>
        <TableCell align="right">Fat&nbsp;(g)</TableCell>
        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
        <TableCell align="right">Protein&nbsp;(g)</TableCell>
    </TableRow>
</TableHead>
<TableBody>
    {rows.map((row) => (
        <TableRow
        key={row.name}
        sx={{ '&:last-child td, 
        &:last-child th': { border: 0 } 
        }}>
            <TableCell component="th" scope="row">{row.name}</TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
        </TableRow>
    ))}
</TableBody>
</Table>
</TableContainer>`;
const code08 = `<div>
<Grid container justifyContent="center">
<Grid item>
    <Tooltip disableFocusListener title="Add">
        <Button>Hover or touch</Button>
    </Tooltip>
</Grid>
<Grid item>
    <Tooltip disableHoverListener title="Add">
        <Button>Focus or touch</Button>
    </Tooltip>
</Grid>
<Grid item>
    <Tooltip 
    disableFocusListener 
    disableTouchListener title="Add">
        <Button>Hover</Button>
    </Tooltip>
</Grid>
<Grid item>
    <ClickAwayListener 
    onClickAway={handleTooltipClose}>
        <div>
            <Tooltip
            PopperProps={{
            disablePortal: true,
            }}
            onClose={handleTooltipClose}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title="Add"
            >
                <Button 
                onClick={handleTooltipOpen}>
                Click</Button>
            </Tooltip>
        </div>
    </ClickAwayListener>
</Grid>
</Grid>
</div>
`;
const code09 = `<Stack 
sx={{ width: '100%' }} 
spacing={2}>
<Alert severity="error">
This is an error alert — check it out!
</Alert>
<Alert severity="warning">
This is a warning alert — check it out!
</Alert>
<Alert severity="info">
This is an info alert — check it out!
</Alert>
<Alert severity="success">
This is a success alert — check it out!
</Alert>
</Stack>`;
const code10 = `
<div>
<Button 
variant="outlined" 
onClick={handleClickOpen}>
Open alert dialog
</Button>
<Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
>
<DialogTitle id="alert-dialog-title">
    {"Use Google's location service?"}
</DialogTitle>
<DialogContent>
    <DialogContentText id="alert-dialog-description">
        Let Google help apps determine location. 
        This means sending anonymous location data to Google, 
        even when no apps are running.
    </DialogContentText>
</DialogContent>
<DialogActions>
    <Button onClick={handleClose}>Disagree</Button>
    <Button onClick={handleClose} autoFocus>Agree</Button>
</DialogActions>
</Dialog>
</div>
);
}`;
const code11 = `<div style={{textAlign: 'left'}}>
<Accordion>
<AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1a-content"
    id="panel1a-header"
>
    <Typography>Accordion 1</Typography>
</AccordionSummary>
<AccordionDetails>
    <Typography>
        Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. 
        Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.
    </Typography>
</AccordionDetails>
</Accordion>
<Accordion>
<AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel2a-content"
    id="panel2a-header"
>
<Typography>Accordion 2</Typography>
</AccordionSummary>
<AccordionDetails>
<Typography>
    Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit. 
    Suspendissemalesuada lacus ex, sit amet blandit leo lobortis eget.
</Typography>
</AccordionDetails>
</Accordion>
<Accordion disabled>
<AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel3a-content"
    id="panel3a-header"
>
    <Typography>
        Disabled Accordion
    </Typography>
</AccordionSummary>
</Accordion>
</div>`;
const code12 = `<Stack 
spacing={2} 
sx={{alignItems: 'center'}}>
    <Pagination count={6} />
    <Pagination count={6} color="primary" />
    <Pagination count={6} color="secondary" />
    <Pagination count={6} disabled />
</Stack>`;
const code13 = `<Box 
sx={{ 
    width: '100%', 
    typography: 'body1' 
}}>
<TabContext value={value}>
    <Box sx={{ 
        borderBottom: 1, 
        borderColor: 'divider' 
    }}>
        <TabList 
        onChange={handleChange} 
        aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
        </TabList>
    </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
</TabContext>
</Box>`;
const code14 = `<Button 
onClick={handleOpen}>Open modal</Button>
<Modal
    open={open}
    onClose={handleClose}
    aria-labelledby=
    "modal-modal-title"
    aria-describedby=
    "modal-modal-description"
>
<Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
    </Typography>
    <Typography id="modal-modal-description" 
        sx={{ mt: 2 }}>
            Duis mollis, 
            est non commodo luctus, 
            nisi erat porttitor ligula.
    </Typography>
</Box>
</Modal>`;
const code15 = `<LocalizationProvider 
dateAdapter={AdapterDayjs}>
<DatePicker />
</LocalizationProvider>`;
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

function createData(name, calories, fat) {
    return { name, calories, fat };
}
  
const rows = [
createData('Frozen yoghurt', 159, 6.0),
createData('Eclair', 262, 16.0),
createData('Cupcake', 305, 3.7),
createData('Gingerbread', 356, 16.0),
];

const BasicTable = () => {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }


const AlertDialog = () => {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const LabTabs = () => {
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    '@media(max-width: 600px)': {
        width: 'calc(100vw - 20px)'
    }
  };

const BasicModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

const TriggersTooltips = () => {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item>
          <Tooltip disableFocusListener title="Add">
            <Button>Hover or touch</Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip disableHoverListener title="Add">
            <Button>Focus or touch</Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip disableFocusListener disableTouchListener title="Add">
            <Button>Hover</Button>
          </Tooltip>
        </Grid>
        <Grid item>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title="Add"
              >
                <Button onClick={handleTooltipOpen}>Click</Button>
              </Tooltip>
            </div>
          </ClickAwayListener>
        </Grid>
      </Grid>
    </div>
  );
}

const MainComponentPage = (props) => {
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
    const [TabValue, setTabValue] = React.useState(0); //탭컨트롤러 상태 0,1,2,3
    const screenWidth = document.body.offsetWidth;
    console.log('가로사이즈',screenWidth);
    const sFix = 90;
    const tab01 = 0; // Button
    const tab02 = screenWidth > 900 ? 526 : 939;    // Checkbox
    const tab03 = screenWidth > 900 ? 1053 : 1878;  // Radio
    const tab04 = screenWidth > 900 ? 1578 : 2808;  // Select
    const tab05 = screenWidth > 900 ? 2092 : 3768;  // Text Field
    const tab06 = screenWidth > 900 ? 2619 : 4708;  // List
    const tab07 = screenWidth > 900 ? 3133 : 5633;  // Table
    const tab08 = screenWidth > 900 ? 3659 : 6572;  // Tooltip
    const tab09 = screenWidth > 900 ? 4185 : 7511;  // Alert
    const tab10 = screenWidth > 900 ? 4699 : 8450;  // Dialog
    const tab11 = screenWidth > 900 ? 5226 : 9388;  // Accordion
    const tab12 = screenWidth > 900 ? 5739 : 10328; // Pagination
    const tab13 = screenWidth > 900 ? 6277 : 11267; // Tabs
    const tab14 = screenWidth > 900 ? 6790 : 12205; // Modal
    const tab15 = screenWidth > 900 ? 7318 : 13144; // Date Pickers

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
        // eslint-disable-next-line
    },[])

    //스크롤 top 컨트롤
    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    const pageData = {
        "pageTitle":"컴포넌트",
        "pageItems":[
            {"index":1,"tabLabels":"Button","itemTitle":"버튼","itemContText":"버튼 컴포넌트","codeName":code01,"liveCode":true, "useComponent":null},
            {"index":2,"tabLabels":"Checkbox","itemTitle":"체크박스","itemContText":"체크박스 컴포넌트","codeName":code02,"liveCode":true, "useComponent":null},
            {"index":3,"tabLabels":"Radio Group","itemTitle":"라디오","itemContText":"라디오 컴포넌트","codeName":code03,"liveCode":true, "useComponent":null},
            {"index":4,"tabLabels":"Select","itemTitle":"셀렉트","itemContText":"셀렉트 컴포넌트","codeName":code04,"liveCode":false, "useComponent":<Selectbox />},
            {"index":5,"tabLabels":"Text Field","itemTitle":"TextField","itemContText":"TextField 컴포넌트","codeName":code05,"liveCode":true, "useComponent":null},
            {"index":6,"tabLabels":"List","itemTitle":"LIST","itemContText":"LIST 컴포넌트","codeName":code06,"liveCode":true, "useComponent":null},
            {"index":7,"tabLabels":"Table","itemTitle":"TABLE","itemContText":"TABLE 컴포넌트","codeName":code07,"liveCode":false, "useComponent":<BasicTable />},
            {"index":8,"tabLabels":"Tooltip","itemTitle":"ToolTip","itemContText":"ToolTip 컴포넌트","codeName":code08,"liveCode":false, "useComponent":<TriggersTooltips />},
            {"index":9,"tabLabels":"Alert","itemTitle":"Alert","itemContText":"Alert 컴포넌트","codeName":code09,"liveCode":true, "useComponent":null},
            {"index":10,"tabLabels":"Dialog","itemTitle":"Dialog","itemContText":"Dialog 컴포넌트","codeName":code10,"liveCode":false, "useComponent":<AlertDialog />},
            {"index":11,"tabLabels":"Accordion","itemTitle":"Accordion","itemContText":"Accordion 컴포넌트","codeName":code11,"liveCode":true, "useComponent":null},
            {"index":12,"tabLabels":"Pagination","itemTitle":"Pagination","itemContText":"Pagination 컴포넌트","codeName":code12,"liveCode":true, "useComponent":null},
            {"index":13,"tabLabels":"Tabs","itemTitle":"Tabs","itemContText":"Tabs 컴포넌트","codeName":code13,"liveCode":false, "useComponent":<LabTabs />},
            {"index":14,"tabLabels":"Modal","itemTitle":"Modal","itemContText":"Modal 컴포넌트","codeName":code14,"liveCode":false, "useComponent":<BasicModal />},
            {"index":15,"tabLabels":"Date Pickers","itemTitle":"Date Pickers","itemContText":"Date Pickers 컴포넌트","codeName":code15,"liveCode":true, "useComponent":null}
        ]
    }

    return (
        <>
            <Box className='contentboxwrap'>
                <Toolbar />
                <Box>
                    <h1>{pageData.pageTitle}</h1>
                    <Tabs
                        className='contentTab'
                        ref={tabRef}
                        value={TabValue}
                        variant="scrollable"
                        scrollButtons="auto"
                        onChange={handleTabChange}
                        sx={{backgroundColor: 'rgb(255 255 255 / 60%)'}}
                    >
                        {pageData.pageItems.map(items => <Tab key={items.index} label={items.tabLabels} />)}
                    </Tabs>
                    {pageData.pageItems.map(items => 
                        <Box className='tab-item' key={items.index}>
                            <h2>{items.itemTitle}</h2>
                            <p className='contText'>{items.itemContText}</p>
                            <Box sx={{ flexGrow: 1 }}>
                                <Grid container spacing={2}>
                                    <LiveProvider code={items.codeName} scope={scope}>
                                        <Grid item xs={12} md={6}>
                                            <Item sx={leftComponentBox}>
                                                {items.liveCode ? <LivePreview /> : ""}
                                                {items.liveCode ? <LiveError /> : ""}
                                                {items.liveCode ? "" : items.useComponent}
                                            </Item>
                                        </Grid>
                                        <Grid item xs={12} md={6} sx={{position: 'relative'}}>
                                            <Item sx={{...rightCodeBox, backgroundColor: items.liveCode ? 'rgb(29, 31, 33)' : '#505050'}}>
                                                {items.liveCode ? <LiveEditor /> : <LiveEditor disabled />}
                                            </Item>
                                            <CopyButton onClick={handleToast} code={items.codeName} />
                                        </Grid>
                                    </LiveProvider>
                                </Grid>
                            </Box>
                        </Box>
                    )}
                    <Box className='bottom-last'></Box>
                </Box>
                <Box className='top-button' onClick={handleScrollTop}>TOP</Box>
            </Box>
        </>
    );
};

export default MainComponentPage;
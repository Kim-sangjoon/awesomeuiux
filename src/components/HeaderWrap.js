import React from 'react';
// import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import {
  Toolbar,
  IconButton,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  ListItem,
  List,
//   FormControl,
//   Select,
//   OutlinedInput,
//   MenuItem,
  Box,
  Drawer,
  Typography,
  Avatar,
  Tooltip,
  Modal
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
// import SettingsIcon from '@mui/icons-material/Settings';
import { MenuData } from '../MenuData';
import { theme } from '../css/SampleAppStyle';
import logoImg from "../images/logo-awesome.svg";

const lnbInfo = MenuData;
// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
// PaperProps: {
//     style: {
//     maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//     width: 120,
//     },
// },
// };
// const langNames = [
// '한국어',
// 'English'
// ];


// function getStyles(name, styleName, theme) {
// return {
//     fontWeight:
//     styleName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
// };
// }
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '5px',
    '@media(max-width: 600px)': {
        width: 'calc(100vw - 20px)'
    }
  };

const HeaderWrap = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const theme = useTheme();
    // const [languageName, setLanguageName] = React.useState([]);
    const [sideMenu, setSideMenu] = React.useState({left: false});
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setSideMenu({ ...sideMenu, [anchor]: open });
      };
    
    // 다국어 select
    // const languageHandleChange = (event) => {
    //   const {
    //     target: { value },
    //   } = event;
    //   setLanguageName(
    //     // On autofill we get a stringified value.
    //     typeof value === 'string' ? value.split(',') : value,
    //   );
    // };

    return (
        <>
            <Toolbar sx={{justifyContent: 'end', backdropFilter: 'blur(8px)', backgroundColor: 'rgb(255 255 255 / 60%)'}}>
                <Box sx={{
                    display: 'none', 
                    '@media(max-width: 1200px)': {
                        display: 'flex',
                        flex: 'none',
                }}}>
                    <IconButton
                        size='large'
                        edge='start'
                        aria-label='menu'
                        onClick={toggleDrawer('left', true)}
                    >                    
                        <MenuIcon />
                    </IconButton>
                </Box>
                <Drawer
                    anchor={'left'}
                    open={sideMenu['left']}
                    onClose={toggleDrawer('left', false)}
                    sx={{'& .MuiDrawer-paper': {
                        width: 200,
                        boxSizing: 'border-box',
                        paddingTop: 1,
                    }
                    }}
                >
                    <Box sx={{marginTop:'8px', marginLeft: '25px'}}><img src={logoImg} alt='logo' width={150} height='auto' /></Box>
                    <List sx={{p:0}}>
                        {lnbInfo.map((item, index) => (
                            <Link key={index} to={item.link}>
                                <ListItem sx={{p:0}} onClick={toggleDrawer('left', false)}>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {item.iconName}
                                        </ListItemIcon>
                                        <ListItemText primary={item.menuNameCode} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                </Drawer>
                <Box sx={{
                    display: 'none',
                    '@media(max-width: 1200px)': {
                        display: 'flex',
                        flex: 1,
                        paddingLeft: '10px'
                }}}>
                    <Link to='/'>
                        <Box sx={{marginTop:'8px'}}><img src={logoImg} alt='logo' width={150} height='auto' /></Box>
                    </Link>
                </Box>
                <Box sx={{display:'flex', alignItems: 'center', gap: '8px', color: theme.palette.text.secondary}}>
                    <Tooltip title='Go to github' arrow>
                        <a href="https://github.com/Kim-sangjoon/awesomeuiux" target="_blank" rel="noopener noreferrer">
                            <Avatar sx={{border: '1px solid #ddd'}} alt="Kim Sangjoon" src="https://avatars.githubusercontent.com/u/33441969?s=400&u=948d9cd75f6f06bd96c1e8cceffd3fa299147bdc&v=4" />
                        </a>
                    </Tooltip>
                    <Typography sx={{fontSize: '18px', '@media(max-width: 600px)': {display: 'none'}}} component='span'>Kim Sangjoon</Typography>
                    <Tooltip title='Contact information' arrow>
                        <IconButton sx={{border: '1px solid #ddd'}} onClick={handleOpen}>
                            <EmailIcon />
                        </IconButton>
                    </Tooltip>
                    {/*<IconButton sx={{border: '1px solid #ddd'}}>
                        <SettingsIcon />
                        </IconButton> */}
                </Box>
                {/* <FormControl sx={{ m: 0, width: 120}} size='small'>
                    <Select
                        displayEmpty
                        value={languageName}
                        onChange={languageHandleChange}
                        input={<OutlinedInput />}
                        renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <em>언어선택</em>;
                        }
                        return selected.join(', ');
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem disabled value="">
                        <em>언어선택</em>
                        </MenuItem>
                        {langNames.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, languageName, theme)}
                        >
                            {name}
                        </MenuItem>
                        ))}
                    </Select>
                </FormControl> */}
            </Toolbar>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h5" component="h2">
                    Contact information
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Email Address : sang1009@naver.com
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Mobile Number : +82.10.3320.7509
                </Typography>
                </Box>
            </Modal>
        </>
    );
};

export default HeaderWrap;
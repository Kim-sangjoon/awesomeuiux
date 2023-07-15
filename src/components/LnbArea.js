import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Box,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { MenuData } from "../MenuData";
import logoImg from "../images/logo-awesome.svg";


const LnbArea = (props) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const lnbInfo = MenuData;

  return (
    <>
      <Toolbar sx={{justifyContent: 'center'}}>
        <Box>
            <Link to='/'>
              <Box sx={{marginTop:'8px'}}><img src={logoImg} alt='logo' width={150} height='auto' /></Box>
            </Link>
        </Box>
      </Toolbar>
      <List sx={{p:0}}>
        {lnbInfo.map((item, index) => (
          <Link key={index} to={item.link}>
            <ListItem sx={{p:0}} selected={selectedIndex === item.selIndex} onClick={(event) => handleListItemClick(event, item.eventNum)}>
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
    </>
  );
};

export default LnbArea;
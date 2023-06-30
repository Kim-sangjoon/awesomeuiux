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
            <h1 className='logo'>LOGO</h1>
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
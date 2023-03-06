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
import DashboardIcon from '@mui/icons-material/Dashboard';
import AppsIcon from '@mui/icons-material/Apps';
import TableViewIcon from '@mui/icons-material/TableView';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CodeIcon from '@mui/icons-material/Code';
import ChatIcon from '@mui/icons-material/Chat';


const LnbArea = (props) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <Toolbar sx={{justifyContent: 'center'}}>
        <Box>
            <h1 className='logo'>SAMPLE APP</h1>
        </Box>
      </Toolbar>
      <List sx={{p:0}}>
        <Link to='/'>
          <ListItem sx={{p:0}} selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 0)}>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary='레이아웃' />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to='/component'>
          <ListItem sx={{p:0}} selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 1)}>
            <ListItemButton>
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <ListItemText primary='컴포넌트' />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to='/webgrid'>
          <ListItem sx={{p:0}} selected={selectedIndex === 2} onClick={(event) => handleListItemClick(event, 2)}>
            <ListItemButton>
              <ListItemIcon>
                <TableViewIcon />
              </ListItemIcon>
              <ListItemText primary='웹그리드' />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to='/webchart'>
          <ListItem sx={{p:0}} selected={selectedIndex === 3} onClick={(event) => handleListItemClick(event, 3)}>
            <ListItemButton>
              <ListItemIcon>
                <AnalyticsIcon />
              </ListItemIcon>
              <ListItemText primary='웹차트' />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to='/commoncode'>
          <ListItem sx={{p:0}} selected={selectedIndex === 4} onClick={(event) => handleListItemClick(event, 4)}>
            <ListItemButton>
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              <ListItemText primary='공통코드' />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to='/message'>
          <ListItem sx={{p:0}} selected={selectedIndex === 5} onClick={(event) => handleListItemClick(event, 5)}>
            <ListItemButton>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary='메시지' />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </>
  );
};

export default LnbArea;
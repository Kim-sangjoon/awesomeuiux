import DashboardIcon from '@mui/icons-material/Dashboard';
import AppsIcon from '@mui/icons-material/Apps';
import TableViewIcon from '@mui/icons-material/TableView';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CodeIcon from '@mui/icons-material/Code';
// import ChatIcon from '@mui/icons-material/Chat';
import ApiIcon from '@mui/icons-material/Api';

export const MenuData = [
  {
    "link":"/layout",
    "selIndex":0,
    "eventNum":0,
    "iconName":<DashboardIcon />,
    "menuNameCode":"레이아웃",
  },
  {
    "link":"/component",
    "selIndex":1,
    "eventNum":1,
    "iconName":<AppsIcon />,
    "menuNameCode":"컴포넌트",
  },
  {
    "link":"/webgrid",
    "selIndex":2,
    "eventNum":2,
    "iconName":<TableViewIcon />,
    "menuNameCode":"웹그리드",
  },
  {
    "link":"/webchart",
    "selIndex":3,
    "eventNum":3,
    "iconName":<AnalyticsIcon />,
    "menuNameCode":"웹차트",
  },
  {
    "link":"/commoncode",
    "selIndex":4,
    "eventNum":4,
    "iconName":<CodeIcon />,
    "menuNameCode":"공통코드",
  },
  {
    "link":"/api",
    "selIndex":5,
    "eventNum":5,
    "iconName":<ApiIcon />,
    "menuNameCode":"API",
  },
];
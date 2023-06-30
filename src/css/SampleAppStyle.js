import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          .sampleApp * {
              font-family: 'Noto Sans KR', sans-serif;
          }
          .sampleApp .MuiTypography-root{font-family: 'Noto Sans KR', sans-serif;}
          .sampleApp .css-cveggr-MuiListItemIcon-root{min-width: 40px; margin-left: 12px;}
          .sampleApp h1.logo{
            font-size: 1.5rem;
            color: #1490ef;
            margin: 0;
            letter-spacing: -.85px;
          }
          .sampleApp .contentboxwrap{flex-grow: 1; background-color: #fff; padding: 24px;}
          .sampleApp .contText{margin-bottom: 12px}
          .sampleApp a{text-decoration: none; color: #666;}
          .sampleApp a .MuiTypography-root{font-weight: normal}
          .sampleApp .contentTab{margin-bottom: 20px; margin-top: 20px;}
          .sampleApp .contentTab.fixed{position: fixed; top: 45px; left: 200px; width: 100%; z-index: 1; backdrop-filter: blur(8px); border-bottom: 1px solid #dbdbdb;}
          .sampleApp .button-sample > button + button{margin-left: 10px;}
          .sampleApp .top-button{display: flex; justify-content: center; align-items: center; position: fixed; bottom: 20px; right: 20px; width: 50px; height: 50px; background: #1490ef; color: #fff; border-radius: 50px; cursor: pointer;}
          .sampleApp .tab-item{}
          .sampleApp .tab-item + .tab-item{margin-top: 50px;}
          .sampleApp .bottom-last{height: 200px;}
          .sampleApp .MuiPaper-root > div{width: 100%;}
          .sampleApp h1,
          .sampleApp h2{color: #919191;}
          .sampleApp .fc-red{color: #ff6233;}
          .sampleApp .page-loading{width: 60px !important; height: 60px !important}

          
          @media (max-width: 960px) {
            // body{background: red;}
          }
        `,
      },
    },
  });

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
          
          @media (max-width: 960px) {
            // body{background: red;}
          }
        `,
      },
    },
  });

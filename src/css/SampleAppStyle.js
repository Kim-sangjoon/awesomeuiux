import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light'
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: "\"Noto Sans KR\", sans-serif",
    inherit: 'inherit',
  },
  textfield: {
    htmlFontSize: 12
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html,body{touch-action: pan-y}
        .sampleApp * {
            font-family: 'Noto Sans KR', sans-serif;
        }
        *::-webkit-scrollbar{width: 8px; height: 8px;}
        *::-webkit-scrollbar-thumb{height: 30%; background: #999; border-radius: 8px}
        *::-webkit-scrollbar-track{background: rgba(0,0,0,0.2); border-radius: 8px}
        .sampleApp .MuiTypography-root{font-family: 'Noto Sans KR', sans-serif;}
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
        .sampleApp .contentTab{margin-bottom: 20px; margin-top: 20px; width: calc(100vw - 300px)}
        .sampleApp .contentTab.fixed{position: fixed; top: 45px; left: 200px; width: 100%; z-index: 2; backdrop-filter: blur(8px); border-bottom: 1px solid #dbdbdb;}
        .sampleApp .button-sample > button + button{margin-left: 10px;}
        .sampleApp .top-button{display: flex; justify-content: center; align-items: center; position: fixed; bottom: 20px; right: 20px; width: 50px; height: 50px; background: #1490ef; color: #fff; border-radius: 50px; cursor: pointer; opacity: 0; transition: opacity 0.5s ease-in-out; pointer-events: none;}
        .sampleApp .top-button.show{opacity: 1; pointer-events: auto}
        .sampleApp .tab-item{}
        .sampleApp .tab-item + .tab-item{margin-top: 50px;}
        .sampleApp .bottom-last{height: 600px;}
        .sampleApp .MuiPaper-root > div{width: 100%;}
        .sampleApp .MuiPaper-root > div[class]{width: auto;}
        .sampleApp h1,
        .sampleApp h2{color: #919191;}
        .sampleApp .fc-red{color: #ff6233;}
        .sampleApp .page-loading{width: 60px !important; height: 60px !important}
        .sampleApp .MuiPopper-root{z-index:1;}

        
        @media (max-width: 1200px) {
          .sampleApp .contentTab{width: calc(100vw - 60px)}
          .sampleApp .contentTab.fixed{top: 45px; left: 0px;}
        }
        @media (max-width: 600px) {
          .sampleApp .contentTab.fixed{top: 37px; left: 0px;}
        }
      `,
    },
  },
});

import React from 'react';
import { useTheme } from '@mui/material/styles';
import {
  Toolbar,
  FormControl,
  Select,
  OutlinedInput,
  MenuItem
} from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
PaperProps: {
    style: {
    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    width: 120,
    },
},
};
const langNames = [
'한국어',
'English',
'中文',
'日本語',
];

const downNames = [
'설치 가이드',
'개발 가이드',
'MUI 메뉴얼',
];

function getStyles(name, styleName, theme) {
return {
    fontWeight:
    styleName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
};
}

const HeaderWrap = (props) => {

    const theme = useTheme();
    const [languageName, setLanguageName] = React.useState([]);
    const [downloadName, setDownloadName] = React.useState([]);
  
    // 다운로드 select
    const downloadHandleChange = (event) => {
      const {
        target: { value },
      } = event;
      setDownloadName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
  
    // 다국어 select
    const languageHandleChange = (event) => {
      const {
        target: { value },
      } = event;
      setLanguageName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };

    return (
        <>
            
            <Toolbar sx={{justifyContent: 'end', backdropFilter: 'blur(8px)', backgroundColor: 'rgb(255 255 255 / 60%)'}}>
                <FormControl sx={{ m: 0, width: 200, mr: 1}} size='small'>
                    <Select
                        sx={{backgroundColor: '#fff'}}
                        displayEmpty
                        value={downloadName}
                        onChange={downloadHandleChange}
                        input={<OutlinedInput />}
                        renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <em>메뉴얼 다운로드</em>;
                        }
                        return selected.join(', ');
                        }}
                        MenuProps={MenuProps}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem disabled value="">
                        <em>Download</em>
                        </MenuItem>
                        {downNames.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, downloadName, theme)}
                        >
                            {name}
                        </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 0, width: 120}} size='small'>
                    <Select
                        sx={{backgroundColor: '#fff'}}
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
                </FormControl>
            </Toolbar>
        </>
    );
};

export default HeaderWrap;
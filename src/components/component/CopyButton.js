import React, { useState } from 'react';
import { Button, Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const CopyButton = ({code}) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true)
    }
    const handleClose = (event, reason) => {
        if (reason === 'slickaway') {
            return;
        }
        setOpen(false);
    }
    const action = (
        <>
            <IconButton
                size='small'
                aria-label='close'
                color='inherit'
                onClick={handleClose}
            >
                <CloseIcon fontSize='small'/>
            </IconButton>
        </>
    )
    const buttomPosition = {
        position: 'absolute',
        right: '1px',
        bottom: '1px',
        backgroundColor: '#000',
        color: '#fff',
        boxShadow: 'none',
        borderTopLeftRadius: '5px',
        borderTopRightRadius: '0px',
        borderBottomRightRadius: '4px',
        borderBottomleftRadius: '0px',
        textTransform: 'initial',
        '&:hover': {
            backgroundColor: '#000'
        }
    }
    const copyCode = () => {
        try {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(code).then(function() {
                    console.log('https에서 클립보드 복사 성공!!!');
                });
                handleClick();
            } else {
                if (!document.queryCommandSupported("copy")) {
                    return alert("코드복사 기능이 지원되지 않는 브라우저 입니다!")
                }
                const textarea = document.createElement("textarea");
                textarea.value = code;
                textarea.style.top = 0;
                textarea.style.left = 0;
                textarea.style.position = "fixed";
                document.body.appendChild(textarea);
                textarea.focus();
                textarea.select();
                document.execCommand("copy");
                document.body.removeChild(textarea);
                console.log('http에서 클립보드 복사 성공');
                handleClick();
            }
        } catch (e) {
            console.error('error', e);
        }
    };
    return (
        <>
            <Button variant='contained' size='small' sx={buttomPosition} onClick={copyCode}>Copy</Button>
            <Snackbar 
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
                message="코드복사!! [Ctrl + V]로 원하는 곳에 붙여넣기 하세요."
                action={action}
            />
        </>
    );
};

export default CopyButton;
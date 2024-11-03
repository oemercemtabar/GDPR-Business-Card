import React, { useState, Component } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(10),
        padding: '15px 20px',
        borderWidth: '50px',
        '& label.Mui-focused': {
            color: 'green',

        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'green',
            },
            '&:hover fieldset': {
                borderColor: 'green',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
}));

export default useStyles;
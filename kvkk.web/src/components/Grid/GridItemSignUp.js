﻿import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
    grid: {
        padding: "0 0px !important",
    },
};

const useStyles = makeStyles(styles);

export default function GridItemSignUp(props) {
    const classes = useStyles();
    const { children, ...rest } = props;
    return (
        <Grid item {...rest} className={classes.grid}>
            {children}
        </Grid>
    );
}

GridItemSignUp.propTypes = {
    children: PropTypes.node,
};

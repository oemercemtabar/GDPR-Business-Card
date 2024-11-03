import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = {
    grid: {
        margin: "0",
        width: "unset",
        spacing: 10,

    },
};

const useStyles = makeStyles(styles);

export default function GridContainerSignUp(props) {
    const classes = useStyles();
    const { children, ...rest } = props;
    return (
        <Grid container {...rest} className={classes.grid}>
            {children}
        </Grid>
    );
}

GridContainerSignUp.propTypes = {
    children: PropTypes.node,
};

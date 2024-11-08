import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "../../assets/jss/material-dashboard-react/components/businesscardIconStyle";

const useStyles = makeStyles(styles);

export default function BusinessCardIcon(props) {
    const classes = useStyles();
    const { className, children, color, ...rest } = props;
    const cardIconClasses = classNames({
        [classes.cardIcon]: true,
        [classes[color + "CardHeader"]]: color,
        [className]: className !== undefined,
    });
    return (
        <div className={cardIconClasses} {...rest}>
            {children}
        </div>
    );
}

BusinessCardIcon.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf([
        "warning",
        "success",
        "danger",
        "info",
        "primary",
        "rose",
    ]),
    children: PropTypes.node,
};

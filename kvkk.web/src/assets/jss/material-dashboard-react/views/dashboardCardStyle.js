import {
    successColor,
    whiteColor,
    grayColor,
    hexToRgb,
    blackColor,
} from "../../material-dashboard-react";
const dashboardStyle = {
    successText: {
        color: successColor[0],
    },
    upArrowCardCategory: {
        width: "16px",
        height: "16px",
    },
    stats: {
        color: whiteColor,
        display: "inline-flex",
        fontSize: "14px",
        lineHeight: "22px",
        "& svg": {
            top: "4px",
            width: "16px",
            height: "16px",
            position: "relative",
            marginRight: "3px",
            marginLeft: "3px",
        },
        "& .fab,& .fas,& .far,& .fal,& .material-icons": {
            top: "4px",
            fontSize: "16px",
            position: "relative",
            marginRight: "3px",
            marginLeft: "3px",
        },
    },
    cardCategory: {
        color: whiteColor,
        margin: "0",
        fontSize: "14px",
        marginTop: "5px",
        paddingTop: "1px",
        marginBottom: "5px",
    },
    cardCategoryWhite: {
        color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0",
    },
    cardTitle: {
        color: whiteColor,
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: grayColor[1],
            fontWeight: "400",
            lineHeight: "1",
        },
    },
    cardTitleWhite: {
        color: whiteColor,
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: grayColor[1],
            fontWeight: "400",
            lineHeight: "1",
        },
    },
};

export default dashboardStyle;

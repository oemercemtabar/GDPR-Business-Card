import App from "../../../../App";
import {
    blackColor,
    whiteColor,
    appColor,
    hexToRgb,
} from "../../material-dashboard-react";

const businesscardStyle = {
    card: {
        border: "0",
        marginBottom: "10px",
        marginTop: "10px",
        borderRadius: "12px",
        color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
        background: appColor,
        width: "100%",
        height: "130%",
        boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        wordWrap: "break-word",
        fontSize: ".900rem",
    },
    cardPlain: {
        background: "transparent",
        boxShadow: "none",
    },
    cardProfile: {
        marginTop: "30px",
        textAlign: "center",
    },
    cardChart: {
        "& p": {
            marginTop: "0px",
            paddingTop: "0px",
        },
    },
};

export default businesscardStyle;

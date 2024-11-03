import {
    drawerWidth,
    transition,
    container,
} from "../../material-dashboard-react";

const appStyle = (theme) => ({
    wrapper: {
        position: "relative",
        top: "0",
        height: "100vh",
    },
    mainPanel: {
        [theme.breakpoints.up("md")]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
        overflow: "auto",
        position: "relative",
        float: "right",
        ...transition,
        maxHeight: "100%",
        width: "100%",
        overflowScrolling: "touch",
        
    },
    content: {
        marginTop: "70px",
        padding: "30px 15px",
        minHeight: "calc(100vh - 123px)",
    },
    container,
    map: {
        marginTop: "70px",
    },

    image_ontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    image: {
        height: 250,
        width: 250,
        opacity: 0.5
    }
});

export default appStyle;

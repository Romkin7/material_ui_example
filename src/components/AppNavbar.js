import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { Toolbar, AppBar, Typogrphy, Typography } from "@material-ui/core";
import MainNavigation from "./MainNavigation";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 25,
        backgroundImage: "linear-gradient(to bottom, #f7f2fc, #e9e0f1, #dacee7, #ccbcdc, #beaad1, #b69dcd, #ad91c9, #a584c5, #9f79c7, #996dc9, #9262cb, #8b56cd)"
    },
    list: {
        background: "green"
    },
    title: {
        flexGrow: 1
    }
}));

const AppNavbar = () => {
    const classes = useStyles();
    return(
        <div>
        <AppBar className={classes.root}>
            <Toolbar>
                <Link to="/"><Typography variant="h5" className={classes.title}>
                    Material Ui Example
                </Typography></Link>
                <MainNavigation></MainNavigation>
            </Toolbar>
        </AppBar>
        </div>
    );
};

export default AppNavbar;
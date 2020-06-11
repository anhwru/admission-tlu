import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui icons
// core components

// style for page
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js";
const useStyles = makeStyles(styles);


export default function VLine2() {
    const classes = useStyles();

    return (
        <div className={classes.container} >
            <h4>Nơi học THPT</h4>
        </div>
    );
}
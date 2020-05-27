import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import Mail from "@material-ui/icons/Mail";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import bg7 from "assets/img/bg7.jpg";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js";

const useStyles = makeStyles(styles);

export default function VTitle() {
    const classes = useStyles();
    return (
        <div>
            <div id="subscribe"
                 className={classNames(
                     classes.subscribeLine,
                     classes.subscribeLineImage
                 )}
                 style={{ backgroundImage: `url(${bg7})` }}
            >
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem
                            xs={12}
                            sm={6}
                            md={6}
                            className={classNames(classes.mlAuto, classes.mrAuto)}
                        >
                            <div className={classes.textCenter}>
                                <h3 className={classes.title}>PHIẾU ĐĂNG KÝ XÉT TUYỂN ĐẠI HỌC CHÍNH QUY</h3>

                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </div>
        </div>
    );
}
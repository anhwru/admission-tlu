/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
// sections for this page
import componentsStyle from "assets/jss/material-kit-pro-react/views/componentsStyle.js";

const useStyles = makeStyles(componentsStyle);

export default function AdmissionPage() {
    const classes = useStyles();
    return (
        <div>
            <Footer
                content={
                    <div>
                        <div className={classes.left}>
                            <List className={classes.list}>
                                <ListItem className={classes.inlineBlock}>
                                    <a
                                        href="https://www.creative-tim.com/?ref=mkpr-components"
                                        target="_blank"
                                        className={classes.block}
                                    >
                                        Creative Tim
                                    </a>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <a
                                        href="https://www.creative-tim.com/presentation?ref=mkpr-components"
                                        target="_blank"
                                        className={classes.block}
                                    >
                                        About us
                                    </a>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <a href="//blog.creative-tim.com/" className={classes.block}>
                                        Blog
                                    </a>
                                </ListItem>
                                <ListItem className={classes.inlineBlock}>
                                    <a
                                        href="https://www.creative-tim.com/license?ref=mkpr-components"
                                        target="_blank"
                                        className={classes.block}
                                    >
                                        Licenses
                                    </a>
                                </ListItem>
                            </List>
                        </div>
                        <div className={classes.right}>
                            &copy; {1900 + new Date().getYear()} , made with{" "}
                            <Favorite className={classes.icon} /> by{" "}
                            <a
                                href="https://www.creative-tim.com?ref=mkpr-components"
                                target="_blank"
                            >
                                Creative Tim
                            </a>{" "}
                            for a better web.
                        </div>
                    </div>
                }
            />
        </div>
    );
}

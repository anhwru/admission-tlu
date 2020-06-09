import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import "./Style.scss";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// @material-ui/icons
import Mail from "@material-ui/icons/Mail";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Footer from "components/Footer/Footer.js";

import face1 from "assets/img/faces/card-profile6-square.jpg";
import face2 from "assets/img/faces/christian.jpg";
import face3 from "assets/img/faces/card-profile4-square.jpg";
import face4 from "assets/img/faces/card-profile1-square.jpg";
import face5 from "assets/img/faces/marc.jpg";
import face6 from "assets/img/faces/kendall.jpg";
import face7 from "assets/img/faces/card-profile5-square.jpg";
import face8 from "assets/img/faces/card-profile2-square.jpg";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.js";

const useStyles = makeStyles(styles);

export default function VFooter() {
  const classes = useStyles();
  return (
    <div id="footer" className={classes.section}>
      <div>
        <Footer
            theme="white"
            content={
              <div>
                <ul className={classes.socialButtons}>
                  <li>
                    <Button justIcon simple href="#pablo" color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                  </li>
                  <li>
                    <Button justIcon simple href="#pablo" color="facebook">
                      <i className="fab fa-facebook-square" />
                    </Button>
                  </li>
                  <li>
                    <Button justIcon simple href="#pablo" color="dribbble">
                      <i className="fab fa-dribbble" />
                    </Button>
                  </li>
                  <li>
                    <Button justIcon simple href="#pablo" color="google">
                      <i className="fab fa-google-plus-g" />
                    </Button>
                  </li>
                  <li>
                    <Button justIcon simple href="#pablo" color="youtube">
                      <i className="fab fa-youtube" />
                    </Button>
                  </li>
                </ul>
                <div
                    className={classNames(classes.pullCenter, classes.copyRight)}
                >
                  Copyright &copy; {1900 + new Date().getYear()}{" "}
                  <a
                      href="https://www.creative-tim.com?ref=mkpr-footer-components"
                      target="_blank"
                  >
                    Creative Tim
                  </a>{" "}
                  All Rights Reserved.
                </div>
              </div>
            }
        >
          <div className={classes.footer}>
            <GridContainer>
              <GridItem xs={12} sm={3} md={3}>
                <a href="#pablo">
                  <h5>Material Kit PRO</h5>
                </a>
                <p>
                  Probably the best UI Kit in the world! We know you{"'"}ve been
                  waiting for it, so don{"'"}t be shy!
                </p>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <h5>About</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <a href="#pablo">Blog</a>
                  </li>
                  <li>
                    <a href="#pablo">About us</a>
                  </li>
                  <li>
                    <a href="#pablo">Presentation</a>
                  </li>
                  <li>
                    <a href="#pablo">Contact us</a>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <h5>Market</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <a href="#pablo">Sales FAQ</a>
                  </li>
                  <li>
                    <a href="#pablo">How to register</a>
                  </li>
                  <li>
                    <a href="#pablo">Sell Goods</a>
                  </li>
                  <li>
                    <a href="#pablo">Receive Payment</a>
                  </li>
                  <li>
                    <a href="#pablo">Transactions Issues</a>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <h5>Legal</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <a href="#pablo">Transactions FAQ</a>
                  </li>
                  <li>
                    <a href="#pablo">Terms & conditions</a>
                  </li>
                  <li>
                    <a href="#pablo">Licenses</a>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={3} md={3}>
                <h5>Subscribe to Newsletter</h5>
                <p>
                  Join our newsletter and get news in your inbox every week! We
                  hate spam too, so no worries about this.
                </p>
                <form>
                  <CustomInput
                      id="footeremail"
                      formControlProps={{
                        fullWidth: false,
                        className: classes.customFormControl
                      }}
                      inputProps={{
                        placeholder: "Your Email..."
                      }}
                  />
                  <Button color="primary" justIcon>
                    <Mail />
                  </Button>
                </form>
              </GridItem>
            </GridContainer>
          </div>
        </Footer>
      </div>
    </div>
  );
};
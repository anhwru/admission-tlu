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

// import face1 from "assets/img/faces/card-profile6-square.jpg";
// import face2 from "assets/img/faces/christian.jpg";
// import face3 from "assets/img/faces/card-profile4-square.jpg";
// import face4 from "assets/img/faces/card-profile1-square.jpg";
// import face5 from "assets/img/faces/marc.jpg";
// import face6 from "assets/img/faces/kendall.jpg";
// import face7 from "assets/img/faces/card-profile5-square.jpg";
// import face8 from "assets/img/faces/card-profile2-square.jpg";

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
                      href="http://facebook.com/npm.install.node.sass"
                      target="_blank"
                  >
                    ATK Teams
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
                  <h5>Trường Đại học Thủy Lợi 1959</h5>
                </a>
                <p>
                  Địa chỉ: 175 Tây Sơn, Đống Đa, Hà Nội
                  Điện thoại: (024) 38522201 - Fax: (024) 35633351
                  Email: phonghcth@tlu.edu.vn
                </p>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <h5>Danh mục</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <a>Đăng ký xét tuyển</a>
                  </li>
                  <li>
                    <a>Thông tin các khoa</a>
                  </li>
                  <li>
                    <a>Tin tức tuyển sinh</a>
                  </li>
                  <li>
                    <a>Giới thiệu</a>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <h5>Các phòng liên quan</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <a>Phòng Đào tạo</a>
                  </li>
                  <li>
                    <a>Phòng CT & QLSV</a>
                  </li>
                  <li>
                    <a>Phòng Tài Vụ</a>
                  </li>
                  <li>
                    <a>Phòng Khảo thí & Kiểm Định chất lượng</a>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={2} md={2}>
                <h5>Hoạt động</h5>
                <ul className={classes.linksVertical}>
                  <li>
                    <a>Truy cập : <i> 769.936 lượt</i></a>
                  </li>
                  <li>
                    <a >Online : <i> 25 lượt</i></a>
                  </li>
                </ul>
              </GridItem>
              <GridItem xs={12} sm={3} md={3}>
                <h5>Đăng ký để nhận thông tin tư vấn tuyển sinh</h5>
                <p>
                  Hãy để lại email của bạn, chúng tôi sẽ gửi về hòm thư của bạn các thông tin tuyển sinh của trường ĐH Thủy Lợi được cập nhật mới nhất
                </p>
                <form>
                  <CustomInput
                      id="footeremail"
                      formControlProps={{
                        fullWidth: false,
                        className: classes.customFormControl
                      }}
                      inputProps={{
                        placeholder: "Email của bạn..."
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
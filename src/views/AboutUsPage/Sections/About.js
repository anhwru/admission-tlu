/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.js";

// Sections for this page

import SectionTeam from "./SectionTeam.js";

const useStyles = makeStyles(landingPageStyle);

export default function About() {
		React.useEffect(() => {
				window.scrollTo(0, 0);
				document.body.scrollTop = 0;
		});
		const classes = useStyles();
		return (
				<div>
						<Parallax image={("https://yolearn.vn/uploads/files/Th%E1%BB%A7y%20l%E1%BB%A3i%201.jpg")} filter="dark">
								<div className={classes.container}>
										<GridContainer>
												<GridItem xs={12} sm={6} md={6}>
														<h1 className={classes.title}>Trường Đại học Thủy Lợi</h1>
														<h4>
																Trường ĐH Thủy Lợi là trường đại học số 1 trong việc đào tạo nguồn nhân lực chất lượng
																cao, nghiên cứu khoa học, phát triển và chuyển giao công nghệ tiên tiến trong các ngành
																khoa học, kỹ thuật, kinh tế và quản lý, đặc biệt trong lĩnh vực thuỷ lợi, môi trường,
																phòng chống và giảm nhẹ thiên tai.
														</h4>
														<br/>
														<Button
																color="danger"
																size="lg"
																href="https://www.youtube.com/watch?v=fFubnrCls0c"
																target="_blank"
														>
																<i className="fas fa-play"/>
																Xem giới thiệu
														</Button>
												</GridItem>
										</GridContainer>
								</div>
						</Parallax>
						<div className={classNames(classes.main, classes.mainRaised)}>
								<div className={classes.container}>
										<SectionTeam/>
								</div>
						</div>
				</div>
		);
}

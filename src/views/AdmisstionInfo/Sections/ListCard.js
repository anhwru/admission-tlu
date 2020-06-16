import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui icons
import TrendingUp from "@material-ui/icons/TrendingUp";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import PersonAdd from "@material-ui/icons/PersonAdd";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Danger from "components/Typography/Danger.js";
import {
		Link
} from "react-router-dom";

// style for page
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js";
import stylescard from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";


const useStyles = makeStyles(styles);
const useStyleCard = makeStyles(stylescard);

export default function ListCard() {
		
		const classes = useStyles();
		const classescard = useStyleCard();
		return (
				<div className={classes.container} id="form-data">
						<GridContainer>
								<GridItem xs={12} sm={4} md={4} lg={4}>
										<Link to="/khoa">
												<Card className="faculty">
														<CardBody className="faculty-head">
																<Danger>
																		<h6 className={classescard.cardCategory}>
																				<TrendingUp/> Công nghệ thông tin
																		</h6>
																</Danger>
																<h4 className={classescard.cardTitle}>
																		Công Nghệ Thông Tin + Hệ Thống Thông Tin + Phần Mềm
																</h4>
														</CardBody>
														<CardFooter className="faculty-footer">
																<div className="fac_with-icon">
																		<SupervisorAccount className="info"/>
																		<span> Tất cả : 3380</span>
																</div>
																<div className={`fac_with-icon ${classescard.mlAuto}`}>
																		<PersonAdd className="success"/>
																		<span> Khóa trước : 600</span>
																</div>
														</CardFooter>
												</Card>
										</Link>
								</GridItem>
								<GridItem xs={12} sm={4} md={4} lg={4}>
										<Card className="faculty">
												<CardBody className="faculty-head">
														<Danger>
																<h6 className={classescard.cardCategory}>
																		<TrendingUp/> Công nghệ thông tin
																</h6>
														</Danger>
														<h4 className={classescard.cardTitle}>
																Công Nghệ Thông Tin + Hệ Thống Thông Tin + Phần Mềm
														</h4>
												</CardBody>
												<CardFooter className="faculty-footer">
														<div className="fac_with-icon">
																<SupervisorAccount className="info"/>
																<span> Tất cả : 3380</span>
														</div>
														<div className={"fac_with-icon" + " " + classescard.mlAuto}>
																<PersonAdd className="success"/>
																<span> Khóa trước : 600</span>
														</div>
												</CardFooter>
										</Card>
								</GridItem>
								<GridItem xs={12} sm={4} md={4} lg={4}>
										<Card className="faculty">
												<CardBody className="faculty-head">
														<Danger>
																<h6 className={classescard.cardCategory}>
																		<TrendingUp/> Công nghệ thông tin
																</h6>
														</Danger>
														<h4 className={classescard.cardTitle}>
																Công Nghệ Thông Tin + Hệ Thống Thông Tin + Phần Mềm
														</h4>
												</CardBody>
												<CardFooter className="faculty-footer">
														<div className="fac_with-icon">
																<SupervisorAccount className="info"/>
																<span> Tất cả : 3380</span>
														</div>
														<div className={"fac_with-icon" + " " + classescard.mlAuto}>
																<PersonAdd className="success"/>
																<span> Khóa trước : 600</span>
														</div>
												</CardFooter>
										</Card>
								</GridItem>
								<GridItem xs={12} sm={4} md={4} lg={4}>
										<Card className="faculty">
												<CardBody className="faculty-head">
														<Danger>
																<h6 className={classescard.cardCategory}>
																		<TrendingUp/> Công nghệ thông tin
																</h6>
														</Danger>
														<h4 className={classescard.cardTitle}>
																Công Nghệ Thông Tin + Hệ Thống Thông Tin + Phần Mềm
														</h4>
												</CardBody>
												<CardFooter className="faculty-footer">
														<div className="fac_with-icon">
																<SupervisorAccount className="info"/>
																<span> Tất cả : 3380</span>
														</div>
														<div className={"fac_with-icon" + " " + classescard.mlAuto}>
																<PersonAdd className="success"/>
																<span> Khóa trước : 600</span>
														</div>
												</CardFooter>
										</Card>
								</GridItem>
								<GridItem xs={12} sm={4} md={4} lg={4}>
										<Card className="faculty">
												<CardBody className="faculty-head">
														<Danger>
																<h6 className={classescard.cardCategory}>
																		<TrendingUp/> Công nghệ thông tin
																</h6>
														</Danger>
														<h4 className={classescard.cardTitle}>
																Công Nghệ Thông Tin + Hệ Thống Thông Tin + Phần Mềm
														</h4>
												</CardBody>
												<CardFooter className="faculty-footer">
														<div className="fac_with-icon">
																<SupervisorAccount className="info"/>
																<span> Tất cả : 3380</span>
														</div>
														<div className={"fac_with-icon" + " " + classescard.mlAuto}>
																<PersonAdd className="success"/>
																<span> Khóa trước : 600</span>
														</div>
												</CardFooter>
										</Card>
								</GridItem>
								<GridItem xs={12} sm={4} md={4} lg={4}>
										<Card className="faculty">
												<CardBody className="faculty-head">
														<Danger>
																<h6 className={classescard.cardCategory}>
																		<TrendingUp/> Công nghệ thông tin
																</h6>
														</Danger>
														<h4 className={classescard.cardTitle}>
																Công Nghệ Thông Tin + Hệ Thống Thông Tin + Phần Mềm
														</h4>
												</CardBody>
												<CardFooter className="faculty-footer">
														<div className="fac_with-icon">
																<SupervisorAccount className="info"/>
																<span> Tất cả : 3380</span>
														</div>
														<div className={"fac_with-icon" + " " + classescard.mlAuto}>
																<PersonAdd className="success"/>
																<span> Khóa trước : 600</span>
														</div>
												</CardFooter>
										</Card>
								</GridItem>
								<GridItem xs={12} sm={4} md={4} lg={4}>
										<Card className="faculty">
												<CardBody className="faculty-head">
														<Danger>
																<h6 className={classescard.cardCategory}>
																		<TrendingUp/> Công nghệ thông tin
																</h6>
														</Danger>
														<h4 className={classescard.cardTitle}>
																Công Nghệ Thông Tin + Hệ Thống Thông Tin + Phần Mềm
														</h4>
												</CardBody>
												<CardFooter className="faculty-footer">
														<div className="fac_with-icon">
																<SupervisorAccount className="info"/>
																<span> Tất cả : 3380</span>
														</div>
														<div className={"fac_with-icon" + " " + classescard.mlAuto}>
																<PersonAdd className="success"/>
																<span> Khóa trước : 600</span>
														</div>
												</CardFooter>
										</Card>
								</GridItem>
								<GridItem xs={12} sm={4} md={4} lg={4}>
										<Card className="faculty">
												<CardBody className="faculty-head">
														<Danger>
																<h6 className={classescard.cardCategory}>
																		<TrendingUp/> Công nghệ thông tin
																</h6>
														</Danger>
														<h4 className={classescard.cardTitle}>
																Công Nghệ Thông Tin + Hệ Thống Thông Tin + Phần Mềm
														</h4>
												</CardBody>
												<CardFooter className="faculty-footer">
														<div className="fac_with-icon">
																<SupervisorAccount className="info"/>
																<span> Tất cả : 3380</span>
														</div>
														<div className={"fac_with-icon" + " " + classescard.mlAuto}>
																<PersonAdd className="success"/>
																<span> Khóa trước : 600</span>
														</div>
												</CardFooter>
										</Card>
								</GridItem>
								<GridItem xs={12} sm={4} md={4} lg={4}>
										<Card className="faculty">
												<CardBody className="faculty-head">
														<Danger>
																<h6 className={classescard.cardCategory}>
																		<TrendingUp/> Công nghệ thông tin
																</h6>
														</Danger>
														<h4 className={classescard.cardTitle}>
																Công Nghệ Thông Tin + Hệ Thống Thông Tin + Phần Mềm
														</h4>
												</CardBody>
												<CardFooter className="faculty-footer">
														<div className="fac_with-icon">
																<SupervisorAccount className="info"/>
																<span> Tất cả : 3380</span>
														</div>
														<div className={"fac_with-icon" + " " + classescard.mlAuto}>
																<PersonAdd className="success"/>
																<span> Khóa trước : 600</span>
														</div>
												</CardFooter>
										</Card>
								</GridItem>
						</GridContainer>
				</div>
		);
}
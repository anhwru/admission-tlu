import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";


import {
		BrowserRouter as Router,
		Switch,
		Route,
		Link
} from "react-router-dom";

// style for page
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js";
import stylescard from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Success from "../../../components/Typography/Success";
import Schedule from "@material-ui/core/SvgIcon/SvgIcon";


const useStyles = makeStyles(styles);
const useStyleCard = makeStyles(stylescard);

export default function News() {
		
		const classes = useStyles();
		const classescard = useStyleCard();
		return (
				<div className={classes.container} id="form-data">
						<GridContainer>
								<GridItem xs={12} sm={4} md={4} lg={4}>
										<Link to="/cong-nghe-thong-tin">
												<Card blog>
														<CardHeader image>
																<img
																		src="https://media-a.laodong.vn/Storage/NewsPortal/2018/11/11/640774/Sv-Thuy-Loi.jpg"
																		alt="..."/>
																<div
																		className={classescard.coloredShadow}
																		style={{
																				backgroundImage: `url(https://media-a.laodong.vn/Storage/NewsPortal/2018/11/11/640774/Sv-Thuy-Loi.jpg)`,
																				opacity: "1"
																		}}
																/>
														</CardHeader>
														<CardBody>
																<Success>
																		<h6 className={classescard.cardCategory}>Legal</h6>
																</Success>
																<h4 className={classescard.cardTitle} style={{fontFamily: "serif"}}>
																		Những lưu ý khi nộp hồ sơ xét tuyển trực tuyến
																</h4>
																<p className={classescard.cardDescription}>
																		Don{"'"}t be scared of the truth because we need to
																		restart the human foundation in truth And I love you
																		like Kanye loves Kanye I love Rick Owens’ bed design but
																		the back is...
																</p>
														</CardBody>
														<CardFooter>
																
																<div className={classescard.stats + " " + classescard.mlAuto}>
																		<Schedule/> 25/06/2020
																</div>
														</CardFooter>
												</Card>
										</Link>
								</GridItem>
								<GridItem xs={12} sm={4} md={4} lg={4}>
										<Link to="/cong-nghe-thong-tin">
												<Card blog>
														<CardHeader image>
																<img src="https://tlus.edu.vn/wp-content/uploads/2019/08/quang-ba-tuyen-sinh-2019.png"
																		 alt="..."/>
																<div
																		className={classescard.coloredShadow}
																		style={{
																				backgroundImage: `url(https://tlus.edu.vn/wp-content/uploads/2019/08/quang-ba-tuyen-sinh-2019.png)`,
																				opacity: "1"
																		}}
																/>
														</CardHeader>
														<CardBody>
																<Success>
																		<h6 className={classescard.cardCategory}>Legal</h6>
																</Success>
																<h4 className={classescard.cardTitle} style={{fontFamily: "serif"}}>
																		Chính thức nhận hồ sơ đăng ký xét tuyển từ 30/08/2020
																</h4>
																<p className={classescard.cardDescription}>
																		Don{"'"}t be scared of the truth because we need to
																		restart the human foundation in truth And I love you
																		like Kanye loves Kanye I love Rick Owens’ bed design but
																		the back is...
																</p>
														</CardBody>
														<CardFooter>
																
																<div className={classescard.stats + " " + classescard.mlAuto}>
																		<Schedule/> 25/08/2020
																</div>
														</CardFooter>
												</Card>
										</Link>
								</GridItem>
								<GridItem xs={12} sm={4} md={4} lg={4}>
										<Link to="/cong-nghe-thong-tin">
												<Card blog>
														<CardHeader image>
																<a href="#pablo" onClick={e => e.preventDefault()}>
																		<img
																				src="https://media-a.laodong.vn/Storage/NewsPortal/2018/11/11/640774/Sv-Thuy-Loi.jpg"
																				alt="..."/>
																</a>
																<div
																		className={classescard.coloredShadow}
																		style={{
																				backgroundImage: `url(https://media-a.laodong.vn/Storage/NewsPortal/2018/11/11/640774/Sv-Thuy-Loi.jpg)`,
																				opacity: "1"
																		}}
																/>
														</CardHeader>
														<CardBody>
																<Success>
																		<h6 className={classescard.cardCategory}>Legal</h6>
																</Success>
																<h4 className={classescard.cardTitle} style={{fontFamily: "serif"}}>
																		Những lưu ý khi nộp hồ sơ xét tuyển trực tuyến
																</h4>
																<p className={classescard.cardDescription}>
																		Don{"'"}t be scared of the truth because we need to
																		restart the human foundation in truth And I love you
																		like Kanye loves Kanye I love Rick Owens’ bed design but
																		the back is...
																</p>
														</CardBody>
														<CardFooter>
																
																<div className={classescard.stats + " " + classescard.mlAuto}>
																		<Schedule/> 25/06/2020
																</div>
														</CardFooter>
												</Card>
										</Link>
								</GridItem>
						
						</GridContainer>
				</div>
		);
}
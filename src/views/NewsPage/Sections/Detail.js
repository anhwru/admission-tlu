import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import CardBody from "components/Card/CardBody.js";
import VNav_Header from "../../IndexPage/Sections/VNav_Header";
// @material-ui icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// @router
import {
	Link
} from "react-router-dom";
// style for page
import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";

import cardBlog4 from "assets/img/examples/card-blog4.jpg";
import blog5 from "assets/img/examples/blog5.jpg";
import blog7 from "assets/img/examples/blog7.jpg";
import VFooter from "../../IndexPage/Sections/VFooter";

const useStyles = makeStyles(blogsStyle);

export default function Detail(props) {
	// console.log(props.id);

	const classes = useStyles();
	return (
		<div>
			<VNav_Header />
			<div className={classes.blog} style={{ padding: '0px' }}>
				<GridContainer>
					<GridItem
						xs={12}
						sm={10}
						md={10}
						className={classes.mlAuto + " " + classes.mrAuto}
					>

						<Card plain blog className={classes.card}>
							<GridContainer>
								<GridItem xs={12} sm={8} md={8}>
									<h3 className={classes.cardTitle} style={{ margin: "0px 0 20px" }}>
										Trường đại học thủy lợi công bố phương án tuyển sinh năm 2020
																		</h3>
									<CardHeader image plain>
										<Link to="/">
											<img
												src="https://media.kenhtuyensinh.vn/images/cms/2019/02/dai-hoc-thuy-loi.jpg"
												alt="..." />
										</Link>
										<div
											className={classes.coloredShadow}
											style={{
												backgroundImage: `url(https://media.kenhtuyensinh.vn/images/cms/2019/02/dai-hoc-thuy-loi.jpg)`,
												opacity: "1"
											}}
										/>
									</CardHeader>
									<p className={classes.description1}
										style={{ margin: "20px 0 0", textIndent: "25px" }}>
										Like so many organizations these days, Autodesk is a
										company in transition. It was until recently a traditional
										boxed software company selling licenses. Today, it’s
										moving to a subscription model. Yet its own business model
										disruption is only part of the story — and…
										Like so many organizations these days, Autodesk is a
										company in transition. It was until recently a traditional
										boxed software company selling licenses. Today, it’s
										moving to a subscription model. Yet its own business model
										disruption is only part of the story — and…
										Like so many organizations these days, Autodesk is a
										company in transition. It was until recently a traditional
										boxed software company selling licenses. Today, it’s
										moving to a subscription model. Yet its own business model
										disruption is only part of the story — and…
										Like so many organizations these days, Autodesk is a
										company in transition. It was until recently a traditional
										boxed software company selling licenses. Today, it’s
										moving to a subscription model. Yet its own business model
										disruption is only part of the story — and…Autodesk is a
										company in transition. It was until recently a traditional
										boxed software company selling licenses. Today, it’s
										moving to a subscription model. Yet its own business model
										disruption is only part of the story — and…Autodesk is a
										company in transition. It was until recently a traditional
										boxed software company selling licenses. Today, it’s
										moving to a subscription model. Yet its own business model
										disruption is only part of the story — and…Autodesk is a
										company in transition. It was until recently a traditional
										boxed software company selling licenses. Today, it’s
										moving to a subscription model. Yet its own business model
										disruption is only part of the story — and…Autodesk is a
										company in transition. It was until recently a traditional
										boxed software company selling licenses. Today, it’s
										moving to a subscription model. Yet its own business model
										disruption is only part of the story — and…Autodesk is a
										company in transition. It was until recently a traditional
										boxed software company selling licenses. Today, it’s
										moving to a subscription model. Yet its own business model
										disruption is only part of the story — and…
																		</p>
								</GridItem>
								<GridItem xs={12} sm={4} md={4}>
									<Success>
										<h4 className={classes.cardCategory + " " + "relate"}>Tin liên quan</h4>
									</Success>
									<Card plain blog className={classes.card + " " + "margin-t"}>
										<GridContainer>
											<GridItem xs={12} sm={6} md={6}>
												<CardHeader image plain>
													<a href="#pablito" onClick={e => e.preventDefault()}>
														<img src={blog7} alt="..." />
													</a>
													<div
														className={classes.coloredShadow}
														style={{
															backgroundImage: `url(${blog7})`,
															opacity: "1"
														}}
													/>
													<div
														className={classes.coloredShadow}
														style={{
															backgroundImage: `url(${blog7})`,
															opacity: "1"
														}}
													/>
												</CardHeader>
											</GridItem>
											<GridItem xs={12} sm={6} md={6}>
												{/*<Success>*/}
												{/*		<h6 className={classes.cardCategory}>Tiê</h6>*/}
												{/*</Success>*/}
												<h6 className={classes.cardTitle} style={{ margin: '0px' }}>
													<a>
														Lyft launching cross-platform service this week
																										</a>
												</h6>
												<p className={classes.author} style={{ fontSize: "12px" }}>
													by{" "}
													<a href="#pablo" onClick={e => e.preventDefault()}>
														<b>Megan Rose</b>
													</a>{" "}
																										, 2 days ago
																								</p>
											</GridItem>
										</GridContainer>
									</Card>
									<Card plain blog className={classes.card}>
										<GridContainer>
											<GridItem xs={12} sm={6} md={6}>
												<CardHeader image plain>
													<a href="#pablito" onClick={e => e.preventDefault()}>
														<img src={blog7} alt="..." />
													</a>
													<div
														className={classes.coloredShadow}
														style={{
															backgroundImage: `url(${blog7})`,
															opacity: "1"
														}}
													/>
													<div
														className={classes.coloredShadow}
														style={{
															backgroundImage: `url(${blog7})`,
															opacity: "1"
														}}
													/>
												</CardHeader>
											</GridItem>
											<GridItem xs={12} sm={6} md={6}>
												{/*<Success>*/}
												{/*		<h6 className={classes.cardCategory}>Tiê</h6>*/}
												{/*</Success>*/}
												<h6 className={classes.cardTitle} style={{ margin: '0px' }}>
													<a>
														Lyft launching cross-platform service this week
																										</a>
												</h6>
												<p className={classes.author} style={{ fontSize: "12px" }}>
													by{" "}
													<a href="#pablo" onClick={e => e.preventDefault()}>
														<b>Megan Rose</b>
													</a>{" "}
																										, 2 days ago
																								</p>
											</GridItem>
										</GridContainer>
									</Card>
									<Card plain blog className={classes.card}>
										<GridContainer>
											<GridItem xs={12} sm={6} md={6}>
												<CardHeader image plain>
													<a href="#pablito" onClick={e => e.preventDefault()}>
														<img src={blog7} alt="..." />
													</a>
													<div
														className={classes.coloredShadow}
														style={{
															backgroundImage: `url(${blog7})`,
															opacity: "1"
														}}
													/>
													<div
														className={classes.coloredShadow}
														style={{
															backgroundImage: `url(${blog7})`,
															opacity: "1"
														}}
													/>
												</CardHeader>
											</GridItem>
											<GridItem xs={12} sm={6} md={6}>
												{/*<Success>*/}
												{/*		<h6 className={classes.cardCategory}>Tiê</h6>*/}
												{/*</Success>*/}
												<h6 className={classes.cardTitle} style={{ margin: '0px' }}>
													<a>
														Lyft launching cross-platform service this week
																										</a>
												</h6>
												<p className={classes.author} style={{ fontSize: "12px" }}>
													by{" "}
													<a href="#pablo" onClick={e => e.preventDefault()}>
														<b>Megan Rose</b>
													</a>{" "}
																										, 2 days ago
																								</p>
											</GridItem>
										</GridContainer>
									</Card>
									<Card plain blog className={classes.card}>
										<GridContainer>
											<GridItem xs={12} sm={6} md={6}>
												<CardHeader image plain>
													<a href="#pablito" onClick={e => e.preventDefault()}>
														<img src={blog7} alt="..." />
													</a>
													<div
														className={classes.coloredShadow}
														style={{
															backgroundImage: `url(${blog7})`,
															opacity: "1"
														}}
													/>
													<div
														className={classes.coloredShadow}
														style={{
															backgroundImage: `url(${blog7})`,
															opacity: "1"
														}}
													/>
												</CardHeader>
											</GridItem>
											<GridItem xs={12} sm={6} md={6}>
												{/*<Success>*/}
												{/*		<h6 className={classes.cardCategory}>Tiê</h6>*/}
												{/*</Success>*/}
												<h6 className={classes.cardTitle} style={{ margin: '0px' }}>
													<a>
														Lyft launching cross-platform service this week
																										</a>
												</h6>
												<p className={classes.author} style={{ fontSize: "12px" }}>
													by{" "}
													<a href="#pablo" onClick={e => e.preventDefault()}>
														<b>Megan Rose</b>
													</a>{" "}
																										, 2 days ago
																								</p>
											</GridItem>
										</GridContainer>
									</Card>
									<Card plain blog className={classes.card}>
										<GridContainer>
											<GridItem xs={12} sm={6} md={6}>
												<CardHeader image plain>
													<a href="#pablito" onClick={e => e.preventDefault()}>
														<img src={blog7} alt="..." />
													</a>
													<div
														className={classes.coloredShadow}
														style={{
															backgroundImage: `url(${blog7})`,
															opacity: "1"
														}}
													/>
													<div
														className={classes.coloredShadow}
														style={{
															backgroundImage: `url(${blog7})`,
															opacity: "1"
														}}
													/>
												</CardHeader>
											</GridItem>
											<GridItem xs={12} sm={6} md={6}>
												{/*<Success>*/}
												{/*		<h6 className={classes.cardCategory}>Tiê</h6>*/}
												{/*</Success>*/}
												<h6 className={classes.cardTitle} style={{ margin: '0px' }}>
													<a>
														Lyft launching cross-platform service this week
																										</a>
												</h6>
												<p className={classes.author} style={{ fontSize: "12px" }}>
													by{" "}
													<a href="#pablo" onClick={e => e.preventDefault()}>
														<b>Megan Rose</b>
													</a>{" "}
																										, 2 days ago
																								</p>
											</GridItem>
										</GridContainer>
									</Card>
									<Card plain blog className={classes.card}>
										<GridContainer>
											<GridItem xs={12} sm={6} md={6}>
												<CardHeader image plain>
													<a href="#pablito" onClick={e => e.preventDefault()}>
														<img src={blog7} alt="..." />
													</a>
													<div
														className={classes.coloredShadow}
														style={{
															backgroundImage: `url(${blog7})`,
															opacity: "1"
														}}
													/>
													<div
														className={classes.coloredShadow}
														style={{
															backgroundImage: `url(${blog7})`,
															opacity: "1"
														}}
													/>
												</CardHeader>
											</GridItem>
											<GridItem xs={12} sm={6} md={6}>
												{/*<Success>*/}
												{/*		<h6 className={classes.cardCategory}>Tiê</h6>*/}
												{/*</Success>*/}
												<h6 className={classes.cardTitle} style={{ margin: '0px' }}>
													<a>
														Lyft launching cross-platform service this week
																										</a>
												</h6>
												<p className={classes.author} style={{ fontSize: "12px" }}>
													by{" "}
													<a href="#pablo" onClick={e => e.preventDefault()}>
														<b>Megan Rose</b>
													</a>{" "}
																										, 2 days ago
																								</p>
											</GridItem>
										</GridContainer>
									</Card>
								</GridItem>
							</GridContainer>
						</Card>
					</GridItem>
				</GridContainer>
			</div>
			<VFooter />
		</div>
	);
}
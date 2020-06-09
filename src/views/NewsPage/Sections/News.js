import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import {
		Link
} from "react-router-dom";
// style for page
import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";
import Danger from "components/Typography/Danger.js";
import TrendingUp from "@material-ui/icons/TrendingUp";

const useStyles = makeStyles(blogsStyle);

export default function News() {
		const classes = useStyles();
		return (
				<div className={classes.blog} style={{padding: '0px'}}>
						<div className={classes.container}>
								<GridContainer>
										<GridItem
												xs={12}
												sm={10}
												md={10}
												className={classes.mlAuto + " " + classes.mrAuto}
										>
												<Card plain blog className={classes.card}>
														<GridContainer>
																<GridItem xs={12} sm={5} md={5}>
																		<CardHeader image plain>
																				<Link to="/detail">
																						<img
																								src="https://media.kenhtuyensinh.vn/images/cms/2019/02/dai-hoc-thuy-loi.jpg"
																								alt="..."/>
																				</Link>
																				<div
																						className={classes.coloredShadow}
																						style={{
																								backgroundImage: `url(https://media.kenhtuyensinh.vn/images/cms/2019/02/dai-hoc-thuy-loi.jpg)`,
																								opacity: "1"
																						}}
																				/>
																		</CardHeader>
																</GridItem>
																<GridItem xs={12} sm={7} md={7}>
																		<h3 className={classes.cardTitle}>
																				<Link to="/detail">
																						Autodesk looks to future of 3D printing with Project
																						Escher
																				</Link>
																		</h3>
																		<p className={classes.description1}>
																				Like so many organizations these days, Autodesk is a
																				company in transition. It was until recently a traditional
																				boxed software company selling licenses. Today, it’s
																				moving to a subscription model. Yet its own business model
																				disruption is only part of the story — and…
																				<Link to="/">
																						{" "}
																						Read More{" "}
																				</Link>
																		</p>
																		<p className={classes.author}>
																				by{" "}
																				<b>Mike Butcher</b>
																				{" "}
																				, 2 days ago
																		</p>
																</GridItem>
														</GridContainer>
												</Card>
												<Card plain blog className={classes.card}>
														<GridContainer>
																<GridItem xs={12} sm={7} md={7}>
																		<h3 className={classes.cardTitle}>
																				<Link to="/">
																						6 insights into the French Fashion landscape
																				</Link>
																		</h3>
																		<p className={classes.description1}>
																				Like so many organizations these days, Autodesk is a
																				company in transition. It was until recently a traditional
																				boxed software company selling licenses. Today, it’s
																				moving to a subscription model. Yet its own business model
																				disruption is only part of the story — and…
																				<Link to="/">
																						{" "}
																						Read More{" "}
																				</Link>
																		</p>
																		<p className={classes.author}>
																				by{" "}
																				<b>Mike Butcher</b>
																				{" "}
																				, 2 days ago
																		</p>
																</GridItem>
																<GridItem xs={12} sm={5} md={5}>
																		<CardHeader image plain>
																				<Link to="/">
																						<img
																								src="https://tuyensinhvietnam.vn/wp-content/uploads/2020/03/phuong-an-tuyen-sinh-dai-hoc-thuy-loi-co-so-2-tphcm-nam-2020.jpg"
																								alt="..."/>
																				</Link>
																				<div
																						className={classes.coloredShadow}
																						style={{
																								backgroundImage: `url(https://tuyensinhvietnam.vn/wp-content/uploads/2020/03/phuong-an-tuyen-sinh-dai-hoc-thuy-loi-co-so-2-tphcm-nam-2020.jpg)`,
																								opacity: "1"
																						}}
																				/>
																		</CardHeader>
																</GridItem>
														</GridContainer>
												</Card>
										</GridItem>
								</GridContainer>
						</div>
				</div>
		);
}
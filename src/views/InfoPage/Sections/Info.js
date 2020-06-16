import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui icons
import FormatPaint from "@material-ui/icons/FormatPaint";
import Code from "@material-ui/icons/Code";
import Dashboard from "@material-ui/icons/Dashboard";
import Timeline from "@material-ui/icons/Timeline";
import Group from "@material-ui/icons/Group";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Badge from "components/Badge/Badge.js";
import {
		Link
} from "react-router-dom";

// style for page
import "./Style.scss";
import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.js";

const useStyles = makeStyles(projectsStyle);

export default function Info() {
		
		const classes = useStyles();
		return (
				<div className={classes.projects + " " + classes.projects4}>
						<div className={classes.container}>
								<GridContainer>
										<GridItem
												xs={12}
												sm={8}
												md={8}
												className={
														classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
												}
										>
												<h2 className={classes.title}>
														Khoa Công Nghệ Thông Tin
												</h2>
												<h5 className={classes.description}>
														Công Nghệ Thông Tin, Hệ Thống Thông Tin, Phần Mềm
												</h5>
												<div className={classes.sectionSpace}/>
										</GridItem>
								</GridContainer>
								<GridContainer>
										<GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
												<Card className="no-bg"
															background="transparenr"
															style={{backgroundImage: `url(http://www.tlu.edu.vn/Portals/0/2018/Thang%204/0K4A6894.JPG)`}}
												>
														<CardBody background="transparenr" className="no-bg">
														
														</CardBody>
												</Card>
										</GridItem>
										<GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
												<InfoArea
														className={classes.info4}
														title="Graphic Design"
														description="We've created the design of the website using modern Technologies like Sketch. It was a very interesting collaboration."
														icon={FormatPaint}
														iconColor="info"
												/>
												<InfoArea
														className={classes.info4}
														title="Fully Coded in HTML5"
														description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
														icon={Code}
														iconColor="primary"
												/>
												<InfoArea
														className={classes.info4}
														title="CMS Admin Dashboard"
														description="There is also a Fully Customizable CMS Admin Dashboard for this product."
														icon={Dashboard}
														iconColor="danger"
												/>
										</GridItem>
								</GridContainer>
								<hr/>
								<GridContainer>
										<GridItem xs={12} sm={5} md={5} className={classes.mlAuto}>
												<InfoArea
														className={classes.info4}
														title="Marketing"
														description="We've created the marketing campaign of the website. It was a very interesting collaboration."
														icon={Timeline}
														iconColor="rose"
												/>
												<InfoArea
														className={classes.info4}
														title="Fully Coded in HTML5"
														description="We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub."
														icon={Code}
														iconColor="success"
												/>
												<InfoArea
														className={classes.info4}
														title="Built Audience"
														description="There is also a Fully Customizable CMS Admin Dashboard for this product."
														icon={Group}
														iconColor="info"
												/>
										</GridItem>
										<GridItem xs={12} sm={5} md={5} className={classes.mrAuto}>
												<Card
														background
														className="no-bg"
														style={{backgroundImage: `url(https://lh3.googleusercontent.com/proxy/0qGgf3PhpWRYczRoIF2qXOv8C6ozJPFcFcEcchtlPzEGND1CyJRo7u65SFgKL1FklvqKi4bVleMI7bPOh1rN9-bq2GAmlKehySVLrnDRIbFLUdc)`}}
												>
														<CardBody background className="no-bg">
														
														</CardBody>
												</Card>
										</GridItem>
								</GridContainer>
						</div>
				</div>
		);
}
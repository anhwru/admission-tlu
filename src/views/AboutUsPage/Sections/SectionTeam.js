import React from "react";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Muted from "components/Typography/Muted.js";
import Button from "components/CustomButtons/Button.js";

import cardProfile1Square from "assets/img/faces/card-profile1-square.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";
import cardProfile4Square from "assets/img/faces/card-profile4-square.jpg";
import cardProfile6Square from "assets/img/faces/card-profile6-square.jpg";

import teamsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/teamsStyle.js";
import teamStyle from "assets/jss/material-kit-pro-react/views/landingPageSections/teamStyle.js";

const style = {
		...teamsStyle,
		...teamStyle,
		justifyContentCenter: {
				justifyContent: "center"
		}
};

const useStyles = makeStyles(style);

export default function SectionTeam() {
		const classes = useStyles();
		return (
				<div className={classes.section}>
						<h2 className={classes.title}>Ban giám hiệu</h2>
						<div>
								<GridContainer>
										<GridItem xs={12} sm={6} md={6}>
												<Card profile plain className={classes.card3}>
														<GridContainer>
																<GridItem xs={12} sm={5} md={5}>
																		<CardHeader image plain>
																				<a className="set-img">
																						<img
																								src={"https://khoahocphattrien.vn/Images/Uploaded/Share/2016/11/24/01fgs-ts-trinh-minh-thu.gif"}
																								alt="..."/>
																				</a>
																				<div
																						className={classes.coloredShadow}
																						style={{
																								backgroundImage: `url(https://khoahocphattrien.vn/Images/Uploaded/Share/2016/11/24/01fgs-ts-trinh-minh-thu.gif)`,
																								opacity: "1"
																						}}
																				/>
																		</CardHeader>
																</GridItem>
																<GridItem xs={12} sm={7} md={7}>
																		<CardBody plain>
																				<h4 className={classes.cardTitle}>GS.TS.Trịnh Minh Thụ </h4>
																				<Muted>
																						<h6 className={classes.cardCategory}>Hiệu trưởng</h6>
																				</Muted>
																				<p className={classes.description}>
																						Giáo Sư - Tiến Sĩ Trịnh Minh Thụ đạt nhiều thành tự to lớn trong công cuộc
																						phát triển nhà trường lớn mạnh
																				</p>
																		</CardBody>
																		<CardFooter plain className={classes.justifyContentCenter}>
																				<Button justIcon simple color="twitter">
																						<i className="fab fa-twitter"/>
																				</Button>
																				<Button justIcon simple color="facebook">
																						<i className="fab fa-facebook-square"/>
																				</Button>
																				<Button justIcon simple color="google">
																						<i className="fab fa-google"/>
																				</Button>
																		</CardFooter>
																</GridItem>
														</GridContainer>
												</Card>
										</GridItem>
										<GridItem xs={12} sm={6} md={6}>
												<Card profile plain className={classes.card3}>
														<GridContainer>
																<GridItem xs={12} sm={5} md={5}>
																		<CardHeader image plain>
																				<a className="set-img">
																						<img
																								src={"data:image/jpeg;base64,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"}
																								alt="..."/>
																				</a>
																				<div
																						className={classes.coloredShadow}
																						style={{
																								backgroundImage: `url(data:image/jpeg;base64,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)`,
																								opacity: "1"
																						}}
																				/>
																		</CardHeader>
																</GridItem>
																<GridItem xs={12} sm={7} md={7}>
																		<CardBody plain>
																				<h4 className={classes.cardTitle}>KPGS.TS. Nguyễn Cảnh Thái</h4>
																				<Muted>
																						<h6 className={classes.cardCategory}>Phó Hiệu Trưởng</h6>
																				</Muted>
																				<p className={classes.description}>
																						Don{"'"}t be scared of the truth because we need to
																						restart the human foundation in truth...
																				</p>
																		</CardBody>
																		<CardFooter plain className={classes.justifyContentCenter}>
																				<Button justIcon simple color="linkedin">
																						<i className="fab fa-linkedin-in"/>
																				</Button>
																				<Button justIcon simple color="facebook">
																						<i className="fab fa-facebook-square"/>
																				</Button>
																				<Button justIcon simple color="dribbble">
																						<i className="fab fa-dribbble"/>
																				</Button>
																				<Button justIcon simple color="google">
																						<i className="fab fa-google"/>
																				</Button>
																		</CardFooter>
																</GridItem>
														</GridContainer>
												</Card>
										</GridItem>
										<GridItem xs={12} sm={6} md={6}>
												<Card profile plain className={classes.card3}>
														<GridContainer>
																<GridItem xs={12} sm={5} md={5}>
																		<CardHeader image plain>
																				<a className="set-img">
																						<img
																								src={"data:image/jpeg;base64,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"}
																								alt="..."/>
																				</a>
																				<div
																						className={classes.coloredShadow}
																						style={{
																								backgroundImage: `url(data:image/jpeg;base64,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)`,
																								opacity: "1"
																						}}
																				/>
																		</CardHeader>
																</GridItem>
																<GridItem xs={12} sm={7} md={7}>
																		<CardBody plain>
																				<h4 className={classes.cardTitle}>PGS.TS Trần Viết Ổn</h4>
																				<Muted>
																						<h6 className={classes.cardCategory}>Phó Hiệu Trưởng</h6>
																				</Muted>
																				<p className={classes.description}>
																						I love you like Kanye loves Kanye. Don{"'"}t be scared of
																						the truth.
																				</p>
																		</CardBody>
																		<CardFooter plain className={classes.justifyContentCenter}>
																				<Button justIcon simple color="youtube">
																						<i className="fab fa-youtube"/>
																				</Button>
																				<Button justIcon simple color="twitter">
																						<i className="fab fa-twitter"/>
																				</Button>
																				<Button justIcon simple color="instagram">
																						<i className="fab fa-instagram"/>
																				</Button>
																		</CardFooter>
																</GridItem>
														</GridContainer>
												</Card>
										</GridItem>
										<GridItem xs={12} sm={6} md={6}>
												<Card profile plain className={classes.card3}>
														<GridContainer>
																<GridItem xs={12} sm={5} md={5}>
																		<CardHeader image plain>
																				<a className="set-img">
																						<img
																								src={"https://lh3.googleusercontent.com/proxy/IXS3Uc5hrfEyjhiCxudTteFX8DuHxoW7zCYRu0ZCyI47RQGhVP8tYwTBLXMdnM6I81sv018q9xXmzxI8woK_t3vtdI8"}
																								alt="..."/>
																				</a>
																				<div
																						className={classes.coloredShadow}
																						style={{
																								backgroundImage: `url(https://lh3.googleusercontent.com/proxy/IXS3Uc5hrfEyjhiCxudTteFX8DuHxoW7zCYRu0ZCyI47RQGhVP8tYwTBLXMdnM6I81sv018q9xXmzxI8woK_t3vtdI8)`,
																								opacity: "1"
																						}}
																				/>
																		</CardHeader>
																</GridItem>
																<GridItem xs={12} sm={7} md={7}>
																		<CardBody plain>
																				<h4 className={classes.cardTitle}>GS.TS. Nguyễn Trung Việt</h4>
																				<Muted>
																						<h6 className={classes.cardCategory}>Phó Hiệu Trưởng</h6>
																				</Muted>
																				<p className={classes.description}>
																						I love you like Kanye loves Kanye. Don{"'"}t be scared of
																						the truth.
																				</p>
																		</CardBody>
																		<CardFooter plain className={classes.justifyContentCenter}>
																				<Button justIcon simple color="linkedin">
																						<i className="fab fa-linkedin-in"/>
																				</Button>
																				<Button justIcon simple color="facebook">
																						<i className="fab fa-facebook-square"/>
																				</Button>
																				<Button justIcon simple color="google">
																						<i className="fab fa-google"/>
																				</Button>
																		</CardFooter>
																</GridItem>
														</GridContainer>
												</Card>
										</GridItem>
								</GridContainer>
						</div>
				</div>
		);
}

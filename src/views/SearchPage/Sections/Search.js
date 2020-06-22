import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui icons
import Mail from "@material-ui/icons/Mail";
import Subtitles from "@material-ui/icons/Subtitles";

import bg7 from "assets/img/bg7.jpg";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js";

const useStyles = makeStyles(styles);

export default function Search() {
		const classes = useStyles();
		return (
				<div
						className={classNames(
								classes.subscribeLine,
								classes.subscribeLineImage
						)}
						style={{
								backgroundImage: `url(${bg7})`,
								backgroundPosition: 'right',
								backgroundSize: 'cover',
								objectFit: 'cover',
								height:'70vh'
						}}
				>
						<div className={classes.container}>
								<GridContainer>
										<GridItem
												xs={12}
												sm={6}
												md={6}
												className={classNames(classes.mlAuto, classes.mrAuto)}
										>
												<div className={classes.textCenter}>
														<h3 className={classes.title}>Tìm kiếm hồ sơ của bạn</h3>
														<p className={classes.description} style={{color:'white'}}>
																Nhập số CMND / Căn cước Công dân bạn đã đăng ký xét tuyển để xem hồ sơ và kết quả của
																mình
														</p>
												</div>
												<Card raised className={classes.card}>
														<CardBody className={classes.cardBody}>
																<form>
																		<GridContainer>
																				<GridItem xs={12} sm={6} md={6} lg={8}>
																						<CustomInput
																								id="emailPreFooter"
																								formControlProps={{
																										fullWidth: true,
																										className: classes.cardForm
																								}}
																								inputProps={{
																										startAdornment: (
																												<InputAdornment position="start">
																														<Subtitles/>
																												</InputAdornment>
																										),
																										placeholder: "Số CMND/CCCD..."
																								}}
																						/>
																				</GridItem>
																				<GridItem xs={12} sm={6} md={6} lg={4}>
																						<Button
																								color="info"
																								block
																								className={classes.subscribeButton}
																						>
																								Tìm kiếm
																						</Button>
																				</GridItem>
																		</GridContainer>
																</form>
														</CardBody>
												</Card>
										</GridItem>
								</GridContainer>
						</div>
				</div>
		);
}

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import {useState} from "react";
import TextField from '@material-ui/core/TextField';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import {
		Redirect
} from "react-router-dom";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
		const [cmnd, setCmnd] = React.useState();
		const [chuyenTrang, setChuyenTrang] = React.useState();
		const classes = useStyles();
		
		const [openDialog, setOpenDialog] = React.useState(false);
		const [stateAlert, setStateAlert] = React.useState("");
		const handleClose = () => {
				setOpenDialog(false);
		};
		
		const handleChange = (event) => {
				const value = event.target.value;
				setCmnd(prevState => ({
						...prevState,
						cmnd: value
				}))
		};
		
		const handleClick = async () => {
				
				const requestOptions = {
						method: 'POST',
						headers: {'Content-Type': 'application/json'},
						body: JSON.stringify(cmnd)
				};
				
				try {
						const response = await fetch('http://127.0.0.1:8000/api/infobycmnd', requestOptions);
						const data = await response.json();
						if (data.status == "true") {
								setChuyenTrang(<Redirect to={{pathname: `/ho-so/${data.hoso.id}`}}/>)
						}
						if (data.status == "false") {
								setOpenDialog(true);
								setStateAlert("Không tìm thấy số CMND");
						}
				} catch (error) {
						console.log(error);
				}
		};
		
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
								height: '70vh'
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
														<p className={classes.description}>
																Nhập số CMND / Căn cước Công dân bạn đã đăng ký xét tuyển để xem hồ sơ và kết quả của
																mình
														</p>
												</div>
												<Card raised className={classes.card}>
														<CardBody className={classes.cardBody}>
																<form>
																		<GridContainer>
																				<GridItem xs={12} sm={6} md={6} lg={8}>
																						<TextField id="email" name="email" type="number" onChange={handleChange}
																											 label="Số CMND" variant="standard" required={true}/>
																				</GridItem>
																				<GridItem xs={12} sm={6} md={6} lg={4}>
																						<Button
																								color="info"
																								block
																								className={classes.subscribeButton}
																								onClick={handleClick}
																						>
																								Tìm kiếm
																						</Button>
																				</GridItem>
																				{chuyenTrang}
																		</GridContainer>
																</form>
														</CardBody>
												</Card>
										</GridItem>
										<Dialog
												open={openDialog}
												onClose={handleClose}
												aria-labelledby="alert-dialog-title"
												aria-describedby="alert-dialog-description"
										>
												<DialogTitle id="alert-dialog-title">THÔNG BÁO</DialogTitle>
												<DialogContent>
														<DialogContentText id="alert-dialog-description">
																{stateAlert}
														</DialogContentText>
												</DialogContent>
												<DialogActions>
														<Button onClick={handleClose} color="primary">
																Đóng
														</Button>
												</DialogActions>
										</Dialog>
								</GridContainer>
						</div>
				</div>
		);
}

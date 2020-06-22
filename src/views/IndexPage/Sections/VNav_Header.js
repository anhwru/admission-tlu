import React from "react";
import {
		Link
} from "react-router-dom";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
// @material-ui/icons
import Info from "@material-ui/icons/Info";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Create from "@material-ui/icons/Create";
import Search from "@material-ui/icons/Search";
import Assignment from "@material-ui/icons/Assignment";
// core components
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import navbarsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.js";
import Headroom from "headroom.js";
import logo from "assets/img/tlu.png";

const useStyles = makeStyles(navbarsStyle);

function VNav_Header() {
		const classes = useStyles();
		React.useEffect(() => {
				let headroom = new Headroom(document.getElementById("nav-header"));
				headroom.init();
		});
		return (
				<div id="nav-header">
						<Header
								fixed
								color="white"
								links={
										<>
												<List className="logo">
														<Link to="/">
																<img src={logo} alt="" style={{width: '50px', height: '60px'}}/>
																<span className="brand-info">TRƯỜNG ĐẠI HỌC THỦY LỢI</span>
														</Link>
												</List>
												<List className={classes.list + " " + classes.mlAuto}>
														<ListItem className={classes.listItem}>
																<Link to="/">
																		<Button
																				className={classes.navLink + " " + classes.navLinkActive}
																				color="transparent"
																		>
																				<Create/> Đăng ký xét tuyển
																		</Button>
																</Link>
														</ListItem>
														<ListItem className={classes.listItem}>
																<CustomDropdown
																		buttonIcon={Assignment}
																		buttonText="Thông tin tuyển sinh"
																		buttonProps={{
																				className: classes.navLink,
																				color: "transparent"
																		}}
																		dropdownList={[
																				<Link to="thong-tin-cac-nganh">
																						<Button
																								color="transparent">
																								<AccountCircle/> Thông tin các ngành
																						</Button>
																				</Link>,
																				<Link to="thong-tin-tuyen-sinh">
																						<Button
																								color="transparent">
																								<AccountCircle/> Thông tin tuyển sinh
																						</Button>
																				</Link>,
																		]}
																/>
														</ListItem>
														<ListItem className={classes.listItem}>
																<Link to="/tim-kiem-ho-so">
																		<Button
																				className={classes.navLink + " " + classes.navLinkActive}
																				color="transparent"
																		>
																				<Search/> Tìm kiếm hồ sơ
																		</Button>
																</Link>
														</ListItem>
														<ListItem className={classes.listItem}>
																<Link to="gioi-thieu">
																		<Button
																				className={classes.navLink}
																				color="transparent">
																				<Info/> Giới thiệu
																		</Button>
																</Link>
														</ListItem>
												</List>
										</>
								}
						/>
				</div>
		);
}

export default VNav_Header;
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
import Explore from "@material-ui/icons/Explore";
import Assignment from "@material-ui/icons/Assignment";
// core components
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import navbarsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.js";
// import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js";
import Headroom from "headroom.js";
import logo from "assets/img/tlu.png";
// import Slide from "@material-ui/core/Slide";
// import Mail from "@material-ui/icons/Mail";
// import Face from "@material-ui/icons/Face";
// import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardBody from "components/Card/CardBody.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";


const useStyles = makeStyles(navbarsStyle);
// const jsstyle = makeStyles(javascriptStyles);

// const Transition = React.forwardRef(function Transition(props, ref) {
// 		return <Slide direction="down" ref={ref} {...props} />;
// });

function VNav_Header() {
		// const [loginModal, setLoginModal] = React.useState(false);
		// const [signupModal, setSignupModal] = React.useState(false);
		// const [checked, setChecked] = React.useState([]);
		const classes = useStyles();
		// const classes2 = jsstyle();
		// const handleToggle = value => {
		// 		const currentIndex = checked.indexOf(value);
		// 		const newChecked = [...checked];
				
		// 		if (currentIndex === -1) {
		// 				newChecked.push(value);
		// 		} else {
		// 				newChecked.splice(currentIndex, 1);
		// 		}
		// 		setChecked(newChecked);
		// };
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
																				<Explore/> Đăng ký xét tuyển
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
																								<AccountCircle/> Thông báo tuyển sinh
																						</Button>
																				</Link>,
																		]}
																/>
														</ListItem>
														<ListItem className={classes.listItem}>
																<Link to="tu-van-tuyen-sinh">
																		<Button
																				className={classes.navLink}
																				color="transparent"
																		>
																				<Assignment/> Tư vấn tuyển sinh
																		</Button>
																</Link>
														</ListItem>
														<ListItem className={classes.listItem}>
																<Link to="gioi-thieu">
																		<Button
																				className={classes.navLink}
																				color="transparent"
																		>
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
import React from "react";
import {
		BrowserRouter as Router,
		Switch,
		Route,
		Link
} from "react-router-dom";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Badge from '@material-ui/core/Badge';
// @material-ui/icons
import Settings from "@material-ui/icons/Settings";
import Info from "@material-ui/icons/Info";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
import Assignment from "@material-ui/icons/Assignment";
// core components
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import navbarsStyle from "assets/jss/material-kit-pro-react/views/componentsSections/navbarsStyle.js";
import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js";
import Headroom from "headroom.js";
import logo from "assets/img/tlu.png";
import DialogTitle from "@material-ui/core/DialogTitle";
import Close from "@material-ui/core/SvgIcon/SvgIcon";
import DialogContent from "@material-ui/core/DialogContent";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import DialogActions from "@material-ui/core/DialogActions";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import Mail from "@material-ui/icons/Mail";
import Face from "@material-ui/icons/Face";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";


const useStyles = makeStyles(navbarsStyle);
const jsstyle = makeStyles(javascriptStyles);

const Transition = React.forwardRef(function Transition(props, ref) {
		return <Slide direction="down" ref={ref} {...props} />;
});

function VNav_Header() {
		const [loginModal, setLoginModal] = React.useState(false);
		const [signupModal, setSignupModal] = React.useState(false);
		const [checked, setChecked] = React.useState([]);
		const classes = useStyles();
		const classes2 = jsstyle();
		const handleToggle = value => {
				const currentIndex = checked.indexOf(value);
				const newChecked = [...checked];
				
				if (currentIndex === -1) {
						newChecked.push(value);
				} else {
						newChecked.splice(currentIndex, 1);
				}
				setChecked(newChecked);
		};
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
																<img src={logo} style={{width: '50px', height: '60px'}}/>
																<span className="brand-info">TRƯỜNG ĐẠI HỌC THỦY LỢI</span>
														</Link>
												</List>
												<List className={classes.list + " " + classes.mlAuto}>
														<ListItem className={classes.listItem}>
																<Link to="/components">
																		<Button
																				className={classes.navLink + " " + classes.navLinkActive}
																				color="transparent"
																		>
																				<Explore/> Đăng ký xét tuyển
																		</Button>
																</Link>
														</ListItem>
														<ListItem className={classes.listItem}>
																<Button
																		className={classes.navLink}
																		onClick={e => e.preventDefault()}
																		color="transparent"
																>
																		<Info/> Giới thiệu
																</Button>
														</ListItem>
														<ListItem className={classes.listItem}>
																<Button
																		href="#pablo"
																		className={classes.navLink}
																		onClick={e => e.preventDefault()}
																		color="transparent"
																>
																		<Assignment/> Tư vấn tuyển sinh
																</Button>
														</ListItem>
														<ListItem className={classes.listItem}>
																<Button className={classes.navLink}
																				color="transparent"
																				onClick={() => setLoginModal(true)}>
																		<AccountCircle/> Thông tin tuyển sinh
																</Button>
														</ListItem>
												</List>
										</>
								}
						/>
				</div>
		);
}

export default VNav_Header;
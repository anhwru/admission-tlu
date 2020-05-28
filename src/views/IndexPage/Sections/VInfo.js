import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui icons
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import TextField from '@material-ui/core/TextField';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
// style for page
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js";
import formstyles from "assets/jss/material-kit-pro-react/customSelectStyle.js";
import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js";
import Accordion from "components/Accordion/Accordion.js";
import FormControl from "@material-ui/core/FormControl";
import RUG from 'react-upload-gallery';
import Button from "components/CustomButtons/Button.js";

// Add style manually
import 'react-upload-gallery/dist/style.css'
import Navigation from "@material-ui/icons/Navigation";
import Refresh from "@material-ui/icons/Refresh";

const useStyles = makeStyles(styles);
const useJs = makeStyles(javascriptStyles);
const useFStyles = makeStyles(formstyles);
const useStyles1 = makeStyles((theme) => ({
		formControl: {
				margin: theme.spacing(1),
				minWidth: 120,
		},
		selectEmpty: {
				marginTop: theme.spacing(2),
		},
}));


export default function VInfo() {
		const [simpleSelect, setSimpleSelect] = React.useState("");
		const [chonnganh, setchonnganh] = React.useState("");
		const [chontohop, setchontohop] = React.useState("");
		const handleSimple = event => {
				setSimpleSelect(event.target.value);
		};
		const handchonnganh = event => {
				setchonnganh(event.target.value);
		};
		const handtohop = event => {
				setchontohop(event.target.value);
		};
		const classes = useStyles();
		const classesform = useFStyles();
		const classes1 = useStyles1();
		
		const [state, setState] = React.useState({
				age: '',
				name: 'hai',
		});
		
		const handleChange = (event) => {
				const name = event.target.name;
				setState({
						...state,
						[name]: event.target.value,
				});
		};
		
		return (
				<div className={classes.container} id="form-data">
						<GridContainer>
								<GridItem sm={12} xs={12} lg={12} className="mg-10">
										<SnackbarContent
												message={
														<span>
                             <b>THÔNG TIN ĐĂNG KÝ XÉT TUYỂN</b>
                         </span>
												}
												color="info"
												icon="info_outline"
										/>
								</GridItem>
								<GridItem xs={12} lg={12} md={12} className="class-mate">
										<span>Sau khi đã đọc và hiểu rõ các quy định về tiêu chí và điều kiện xét tuyển của Nhà trường, tôi đăng ký xét tuyển vào trình độ Đại học các Ngành/ Nhóm ngành/ Chuyên ngành/ Nhóm chuyên ngành theo thứ tự ưu tiên như bảng sau:</span>
								</GridItem>
								{/*Form nhập điểm cho thí sinh*/}
								<GridItem xs={12} sm={12} md={12} className="bg-e">
										<Accordion
												active={0}
												activeColor="info"
												collapses={[
														{
																title:
																		<GridContainer>
																				<GridItem xs={12} lg={12} md={12} className="mg-10">
																						<TextField label="Nguyện vọng" variant="outlined" required={true}/>
																				</GridItem>
																		</GridContainer>
																,
																content:
																		<div id="info-form">
																				<GridContainer>
																						<GridItem xs={4} lg={4} md={4} className="mg-10">
																								<FormControl variant="outlined" fullWidth
																														 className={classes1.formControl + " " + "outline-form"}>
																										<InputLabel htmlFor="outlined-grade-native-simple">Nhóm/Ngành/Chuyên
																												ngành</InputLabel>
																										<Select
																												MenuProps={{
																														className: classesform.selectMenu
																												}}
																												classes={{
																														select: classesform.select
																												}}
																												value={chonnganh}
																												onChange={handchonnganh}
																												inputProps={{
																														name: "simpleSelect",
																														id: "nganh"
																												}}
																										>
																												<MenuItem
																														classes={{
																																root: classesform.selectMenuItem,
																																selected: classesform.selectMenuItemSelected
																														}}
																														value="cntt"
																												>
																														Công nghệ thông tin
																												</MenuItem>
																												<MenuItem
																														classes={{
																																root: classesform.selectMenuItem,
																																selected: classesform.selectMenuItemSelected
																														}}
																														value="tnn"
																												>
																														Tài nguyên nước
																												</MenuItem>
																												<MenuItem
																														classes={{
																																root: classesform.selectMenuItem,
																																selected: classesform.selectMenuItemSelected
																														}}
																														value="ct"
																												>
																														Công Trình
																												</MenuItem>
																												<MenuItem
																														classes={{
																																root: classesform.selectMenuItem,
																																selected: classesform.selectMenuItemSelected
																														}}
																														value="mt"
																												>
																														Môi Trường
																												</MenuItem>
																										</Select>
																								</FormControl>
																						</GridItem>
																						<GridItem sm={4} xs={4} lg={4} className="mg-10">
																								<TextField id="outlined-basic" label="Mã ngành" variant="outlined"
																													 required={true} disabled={true}/>
																						</GridItem>
																						<GridItem xs={4} lg={4} md={4} className="mg-10">
																								<FormControl variant="outlined" fullWidth
																														 className={classes1.formControl + " " + "outline-form"}>
																										<InputLabel htmlFor="outlined-grade-native-simple">Tổ
																												hợp</InputLabel>
																										<Select
																												MenuProps={{
																														className: classesform.selectMenu
																												}}
																												classes={{
																														select: classesform.select
																												}}
																												value={chontohop}
																												onChange={handtohop}
																												inputProps={{
																														name: "simpleSelect",
																														id: "tohop"
																												}}
																										>
																												<MenuItem
																														classes={{
																																root: classesform.selectMenuItem,
																																selected: classesform.selectMenuItemSelected
																														}}
																														value="a0"
																												>
																														A00
																												</MenuItem>
																												<MenuItem
																														classes={{
																																root: classesform.selectMenuItem,
																																selected: classesform.selectMenuItemSelected
																														}}
																														value="a01"
																												>
																														A01
																												</MenuItem>
																												<MenuItem
																														classes={{
																																root: classesform.selectMenuItem,
																																selected: classesform.selectMenuItemSelected
																														}}
																														value="d01"
																												>
																														D01
																												</MenuItem>
																												<MenuItem
																														classes={{
																																root: classesform.selectMenuItem,
																																selected: classesform.selectMenuItemSelected
																														}}
																														value="d07"
																												>
																														D07
																												</MenuItem>
																										</Select>
																								</FormControl>
																						</GridItem>
																						<GridItem md={12} className="thpt">
																								<span>Điểm trung bình 3 năm THPT</span>
																						</GridItem>
																						
																						{/*Điểm theo từng lớp THPT*/}
																						<>
																								<GridItem className="class-line" sm={12} xs={12} lg={12}>
																										<span>- Lớp 10</span>
																								</GridItem>
																								<GridItem sm={4} xs={4} lg={4} className="mg-10">
																										<TextField id="outlined-basic" label="Môn thứ nhất"
																															 variant="outlined" required={true}/>
																								</GridItem>
																								<GridItem sm={4} xs={4} lg={4} className="mg-10">
																										<TextField id="outlined-basic" label="Môn thứ 2" variant="outlined"
																															 required={true}/>
																								</GridItem>
																								<GridItem sm={4} xs={4} lg={4} className="mg-10">
																										<TextField id="outlined-basic" label="Môn thứ 3" variant="outlined"
																															 required={true}/>
																								</GridItem>
																						</>
																						<>
																								<GridItem className="class-line" sm={12} xs={12} lg={12}>
																										<span>- Lớp 11</span>
																								</GridItem>
																								<GridItem sm={4} xs={4} lg={4} className="mg-10">
																										<TextField id="outlined-basic" label="Môn thứ nhất"
																															 variant="outlined" required={true}/>
																								</GridItem>
																								<GridItem sm={4} xs={4} lg={4} className="mg-10">
																										<TextField id="outlined-basic" label="Môn thứ 2" variant="outlined"
																															 required={true}/>
																								</GridItem>
																								<GridItem sm={4} xs={4} lg={4} className="mg-10">
																										<TextField id="outlined-basic" label="Môn thứ 3" variant="outlined"
																															 required={true}/>
																								</GridItem>
																						</>
																						<>
																								<GridItem className="class-line" sm={12} xs={12} lg={12}>
																										<span>- Lớp 12</span>
																								</GridItem>
																								<GridItem sm={4} xs={4} lg={4} className="mg-10">
																										<TextField id="outlined-basic" label="Môn thứ nhất"
																															 variant="outlined" required={true}/>
																								</GridItem>
																								<GridItem sm={4} xs={4} lg={4} className="mg-10">
																										<TextField id="outlined-basic" label="Môn thứ 2" variant="outlined"
																															 required={true}/>
																								</GridItem>
																								<GridItem sm={4} xs={4} lg={4} className="mg-10">
																										<TextField id="outlined-basic" label="Môn thứ 3" variant="outlined"
																															 required={true}/>
																								</GridItem>
																						</>
																				</GridContainer>
																		</div>
														},
												]}
										/>
								</GridItem>
								<GridItem xs={12} sm={12} md={12}>
										<RUG
												action="/api/upload" // upload route
												source={response => response.source} // response image source
										/>
								</GridItem>
								<GridItem md={12} lg={12} xs={12} className="submit">
										<Button color="success" round>
												<Navigation className={classes.icons}/> Đăng ký
										</Button>
										<Button color="rose" round>
												<Refresh className={classes.icons}/> Làm lại
										</Button>
								</GridItem>
						</GridContainer>
				</div>
		);
}
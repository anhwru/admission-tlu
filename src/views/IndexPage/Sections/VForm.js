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
import Navigation from "@material-ui/core/SvgIcon/SvgIcon";
import Refresh from "@material-ui/icons/Refresh";

// style for page
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js";
import formstyles from "assets/jss/material-kit-pro-react/customSelectStyle.js";
import {Fragment, useState} from "react";
import Autocomplete from '@material-ui/lab/Autocomplete';
import {DatePicker} from "@material-ui/pickers";
import FormControl from '@material-ui/core/FormControl';
import VLine from "./VLine";
import VLine2 from "./VLine2";
import RUG from "react-upload-gallery/dist";
import Accordion from "components/Accordion/Accordion.js";
import Button from "components/CustomButtons/Button.js";


const useStyles = makeStyles(styles);
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


export default function Admis_Form(props) {
		const [selectedDate, handleDateChange] = useState(new Date());
		const [selectedDate2, handleDateChange2] = useState(new Date());
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
		const top100Films = [
				{title: 'The Shawshank Redemption', year: 1994},
				{title: 'The Godfather', year: 1972},
				{title: 'The Godfather: Part II', year: 1974},
				{title: 'The Dark Knight', year: 2008},
				{title: '12 Angry Men', year: 1957},
		
		];
		return (
				<>
						<div className={classes.container} id="form-data">
								<GridContainer>
										<GridItem sm={12} xs={12} lg={12} className="mg-10">
												<SnackbarContent
														message={
																<span>
                             <b>THÔNG TIN THÍ SINH</b>
                         </span>
														}
														color="info"
														icon="info_outline"
												/>
										</GridItem>
								</GridContainer>
								<GridContainer>
										<GridItem sm={9} xs={9} lg={9} className="mg-10">
												<TextField id="outlined-basic" label="Họ tên thí sinh" variant="outlined" required={true}
												/>
										</GridItem>
										{/*Select*/}
										<GridItem xs={3} lg={3} md={3} className="mg-10">
												<FormControl variant="outlined" fullWidth
																		 className={classes1.formControl + " " + "outline-form sex-form"}>
														<InputLabel htmlFor="outlined-age-native-simple">Giới tính</InputLabel>
														<Select
																MenuProps={{
																		className: classesform.selectMenu
																}}
																classes={{
																		select: classesform.select
																}}
																value={simpleSelect}
																onChange={handleSimple}
																inputProps={{
																		name: "simpleSelect",
																		id: "simple-select"
																}}
														>
																<MenuItem
																		classes={{
																				root: classesform.selectMenuItem,
																				selected: classesform.selectMenuItemSelected
																		}}
																		value="1"
																>
																		Nam
																</MenuItem>
																<MenuItem
																		classes={{
																				root: classesform.selectMenuItem,
																				selected: classesform.selectMenuItemSelected
																		}}
																		value="2"
																>
																		Nữ
																</MenuItem>
														</Select>
												</FormControl>
										</GridItem>
										<GridItem xs={4} lg={4} md={4} className="mg-10">
												<Fragment>
														<DatePicker
																label="Ngày/Tháng/Năm sinh"
																inputVariant="outlined"
																value={selectedDate}
																onChange={handleDateChange}
																format="dd/MM/yyyy"
														/>
												</Fragment>
										</GridItem>
										<GridItem xs={4} lg={4} md={4} className="mg-10">
												<TextField id="place-birth" label="Nơi sinh" variant="outlined" required={true}/>
										</GridItem>
										<GridItem xs={4} lg={4} md={4} className="mg-10">
												<TextField id="nation" label="Dân tộc" variant="outlined" required={true}/>
										</GridItem>
										<GridItem sm={4} xs={4} lg={4} className="mg-10">
												<TextField label="Số CMND / Căn Cước Công Dân" variant="outlined" required={true}/>
										</GridItem>
										<GridItem xs={4} lg={4} md={4} className="mg-10">
												<Fragment>
														<DatePicker
																label="Ngày cấp"
																inputVariant="outlined"
																value={selectedDate2}
																onChange={handleDateChange2}
																format="dd/MM/yyyy"
														/>
												</Fragment>
										</GridItem>
										<GridItem sm={4} xs={4} lg={4} className="mg-10">
												<TextField label="Nơi Cấp" variant="outlined" required={true}/>
										</GridItem>
										<VLine/>
										<GridItem sm={12} xs={12} lg={12} className="mg-10">
												<TextField label="Hộ khẩu thường trú" variant="outlined" required={true}/>
										</GridItem>
										<GridItem xs={4} lg={4} md={4} className="mg-10">
												<Autocomplete
														id="combo-box-demo"
														options={top100Films}
														getOptionLabel={(option) => option.title}
														style={{width: '300',}}
														renderInput={(params) => <TextField {...params} label="Mã Tỉnh" variant="outlined"/>}
												/>
										</GridItem>
										<GridItem xs={4} lg={4} md={4} className="mg-10">
												<Autocomplete
														id="combo-box-demo"
														options={top100Films}
														getOptionLabel={(option) => option.title}
														style={{width: '300',}}
														renderInput={(params) => <TextField {...params} label="Mã Huyện" variant="outlined"/>}
												/>
										</GridItem>
										<GridItem sm={4} xs={4} lg={4} className="mg-10">
												<TextField label="Mã xã (Nếu có)" variant="outlined"/>
										</GridItem>
										<VLine2/>
										<GridItem xs={12} lg={12} md={12} className="class-mate">
												<span>Lớp 10</span>
										</GridItem>
										<GridItem xs={4} lg={4} md={4} className="mg-10">
												<Autocomplete
														id="combo-box-demo"
														options={top100Films}
														getOptionLabel={(option) => option.title}
														style={{width: '300',}}
														renderInput={(params) => <TextField {...params} label="Tên trường THPT"
																																variant="outlined"/>}
												/>
										</GridItem>
										<GridItem sm={4} xs={4} lg={4} className="mg-10">
												<TextField label="Địa chỉ" variant="outlined" required={true}/>
										</GridItem>
										<GridItem sm={2} xs={2} lg={2} className="mg-10">
												<TextField label="Mã tỉnh" variant="outlined" disabled={true}/>
										</GridItem>
										<GridItem sm={2} xs={2} lg={2} className="mg-10">
												<TextField label="Mã trường" variant="outlined" disabled={true}/>
										</GridItem>
										<GridItem xs={12} lg={12} md={12} className="class-mate">
												<span>Lớp 11</span>
										</GridItem>
										<GridItem xs={4} lg={4} md={4} className="mg-10">
												<Autocomplete
														id="combo-box-demo"
														options={top100Films}
														getOptionLabel={(option) => option.title}
														style={{width: '300',}}
														renderInput={(params) => <TextField {...params} label="Tên trường THPT"
																																variant="outlined"/>}
												/>
										</GridItem>
										<GridItem sm={4} xs={4} lg={4} className="mg-10">
												<TextField label="Địa chỉ" variant="outlined" required={true}/>
										</GridItem>
										<GridItem sm={2} xs={2} lg={2} className="mg-10">
												<TextField label="Mã tỉnh" variant="outlined" disabled={true}/>
										</GridItem>
										<GridItem sm={2} xs={2} lg={2} className="mg-10">
												<TextField label="Mã trường" variant="outlined" disabled={true}/>
										</GridItem>
										<GridItem xs={12} lg={12} md={12} className="class-mate">
												<span>Lớp 12</span>
										</GridItem>
										<GridItem xs={4} lg={4} md={4} className="mg-10">
												<Autocomplete
														id="combo-box-demo"
														options={top100Films}
														getOptionLabel={(option) => option.title}
														style={{width: '300',}}
														renderInput={(params) => <TextField {...params} label="Tên trường THPT"
																																variant="outlined"/>}
												/>
										</GridItem>
										<GridItem sm={4} xs={4} lg={4} className="mg-10">
												<TextField label="Địa chỉ" variant="outlined" required={true}/>
										</GridItem>
										<GridItem sm={2} xs={2} lg={2} className="mg-10">
												<TextField label="Mã tỉnh" variant="outlined" disabled={true}/>
										</GridItem>
										<GridItem sm={2} xs={2} lg={2} className="mg-10">
												<TextField label="Mã trường" variant="outlined" disabled={true}/>
										</GridItem>
										<GridItem sm={6} xs={6} lg={6} className="mg-10">
												<TextField label="Điện thoại liên lạc" variant="outlined" required={true}/>
										</GridItem>
										<GridItem sm={6} xs={6} lg={6} className="mg-10">
												<TextField label="Email" variant="outlined" required={true}/>
										</GridItem>
										<GridItem sm={12} xs={12} lg={12} className="mg-10">
												<TextField label="Địa chỉ liên hệ" variant="outlined" required={true}/>
										</GridItem>
										<GridItem sm={4} xs={4} lg={4} className="mg-10">
												<TextField label="Năm tốt nghiệp" variant="outlined" required={true}/>
										</GridItem>
										<GridItem xs={4} lg={4} md={4} className="mg-10">
												<FormControl variant="outlined" fullWidth
																		 className={classes1.formControl + " " + "outline-form"}>
														<InputLabel htmlFor="outlined-age-native-simple">Khu vực ưu tiên</InputLabel>
														<Select
																MenuProps={{
																		className: classesform.selectMenu
																}}
																classes={{
																		select: classesform.select
																}}
																value={simpleSelect}
																onChange={handleSimple}
																inputProps={{
																		name: "simpleSelect",
																		id: "simple-select"
																}}
														>
																<MenuItem
																		classes={{
																				root: classesform.selectMenuItem,
																				selected: classesform.selectMenuItemSelected
																		}}
																		value="1"
																>
																		KV1
																</MenuItem>
																<MenuItem
																		classes={{
																				root: classesform.selectMenuItem,
																				selected: classesform.selectMenuItemSelected
																		}}
																		value="2"
																>
																		KV3
																</MenuItem>
														</Select>
												</FormControl>
										</GridItem>
										<GridItem xs={4} lg={4} md={4} className="mg-10">
												<FormControl variant="outlined" fullWidth
																		 className={classes1.formControl + " " + "outline-form"}>
														<InputLabel htmlFor="outlined-age-native-simple">Đối tương ưu tiên (Nếu có )</InputLabel>
														<Select
																MenuProps={{
																		className: classesform.selectMenu
																}}
																classes={{
																		select: classesform.select
																}}
																value={simpleSelect}
																onChange={handleSimple}
																inputProps={{
																		name: "simpleSelect",
																		id: "simple-select"
																}}
														>
																<MenuItem
																		classes={{
																				root: classesform.selectMenuItem,
																				selected: classesform.selectMenuItemSelected
																		}}
																		value="1"
																>
																		01
																</MenuItem>
																<MenuItem
																		classes={{
																				root: classesform.selectMenuItem,
																				selected: classesform.selectMenuItemSelected
																		}}
																		value="2"
																>
																		02
																</MenuItem>
														</Select>
												</FormControl>
										</GridItem>
								</GridContainer>
						</div>
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
																												<TextField id="outlined-basic" label="Môn thứ 2"
																																	 variant="outlined"
																																	 required={true}/>
																										</GridItem>
																										<GridItem sm={4} xs={4} lg={4} className="mg-10">
																												<TextField id="outlined-basic" label="Môn thứ 3"
																																	 variant="outlined"
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
																												<TextField id="outlined-basic" label="Môn thứ 2"
																																	 variant="outlined"
																																	 required={true}/>
																										</GridItem>
																										<GridItem sm={4} xs={4} lg={4} className="mg-10">
																												<TextField id="outlined-basic" label="Môn thứ 3"
																																	 variant="outlined"
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
																												<TextField id="outlined-basic" label="Môn thứ 2"
																																	 variant="outlined"
																																	 required={true}/>
																										</GridItem>
																										<GridItem sm={4} xs={4} lg={4} className="mg-10">
																												<TextField id="outlined-basic" label="Môn thứ 3"
																																	 variant="outlined"
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
				</>
		);
}
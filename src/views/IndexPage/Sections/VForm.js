import React, { useEffect } from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import TextField from '@material-ui/core/TextField';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Refresh from "@material-ui/icons/Refresh";
import Navigation from "@material-ui/icons/Navigation";
import Add from "@material-ui/icons/Add";
import Clear from "@material-ui/icons/Clear";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";

// style for page
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js";
import formstyles from "assets/jss/material-kit-pro-react/customSelectStyle.js";
import { Fragment, useState } from "react";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { DatePicker } from "@material-ui/pickers";
import FormControl from '@material-ui/core/FormControl';
import VLine from "./VLine";
import VLine2 from "./VLine2";
import RUG from 'react-upload-gallery';
import 'react-upload-gallery/dist/style.css'
import Accordion from "components/Accordion/Accordion.js";
import Button from "components/CustomButtons/Button.js";
import LazyLoad from 'react-lazyload'


import { storage } from "../../../firebase/config.js";
// import axios from "axios";
import enrollment from "../../../api/enrollment.json";
import province from "../../../api/province.json";


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


function formatDate(date) {
	const formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
	return formatted_date;
}

export default function Admis_Form(props) {
	let class10 = {
		location: "",
		idProvince: "",
		idSchool: "",
		nameSchool: ""
	};
	let class11 = {
		location: "",
		idProvince: "",
		idSchool: "",
		nameSchool: ""
	};
	let class12 = {
		location: "",
		idProvince: "",
		idSchool: "",
		nameSchool: ""
	};

	const date = new Date();
	const [stateInfoStudent, setStateInfoStudent] = React.useState({
		sex: '',
		dateOfBirth: date,
		dateForCMND: date,
		doiTuongUuTien: "",
		khuVucUuTien: "",
		class10,
		class11,
		class12
	});
	const [stateInfoRecords, setStateInfoRecords] = React.useState({ idMajors: "", tohop: "" });
	const [stateMajors, setStateMajors] = React.useState({ nganh: [], idMajor: "", tohop: [] });
	const [stateNguyenVong, setStateNguyenVong] = React.useState([]);
	const [stateToHop, setStateToHop] = React.useState([]);

	const classes = useStyles();
	const classesform = useFStyles();
	const classes1 = useStyles1();

	const [data, setData] = useState(enrollment);

	const [name, setName] = useState(null);

	const findDistrict = async (id) => {
		const requestUrl = `/api/city/${id}/district`;
		const response = await fetch(requestUrl);
		const responseJSON = await response.json();
		setName(responseJSON);
	}

	const handleChange = (event, newValue) => {
		const data = `${newValue.code}|${newValue.name}`
		setStateInfoStudent(prevState => ({
			...prevState,
			province: data
		}))
		let provinces = province.LtsItem.filter((value, key) => {
			return value.Title == newValue.name;
		})
		findDistrict(provinces[0].ID);
	};

	const handleChangeDateOfBirth = (date) => {
		setStateInfoStudent(prevState => ({
			...prevState,
			dateOfBirth: formatDate(date)
		}))
	};

	const handleChangeDistrict = (event, newValue) => {
		setStateInfoStudent(prevState => ({
			...prevState,
			district: newValue.Title
		}))
	};

	const handleDateChangeDateForCMND = (date) => {
		setStateInfoStudent(prevState => ({
			...prevState,
			dateForCMND: formatDate(date)
		}))
	};

	const handleChangeForClass10 = (event, newValue) => {
		console.log(newValue);
		
		class10.location = newValue.address;
		class10.idProvince = newValue.provinceCode;
		class10.idSchool = newValue.code;
		class10.nameSchool = newValue.name;
		setStateInfoStudent(prevState => ({
			...prevState,
			class10: class10
		}))
	};

	const handleChangeForClass11 = (event, newValue) => {
		class11.location = newValue.address;
		class11.idProvince = newValue.provinceCode;
		class11.idSchool = newValue.code;
		class11.nameSchool = newValue.name;
		setStateInfoStudent(prevState => ({
			...prevState,
			class11: class11
		}))
	};

	const handleChangeForClass12 = (event, newValue) => {
		class12.location = newValue.address;
		class12.idProvince = newValue.provinceCode;
		class12.idSchool = newValue.code;
		class12.nameSchool = newValue.name;
		setStateInfoStudent(prevState => ({
			...prevState,
			class12: class12
		}))
	};

	const handleChange2 = e => {
		const { name, value } = e.target
		setStateInfoStudent(prevState => ({
			...prevState,
			[name]: value
		}))
	}

	useEffect(() => {
		async function fetchData() {
			const requestUrl = 'http://127.0.0.1:8000/api/nganh';
			const response = await fetch(requestUrl);
			const responseJSON = await response.json();

			setStateMajors(responseJSON)
		}

		fetchData();
	}, []);

	const handleChangeStateInfoRecords = e => {
		const { name, value } = e.target
		setStateInfoRecords(prevState => ({
			...prevState,
			[name]: value
		}))
	}

	const listMajor = stateMajors.nganh.map((value, key) => {
		return (<MenuItem
			classes={{
				root: classesform.selectMenuItem,
				selected: classesform.selectMenuItemSelected
			}}
			value={value.ten}
		>
			{value.ten}
		</MenuItem>)
	})

	const objNguyenVong = {
		idMajors: "",
		nameMajors: "",
		ma_xet_tuyen: "",
		tohop: "",
		lop10_mon1: "",
		lop10_mon2: "",
		lop10_mon3: "",
		lop11_mon1: "",
		lop11_mon2: "",
		lop11_mon3: "",
		lop12_mon1: "",
		lop12_mon2: "",
		lop12_mon3: ""
	}

	const addNguyenVong = () => {
		setStateNguyenVong(prevState => [...prevState, objNguyenVong]);
		setStateToHop(prevState => [...prevState, (<h1></h1>)]);
	}

	const chonNguyenVong = (event) => {
		const array = event.target.name.split("@");
		const name = array[0];
		const id = parseInt(array[1]);
		const listNV = stateNguyenVong.slice();
		listNV[id][name] = event.target.value;
		setStateNguyenVong(listNV);
	}

	const chonNganhChoNguyenVong = (event) => {
		const array = event.target.name.split("@");
		const id = parseInt(array[1]);
		
		let majors = stateMajors.nganh.filter((value, key) => {
			return value.ten === event.target.value;
		});

		let toHop = stateMajors.nganh_tohop.filter((value, key) => {
			return value.ma_nganh === majors[0].id;
		});

		const listToHop = toHop.map((value, key) => {
			return stateMajors.tohop.filter((v, k) => {
				return value.ma_to_hop === v.id;
			})
		})

		const selectToHop = listToHop.map((value, key) => {
			return (<MenuItem
				classes={{
					root: classesform.selectMenuItem,
					selected: classesform.selectMenuItemSelected
				}}
				value={value[0].id}
			>
				{value[0].ten}
			</MenuItem>)
		});

		const newListToHop = stateToHop.slice();
		newListToHop[id] = selectToHop;
		setStateToHop(newListToHop);

		const listNV = stateNguyenVong.slice();
		listNV[id].idMajors = majors[0].id;
		listNV[id].nameMajors = majors[0].ten;
		listNV[id].ma_xet_tuyen = majors[0].ma_xet_tuyen;
		setStateNguyenVong(listNV);
	}

	const deleteConponent = (data) => {
		const listNV = stateNguyenVong.slice().filter((value, key) => {
			return key !== data;
		})

		const listToHop = stateToHop.slice().filter((value, key) => {
			return key !== data;
		})
		setStateToHop(listToHop)
		setStateNguyenVong(listNV);
	}

	const listNguyenVong = stateToHop.map((value, key) => {
		return (
			<Accordion
				active={0}
				activeColor="info"
				collapses={[
					{
						title:
							<GridContainer>
								<GridItem xs={12} lg={12} md={12} className="mg-10">
									<TextField label="Nguyện vọng" value={`Nguyện vọng ${key + 1}`} variant="outlined" disabled="true" required={true} />
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
												onChange={chonNganhChoNguyenVong}
												inputProps={{
													name: `Majors@${key}`,
													id: "nganh"
												}}
											>
												{listMajor}
											</Select>
										</FormControl>
									</GridItem>
									<GridItem sm={4} xs={4} lg={4} className="mg-10">
										<TextField id="outlined-basic" value={stateNguyenVong[key].ma_xet_tuyen}
											label="Mã ngành" variant="outlined"
											required={true} disabled={true} />
									</GridItem>
									<GridItem xs={4} lg={4} md={4} className="mg-10">
										<FormControl variant="outlined" fullWidth
											className={classes1.formControl + " " + "outline-form"}>
											<InputLabel htmlFor="outlined-grade-native-simple">Tổ hợp</InputLabel>
											<Select
												MenuProps={{
													className: classesform.selectMenu
												}}
												classes={{
													select: classesform.select
												}}
												onChange={chonNguyenVong}
												inputProps={{
													name: `tohop@${key}`,
													id: "tohop"
												}}
											>
												{stateToHop[key]}
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
											<TextField id="outlined-basic" name={`lop10_mon1@${key}`}
												onChange={chonNguyenVong}
												label="Môn thứ nhất"
												variant="outlined" required={true} />
										</GridItem>
										<GridItem sm={4} xs={4} lg={4} className="mg-10">
											<TextField id="outlined-basic" name={`lop10_mon2@${key}`}
												onChange={chonNguyenVong}
												label="Môn thứ 2" variant="outlined"
												required={true} />
										</GridItem>
										<GridItem sm={4} xs={4} lg={4} className="mg-10">
											<TextField id="outlined-basic" name={`lop10_mon3@${key}`}
												onChange={chonNguyenVong}
												label="Môn thứ 3" variant="outlined"
												required={true} />
										</GridItem>
									</>
									<>
										<GridItem className="class-line" sm={12} xs={12} lg={12}>
											<span>- Lớp 11</span>
										</GridItem>
										<GridItem sm={4} xs={4} lg={4} className="mg-10">
											<TextField id="outlined-basic" name={`lop11_mon1@${key}`}
												onChange={chonNguyenVong}
												label="Môn thứ nhất"
												variant="outlined" required={true} />
										</GridItem>
										<GridItem sm={4} xs={4} lg={4} className="mg-10">
											<TextField id="outlined-basic" name={`lop11_mon2@${key}`}
												onChange={chonNguyenVong}
												label="Môn thứ 2" variant="outlined"
												required={true} />
										</GridItem>
										<GridItem sm={4} xs={4} lg={4} className="mg-10">
											<TextField id="outlined-basic" name={`lop11_mon3@${key}`}
												onChange={chonNguyenVong}
												label="Môn thứ 3" variant="outlined"
												required={true} />
										</GridItem>
									</>
									<>
										<GridItem className="class-line" sm={12} xs={12} lg={12}>
											<span>- Lớp 12</span>
										</GridItem>
										<GridItem sm={4} xs={4} lg={4} className="mg-10">
											<TextField id="outlined-basic" name={`lop12_mon1@${key}`}
												onChange={chonNguyenVong}
												label="Môn thứ nhất"
												variant="outlined" required={true} />
										</GridItem>
										<GridItem sm={4} xs={4} lg={4} className="mg-10">
											<TextField id="outlined-basic" name={`lop12_mon2@${key}`}
												onChange={chonNguyenVong}
												label="Môn thứ 2" variant="outlined"
												required={true} />
										</GridItem>
										<GridItem sm={4} xs={4} lg={4} className="mg-10">
											<TextField id="outlined-basic" name={`lop12_mon3@${key}`}
												onChange={chonNguyenVong}
												label="Môn thứ 3" variant="outlined"
												required={true} />
										</GridItem>
									</>
								</GridContainer>
								<GridContainer>
									<GridItem md={2} className="mw-12">
										<Button color="danger" onClick={(data) => deleteConponent(key)} round><Clear /> Xóa</Button>
									</GridItem>
								</GridContainer>
							</div>
					}
				]}
			/>
		)
	});

	const [stateImages, setStateImages] = React.useState();
	const [stateNumImages, setStateNumImages] = React.useState();
	const [progress, setProgress] = useState(0);

	const changeImage = (event) => {
		setStateImages(event);
		setStateNumImages(event.length)
	}

	const handleUpload = () => {
		return new Promise((resolve, reject) => {
			let dem = 0;
			let arrayUrl = [];
			stateImages.forEach((file) => {
				const imageFileName = `${Math.round(Math.random() * 1000000000000)}`;
				storage.ref(`images/${imageFileName}`).put(file.file)
					.on(
						"state_changed",
						snapshot => {
							const progress = Math.round(
								(snapshot.bytesTransferred / snapshot.totalBytes) * 100
							);
							setProgress(progress);
						},
						error => {
							console.log(error);
						},
						() => {
							storage
								.ref("images")
								.child(imageFileName)
								.getDownloadURL()
								.then((url) => {
									arrayUrl.push(url);
									dem = dem + 1;
									if (dem === stateNumImages) {
										resolve(arrayUrl);
									}
								});
						}
					)
			})
		})
	};

	const Submit = () => {
		handleUpload().then(async (res) => {
			const admissionsRecords = {
				infoStudent: stateInfoStudent,
				infoRecords: stateNguyenVong,
				linkImage: ""
			}
			admissionsRecords.linkImage = res;
			console.log(admissionsRecords);
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(admissionsRecords)
			};
			const response = await fetch('http://127.0.0.1:8000/api/luuhoso', requestOptions);
			const data = await response.json();
			console.log(data);
		})
	}

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
						<TextField id="outlined-basic" name="fullNameStudent" onChange={handleChange2}
							label="Họ tên thí sinh" variant="outlined" required={true}
						/>
					</GridItem>
					{/*Select*/}
					<GridItem xs={3} lg={3} md={3} className="mg-10">
						<FormControl variant="outlined" fullWidth
							className={classes1.formControl + " " + "outline-form sex-form"}>
							<InputLabel id="simple-select-label" htmlFor="outlined-age-native-simple">Giới
																tính</InputLabel>
							<Select
								MenuProps={{
									className: classesform.selectMenu
								}}
								classes={{
									select: classesform.select
								}}
								onChange={handleChange2}
								value={stateInfoStudent.sex}
								labelId="simple-select-label"
								inputProps={{
									name: "sex",
									id: "simple-select",
								}}
							>
								<MenuItem
									classes={{
										root: classesform.selectMenuItem,
										selected: classesform.selectMenuItemSelected
									}}
									value="0"
								>
									Nam
																</MenuItem>
								<MenuItem
									classes={{
										root: classesform.selectMenuItem,
										selected: classesform.selectMenuItemSelected
									}}
									value="1"
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
								value={stateInfoStudent.dateOfBirth}
								onChange={handleChangeDateOfBirth}
								format="dd/MM/yyyy"
							/>
						</Fragment>
					</GridItem>
					<GridItem xs={4} lg={4} md={4} className="mg-10">
						<TextField id="place-birth" name="placeOfBirth" onChange={handleChange2} label="Nơi sinh"
							variant="outlined" required={true} />
					</GridItem>
					<GridItem xs={4} lg={4} md={4} className="mg-10">
						<TextField id="nation" label="Dân tộc" variant="outlined" name="nation" onChange={handleChange2}
							required={true} />
					</GridItem>
					<GridItem sm={4} xs={4} lg={4} className="mg-10">
						<TextField label="Số CMND / Căn Cước Công Dân" name="numberCMND" onChange={handleChange2}
							variant="outlined" required={true} />
					</GridItem>
					<GridItem xs={4} lg={4} md={4} className="mg-10">
						<Fragment>
							<DatePicker
								label="Ngày cấp"
								inputVariant="outlined"
								value={stateInfoStudent.dateForCMND}
								onChange={handleDateChangeDateForCMND}
								format="dd/MM/yyyy"
							/>
						</Fragment>
					</GridItem>
					<GridItem sm={4} xs={4} lg={4} className="mg-10">
						<TextField label="Nơi Cấp" name="locationForCMDN" onChange={handleChange2} variant="outlined"
							required={true} />
					</GridItem>
					<VLine />
					<GridItem sm={12} xs={12} lg={12} className="mg-10">
						<TextField label="Hộ khẩu thường trú" name="location" onChange={handleChange2}
							variant="outlined" required={true} />
					</GridItem>
					<GridItem xs={4} lg={4} md={4} className="mg-10">
						<Autocomplete
							id="combo-box-demo"
							options={data.provinces}
							getOptionLabel={(option) => option.name}
							style={{ width: '300', }}
							renderInput={(params) => <TextField {...params} value={params.id} label="Mã Tỉnh"
								variant="outlined" />}
							onChange={handleChange}
							renderOption={(option) => `${option.code}- ${option.name}`}
						/>
					</GridItem>
					<GridItem xs={4} lg={4} md={4} className="mg-10">
						<Autocomplete
							id="combo-box-demo"
							options={name}
							getOptionLabel={(option) => option.Title}
							style={{ width: '300', }}
							disabled={name === null}
							onChange={handleChangeDistrict}
							renderInput={(params) => <TextField {...params} name="district" label="Mã Huyện"
								variant="outlined" />}
						/>
					</GridItem>
					<GridItem sm={4} xs={4} lg={4} className="mg-10">
						<TextField label="Mã xã (Nếu có)" name="town" onChange={handleChange2} variant="outlined" />
					</GridItem>
					<VLine2 />
					<GridItem xs={12} lg={12} md={12} className="class-mate">
						<span>Lớp 10</span>
					</GridItem>
					<GridItem xs={4} lg={4} md={4} className="mg-10">
						<Autocomplete
							id="combo-box-demo"
							options={data.highSchools}
							getOptionLabel={(option) => option.name}
							style={{ width: '300', }}
							onChange={handleChangeForClass10}
							renderInput={(params) =>
									<TextField {...params} label="Tên trường THPT"
								variant="outlined" />
									}
							renderOption={(option) => <div>
											<div> <LazyLoad>{option.code}- {option.name}</LazyLoad> </div>
									<div style={{ 'font-size': '13px' }}><LazyLoad> {option.address}</LazyLoad></div>
							</div>}
						/>
					</GridItem>
					<GridItem sm={4} xs={4} lg={4} className="mg-10">
						<TextField label="Địa chỉ" value={stateInfoStudent.class10.location} variant="outlined"
							disabled={true} />
					</GridItem>
					<GridItem sm={2} xs={2} lg={2} className="mg-10">
						<TextField label="Mã tỉnh" value={stateInfoStudent.class10.idProvince} variant="outlined"
							disabled={true} />
					</GridItem>
					<GridItem sm={2} xs={2} lg={2} className="mg-10">
						<TextField label="Mã trường" value={stateInfoStudent.class10.idSchool} variant="outlined"
							disabled={true} />
					</GridItem>
					<GridItem xs={12} lg={12} md={12} className="class-mate">
						<span>Lớp 11</span>
					</GridItem>
					<GridItem xs={4} lg={4} md={4} className="mg-10">
						<Autocomplete
							id="combo-box-demo"
							options={data.highSchools}
							getOptionLabel={(option) => option.name}
							style={{ width: '300', }}
							onChange={handleChangeForClass11}
							renderInput={(params) => <TextField {...params} label="Tên trường THPT"
								variant="outlined" />}
							renderOption={(option) => <div>
								<div> {option.code}- {option.name} </div>
								<div style={{ 'font-size': '13px' }}> {option.address}</div>
							</div>}
						/>
					</GridItem>
					<GridItem sm={4} xs={4} lg={4} className="mg-10">
						<TextField label="Địa chỉ" value={stateInfoStudent.class11.location} variant="outlined"
							disabled={true} />
					</GridItem>
					<GridItem sm={2} xs={2} lg={2} className="mg-10">
						<TextField label="Mã tỉnh" value={stateInfoStudent.class11.idProvince} variant="outlined"
							disabled={true} />
					</GridItem>
					<GridItem sm={2} xs={2} lg={2} className="mg-10">
						<TextField label="Mã trường" value={stateInfoStudent.class11.idSchool} variant="outlined"
							disabled={true} />
					</GridItem>
					<GridItem xs={12} lg={12} md={12} className="class-mate">
						<span>Lớp 12</span>
					</GridItem>
					<GridItem xs={4} lg={4} md={4} className="mg-10">
						<Autocomplete
							id="combo-box-demo"
							options={data.highSchools}
							getOptionLabel={(option) => option.name}
							style={{ width: '300', }}
							onChange={handleChangeForClass12}
							renderInput={(params) => <TextField {...params} label="Tên trường THPT"
								variant="outlined" />}
							renderOption={(option) => <div>
								<div> {option.code}- {option.name} </div>
								<div style={{ 'font-size': '13px' }}> {option.address}</div>
							</div>}
						/>
					</GridItem>
					<GridItem sm={4} xs={4} lg={4} className="mg-10">
						<TextField label="Địa chỉ" value={stateInfoStudent.class12.location} variant="outlined"
							disabled={true} />
					</GridItem>
					<GridItem sm={2} xs={2} lg={2} className="mg-10">
						<TextField label="Mã tỉnh" value={stateInfoStudent.class12.idProvince} variant="outlined"
							disabled={true} />
					</GridItem>
					<GridItem sm={2} xs={2} lg={2} className="mg-10">
						<TextField label="Mã trường" value={stateInfoStudent.class12.idSchool} variant="outlined"
							disabled={true} />
					</GridItem>
					<GridItem sm={6} xs={6} lg={6} className="mg-10">
						<TextField label="Điện thoại liên lạc" name="phoneNumber" onChange={handleChange2}
							variant="outlined" required={true} />
					</GridItem>
					<GridItem sm={6} xs={6} lg={6} className="mg-10">
						<TextField label="Email" name="email" onChange={handleChange2} variant="outlined"
							required={true} />
					</GridItem>
					<GridItem sm={12} xs={12} lg={12} className="mg-10">
						<TextField label="Địa chỉ liên hệ" name="contactAddress" onChange={handleChange2}
							variant="outlined" required={true} />
					</GridItem>
					<GridItem sm={4} xs={4} lg={4} className="mg-10">
						<TextField label="Năm tốt nghiệp" name="graduationYear" onChange={handleChange2}
							variant="outlined" required={true} />
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
								onChange={handleChange2}
								value={stateInfoStudent.khuVucUuTien}
								inputProps={{
									name: "khuVucUuTien",
									id: "simple-select"
								}}
							>
								<MenuItem
									classes={{
										root: classesform.selectMenuItem,
										selected: classesform.selectMenuItemSelected
									}}
									value="KV1"
								>
									KV1
																</MenuItem>
								<MenuItem
									classes={{
										root: classesform.selectMenuItem,
										selected: classesform.selectMenuItemSelected
									}}
									value="KV3"
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
								onChange={handleChange2}
								value={stateInfoStudent.doiTuongUuTien}
								inputProps={{
									name: "doiTuongUuTien",
									id: "simple-select"
								}}
							>
								<MenuItem
									classes={{
										root: classesform.selectMenuItem,
										selected: classesform.selectMenuItemSelected
									}}
									value="01"
								>
									01
																</MenuItem>
								<MenuItem
									classes={{
										root: classesform.selectMenuItem,
										selected: classesform.selectMenuItemSelected
									}}
									value="02"
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
						{listNguyenVong}
					</GridItem>
					<GridItem xs={6} lg={6} md={6} sm={12} className="add_wish">
						<Button round color="info" onClick={addNguyenVong} ><Add style={{ color: "#FFFFFF" }} />Thêm nguyện vọng</Button>
					</GridItem>
					<GridItem xs={12} sm={12} md={12}>
						<RUG
							onChange={changeImage}
							accept={['jpg', 'jpeg', 'png']}
							source={response => response.source}
						/>
					</GridItem>
					<GridItem md={12} lg={12} xs={12} className="submit">
						<Button color="success" onClick={Submit} round>
							<Navigation className={classes.icons} /> Đăng ký
												</Button>
						<Button color="rose" round>
							<Refresh className={classes.icons} /> Làm lại
												</Button>
					</GridItem>
				</GridContainer>
			</div>
		</>
	);


}
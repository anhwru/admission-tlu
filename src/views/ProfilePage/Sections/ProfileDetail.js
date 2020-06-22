import React from "react";
// react components used to create a google map
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
// @material-ui/icons
import Phone from "@material-ui/icons/Phone";
import School from "@material-ui/icons/School";
import LocalLibrary from "@material-ui/icons/LocalLibrary";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Info from "components/Typography/Info.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Danger from "components/Typography/Danger.js";
import TextField from '@material-ui/core/TextField';
import contactsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.js";

const useStyles = makeStyles(contactsStyle);
const images = [
	{
		original: 'https://oisp.hcmut.edu.vn/wp-content/uploads/2016/10/images_Hoang_Yen__Marketing_Hanh-kiem-anh-huong-THPT-Quoc-gia.jpg',
		thumbnail: 'https://oisp.hcmut.edu.vn/wp-content/uploads/2016/10/images_Hoang_Yen__Marketing_Hanh-kiem-anh-huong-THPT-Quoc-gia.jpg',
	},
	{
		original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKFfiLu106rtW6D1JeZHBV-9vTHgUxniFSwgXNwVwTX73Q6Nls&usqp=CAU',
		thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKFfiLu106rtW6D1JeZHBV-9vTHgUxniFSwgXNwVwTX73Q6Nls&usqp=CAU',
	},
	{
		original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkD1ts_jaoect0NtE8d7pqPgd2-6Lk_kCdSuokQZElBiWmRyj5&usqp=CAU',
		thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkD1ts_jaoect0NtE8d7pqPgd2-6Lk_kCdSuokQZElBiWmRyj5&usqp=CAU',
	}


];

function TrangThaiNguyenVong(params) {
	if (params == 0)
		return "Không trúng tuyển";
	if (params == 1)
		return "Trúng tuyển";
	if (params == 2)
		return "Đang chờ duyệt";
}

function DiemTrungBinh(a, b, c) {
	return ((a + b + c) / 3).toFixed(2);
}

export default function ProfileDetail(props) {
	const [checked, setChecked] = React.useState([]);
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

	const [data, setData] = React.useState([]);
	useEffect(() => {
		async function fetchData() {
			const requestUrl = `http://127.0.0.1:8000/api/thongtin/${props.id}`;
			const response = await fetch(requestUrl);
			const responseJSON = await response.json();
			console.log(responseJSON);
			setData(prevState => [...prevState, responseJSON]);
		}

		fetchData();
	}, []);

	const classes = useStyles();
	const cpm = data.map((value, key) => {
		const gt = (value.hoso.gioi_tinh == 0) ? "Nam" : "Nữ";
		const namSinh = value.hoso.ngay_thang_nam_sinh.split(" ")[0];
		const ngayCap = value.hoso.ngay_cap.split(" ")[0];
		const listNguyenVong = value.nguyenvong.map((v, k) => {
			return (
				<>
					<GridItem xs={8}><strong className="child-bold"><Danger>Nguyện vọng {k + 1}</Danger>
						{`- ${v.nganh.tennganh} / mã ngành: ${v.nganh.maxettuyen}`}
					</strong></GridItem>
					<GridItem xs={4}> Kết quả xét tuyển : <strong
						className="child-bold status"><Success>{TrangThaiNguyenVong(v.trangthai)}</Success></strong></GridItem>
					<GridItem xs={12}><strong>{`Tổ hợp xét tuyển : ${v.tentohop}`} </strong></GridItem>
					<GridItem xs={12}><i><b> Điểm xét tuyển học bạ theo từng năm </b></i></GridItem>
					<GridItem xs={4} className="child-bold">Lớp 10
																						: <Info>{v.diem.lop10_m1}</Info> - <Success>{v.diem.lop10_m2}</Success> - <Warning>{v.diem.lop10_m3}</Warning> <span>Trung bình : <Danger>{DiemTrungBinh(v.diem.lop10_m1,v.diem.lop10_m2,v.diem.lop10_m3)}</Danger></span></GridItem>
					<GridItem xs={4} className="child-bold">Lớp 11
																						: <Info>{v.diem.lop11_m1}</Info> - <Success>{v.diem.lop11_m2}</Success> - <Warning>{v.diem.lop11_m3}</Warning> <span>Trung bình : <Danger>{DiemTrungBinh(v.diem.lop11_m1,v.diem.lop11_m2,v.diem.lop11_m3)}</Danger></span></GridItem>
					<GridItem xs={4} className="child-bold">Lớp 12
																						: <Info>{v.diem.lop12_m1}</Info> - <Success>{v.diem.lop12_m2}</Success> - <Warning>{v.diem.lop12_m3}</Warning> <span>Trung bình : <Danger>{DiemTrungBinh(v.diem.lop12_m1,v.diem.lop12_m2,v.diem.lop12_m3)}</Danger></span></GridItem>
				</>
			)
		})

		if (data == null) {
			return (<div></div>)
		}
		else {
			return (
				<div className="cd-section">
					<div className={classes.contacts2 + " " + classes.container + " " + "margin-top"}>
						<GridItem xs={12} sm={12} md={12}>
							<Card xs={12} sm={12} md={12}>
								<form>
									<CardHeader contact color="info" className={classes.textCenter}>
										<h4 className={classes.cardTitle + " " + "title"}>Thông tin đăng ký xét tuyển</h4>
									</CardHeader>
									<CardBody>
										<GridContainer>
											<GridItem className="mgb-20" alignItems="flex-end" sm={12} md={12}>
												<InfoArea
													className={classes.infoArea2}
													title="Thông tin cơ bản và liên hệ"
													icon={Phone}
													iconColor="rose"
												/>
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={4} md={4}>
												<TextField id="input-with-icon-grid" label="Họ và tên" disabled={true}
													variant="outlined" value={value.hoso.ho_ten} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
												<TextField id="input-with-icon-grid" label="Giới tính" disabled={true}
													variant="outlined" value={gt} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={3} md={3}>
												<TextField id="input-with-icon-grid" label="Ngày tháng năm sinh" disabled={true}
													variant="outlined" value={namSinh} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={3} md={3}>
												<TextField id="input-with-icon-grid" label="Dân tộc" disabled={true}
													variant="outlined" value={value.hoso.dan_toc} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={3} md={3}>
												<TextField id="input-with-icon-grid" label="Số CMND/ Căn cước" disabled={true}
													variant="outlined" value={value.hoso.cmnd} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
												<TextField id="input-with-icon-grid" label="Ngày cấp" disabled={true}
													variant="outlined" value={ngayCap} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={4} md={4}>
												<TextField id="input-with-icon-grid" label="Nơi sinh" disabled={true}
													variant="outlined" value={value.hoso.noi_sinh} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={3} md={3}>
												<TextField id="input-with-icon-grid" label="Nơi cấp" disabled={true}
													variant="outlined" value={value.hoso.noi_cap} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={6} md={6}>
												<TextField id="input-with-icon-grid" label="Hộ khẩu thường chú" disabled={true}
													variant="outlined" value={value.hoso.ho_khau} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
												<TextField id="input-with-icon-grid" label="Mã Tỉnh / TP" disabled={true}
													variant="outlined" value={value.hoso.ma_tinh} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
												<TextField id="input-with-icon-grid" label="Mã Quận / Huyện" disabled={true}
													variant="outlined" value={value.hoso.ma_huyen} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
												<TextField id="input-with-icon-grid" label="Số điện thoaji" disabled={true}
													variant="outlined" value={value.hoso.sdt} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={5} md={5}>
												<TextField id="input-with-icon-grid" label="Địa chỉ liên lạc" disabled={true}
													variant="outlined" value={value.hoso.dia_chi} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={3} md={3}>
												<TextField id="input-with-icon-grid" label="Email" disabled={true}
													variant="outlined" value={value.hoso.email} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
												<TextField id="input-with-icon-grid" label="Thuộc khu vực ƯT" disabled={true}
													variant="outlined" value={value.hoso.kv_uu_tien} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
												<TextField id="input-with-icon-grid" label="Thuộc đôi tượng ƯT" disabled={true}
													variant="outlined" value={value.hoso.doi_tuong_uu_tien} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={12} md={12}>
												<InfoArea
													className={classes.infoArea2}
													title="Thông tin học vấn"
													icon={School}
													iconColor="rose"
												/>
											</GridItem>

											{/*Khối*/}
											<GridItem xs={12} className="pad-20"><strong>Lớp 10</strong></GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={4} md={4}>
												<TextField id="input-with-icon-grid" label="Trường THPT " disabled={true}
													variant="outlined" value={value.lop10.ten_truong} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={4} md={4}>
												<TextField id="input-with-icon-grid" label="Địa chỉ " disabled={true}
													variant="outlined" value={value.lop10.dia_chi} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
												<TextField id="input-with-icon-grid" label="Mã Tỉnh " disabled={true}
													variant="outlined" value={value.lop10.ma_tinh} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
												<TextField id="input-with-icon-grid" label="Mã Trường " disabled={true}
													variant="outlined" value={value.lop10.ma_truong} />
											</GridItem>
											{/*Khối*/}
											{/*Khối*/}
											<GridItem xs={12} className="pad-20"><strong>Lớp 11</strong></GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={4} md={4}>
												<TextField id="input-with-icon-grid" label="Trường THPT " disabled={true}
													variant="outlined" value={value.lop11.ten_truong} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={4} md={4}>
												<TextField id="input-with-icon-grid" label="Địa chỉ " disabled={true}
													variant="outlined" value={value.lop11.dia_chi} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
												<TextField id="input-with-icon-grid" label="Mã Tỉnh " disabled={true}
													variant="outlined" value={value.lop11.ma_tinh} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
												<TextField id="input-with-icon-grid" label="Mã Trường " disabled={true}
													variant="outlined" value={value.lop11.ma_truong} />
											</GridItem>
											{/*Khối*/}
											{/*Khối*/}
											<GridItem xs={12} className="pad-20"><strong>Lớp 12</strong></GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={4} md={4}>
												<TextField id="input-with-icon-grid" label="Trường THPT " disabled={true}
													variant="outlined" value={value.lop12.ten_truong} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={4} md={4}>
												<TextField id="input-with-icon-grid" label="Địa chỉ " disabled={true}
													variant="outlined" value={value.lop12.dia_chi} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
												<TextField id="input-with-icon-grid" label="Mã Tỉnh " disabled={true}
													variant="outlined" value={value.lop12.ma_tinh} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
												<TextField id="input-with-icon-grid" label="Mã Trường " disabled={true}
													variant="outlined" value={value.lop12.ma_truong} />
											</GridItem>
											{/*Khối*/}
											<GridItem className="mgb-20" alignItems="flex-end" sm={4} md={4}>
												<TextField id="input-with-icon-grid" label="Tốt nghiệp năm " disabled={true}
													variant="outlined" value={value.hoso.nam_tot_nghiep} />
											</GridItem>
											<GridItem className="mgb-20" alignItems="flex-end" sm={12} md={12}>
												<InfoArea
													className={classes.infoArea2}
													title="Với các nguyện vọng"
													icon={LocalLibrary}
													iconColor="rose"
												/>
											</GridItem>
											{listNguyenVong}
										</GridContainer>
									</CardBody>
								</form>
							</Card>
						</GridItem>
					</div>
				</div>
			)
		}
	})


	return (
		<div>{cpm}</div>
	);
}

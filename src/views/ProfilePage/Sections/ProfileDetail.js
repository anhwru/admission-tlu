import React from "react";
// react components used to create a google map
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
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


export default function ProfileDetail({...rest}) {
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
		const classes = useStyles();
		return (
				<div className="cd-section" {...rest}>
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
																									 variant="outlined" value="Nguyen Van Anh"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
																				<TextField id="input-with-icon-grid" label="Giới tính" disabled={true}
																									 variant="outlined" value="Nam"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={3} md={3}>
																				<TextField id="input-with-icon-grid" label="Ngày tháng năm sinh" disabled={true}
																									 variant="outlined" value="25/06/1998"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={3} md={3}>
																				<TextField id="input-with-icon-grid" label="Dân tộc" disabled={true}
																									 variant="outlined" value="Kinh"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={3} md={3}>
																				<TextField id="input-with-icon-grid" label="Số CMND/ Căn cước" disabled={true}
																									 variant="outlined" value="012345678989"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
																				<TextField id="input-with-icon-grid" label="Ngày cấp" disabled={true}
																									 variant="outlined" value="01/01/2016"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={4} md={4}>
																				<TextField id="input-with-icon-grid" label="Nơi sinh" disabled={true}
																									 variant="outlined" value="Phố Thái Hà - Quận Đống Đa - TP.Hà Nội"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={3} md={3}>
																				<TextField id="input-with-icon-grid" label="Nơi cấp" disabled={true}
																									 variant="outlined" value="Cục kiểm định cư trú Hà Nội"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={6} md={6}>
																				<TextField id="input-with-icon-grid" label="Hộ khẩu thường chú" disabled={true}
																									 variant="outlined" value="Hà Nội - Việt Nam"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
																				<TextField id="input-with-icon-grid" label="Mã Tỉnh / TP" disabled={true}
																									 variant="outlined" value="016"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
																				<TextField id="input-with-icon-grid" label="Mã Quận / Huyện" disabled={true}
																									 variant="outlined" value="030"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
																				<TextField id="input-with-icon-grid" label="Số điện thoaji" disabled={true}
																									 variant="outlined" value="0325678999"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={5} md={5}>
																				<TextField id="input-with-icon-grid" label="Địa chỉ liên lạc" disabled={true}
																									 variant="outlined" value="Hà Nội - Việt Nam"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={3} md={3}>
																				<TextField id="input-with-icon-grid" label="Email" disabled={true}
																									 variant="outlined" value="anhnv620@wru.vn"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
																				<TextField id="input-with-icon-grid" label="Thuộc khu vực ƯT" disabled={true}
																									 variant="outlined" value="KV1"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
																				<TextField id="input-with-icon-grid" label="Thuộc đôi tượng ƯT" disabled={true}
																									 variant="outlined" value="Không"/>
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
																									 variant="outlined" value="Ngô gia Tự"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={4} md={4}>
																				<TextField id="input-with-icon-grid" label="Địa chỉ " disabled={true}
																									 variant="outlined" value="Lập Thạch - Vĩnh Phúc"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
																				<TextField id="input-with-icon-grid" label="Mã Tỉnh " disabled={true}
																									 variant="outlined" value="016"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
																				<TextField id="input-with-icon-grid" label="Mã Trường " disabled={true}
																									 variant="outlined" value="030"/>
																		</GridItem>
																		{/*Khối*/}
																		{/*Khối*/}
																		<GridItem xs={12} className="pad-20"><strong>Lớp 11</strong></GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={4} md={4}>
																				<TextField id="input-with-icon-grid" label="Trường THPT " disabled={true}
																									 variant="outlined" value="Ngô gia Tự"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={4} md={4}>
																				<TextField id="input-with-icon-grid" label="Địa chỉ " disabled={true}
																									 variant="outlined" value="Lập Thạch - Vĩnh Phúc"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
																				<TextField id="input-with-icon-grid" label="Mã Tỉnh " disabled={true}
																									 variant="outlined" value="016"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
																				<TextField id="input-with-icon-grid" label="Mã Trường " disabled={true}
																									 variant="outlined" value="030"/>
																		</GridItem>
																		{/*Khối*/}
																		{/*Khối*/}
																		<GridItem xs={12} className="pad-20"><strong>Lớp 12</strong></GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={4} md={4}>
																				<TextField id="input-with-icon-grid" label="Trường THPT " disabled={true}
																									 variant="outlined" value="Ngô gia Tự"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={4} md={4}>
																				<TextField id="input-with-icon-grid" label="Địa chỉ " disabled={true}
																									 variant="outlined" value="Lập Thạch - Vĩnh Phúc"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
																				<TextField id="input-with-icon-grid" label="Mã Tỉnh " disabled={true}
																									 variant="outlined" value="016"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={2} md={2}>
																				<TextField id="input-with-icon-grid" label="Mã Trường " disabled={true}
																									 variant="outlined" value="030"/>
																		</GridItem>
																		{/*Khối*/}
																		<GridItem className="mgb-20" alignItems="flex-end" sm={4} md={4}>
																				<TextField id="input-with-icon-grid" label="Tốt nghiệp năm " disabled={true}
																									 variant="outlined" value="2016"/>
																		</GridItem>
																		<GridItem className="mgb-20" alignItems="flex-end" sm={12} md={12}>
																				<InfoArea
																						className={classes.infoArea2}
																						title="Với các nguyện vọng"
																						icon={LocalLibrary}
																						iconColor="rose"
																				/>
																		</GridItem>
																		<>
																				<GridItem xs={8}><strong className="child-bold"><Danger>Nguyện vọng 1</Danger> -
																						Công Nghệ Thông Tin / mã
																						ngành
																						TLA010</strong></GridItem>
																				<GridItem xs={4}> Kết quả xét tuyển : <strong
																						className="child-bold status"><Success>Đã trúng
																						tuyển</Success></strong></GridItem>
																				<GridItem xs={12}><strong>Tổ hợp xét tuyển : A00 </strong></GridItem>
																				<GridItem xs={12}><i><b> Điểm xét tuyển học bạ theo từng năm </b></i></GridItem>
																				<GridItem xs={4} className="child-bold">Lớp 10
																						: <Info>9.2</Info> - <Success>8.5</Success> - <Warning>7.9</Warning> <span>Trung bình : <Danger>8.53</Danger></span></GridItem>
																				<GridItem xs={4} className="child-bold">Lớp 11
																						: <Info>9.2</Info> - <Success>8.5</Success> - <Warning>7.9</Warning> <span>Trung bình : <Danger>8.53</Danger></span></GridItem>
																				<GridItem xs={4} className="child-bold">Lớp 12
																						: <Info>9.2</Info> - <Success>8.5</Success> - <Warning>7.9</Warning> <span>Trung bình : <Danger>8.53</Danger></span></GridItem>
																		</>
																		<>
																				<GridItem xs={8} className="mgt-10"><strong
																						className="child-bold mgt-10"><Danger>Nguyện vọng 2</Danger> -
																						Môi Trường / mã
																						ngành
																						TLA018</strong></GridItem>
																				<GridItem xs={4} className="mgt-10"> Kết quả xét tuyển : <strong
																						className="child-bold status"><Danger>Không trúng
																						tuyển</Danger></strong></GridItem>
																				<GridItem xs={12}><strong>Tổ hợp xét tuyển : D01 </strong></GridItem>
																				<GridItem xs={12}><i><b> Điểm xét tuyển học bạ theo từng năm </b></i></GridItem>
																				<GridItem xs={4} className="child-bold">Lớp 10
																						: <Info>9.2</Info> - <Success>6.5</Success> - <Warning>6.9</Warning> <span>Trung bình : <Danger>8.53</Danger></span></GridItem>
																				<GridItem xs={4} className="child-bold">Lớp 11
																						: <Info>9.2</Info> - <Success>8.5</Success> - <Warning>7.9</Warning> <span>Trung bình : <Danger>7.6</Danger></span></GridItem>
																				<GridItem xs={4} className="child-bold">Lớp 12
																						: <Info>7.2</Info> - <Success>7.5</Success> - <Warning>7.8.9</Warning>
																						<span>Trung bình : <Danger>7.5</Danger></span></GridItem>
																		</>
																
																</GridContainer>
														</CardBody>
												</form>
										</Card>
								</GridItem>
						</div>
				</div>
		);
}

import  React from "react";
import { useEffect, useState } from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons
import TrendingUp from "@material-ui/icons/TrendingUp";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import PersonAdd from "@material-ui/icons/PersonAdd";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Danger from "components/Typography/Danger.js";
import {
	Link
} from "react-router-dom";

// style for page
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js";
import stylescard from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";


const useStyles = makeStyles(styles);
const useStyleCard = makeStyles(stylescard);

function changeURL(str) {
	// Chuyển hết sang chữ thường
	str = str.toLowerCase();

	// xóa dấu
	str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
	str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
	str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
	str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
	str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
	str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
	str = str.replace(/(đ)/g, "d");

	// Xóa ký tự đặc biệt
	str = str.replace(/([^0-9a-z-\s])/g, "");

	// Xóa khoảng trắng thay bằng ký tự -
	str = str.replace(/(\s+)/g, "-");

	// xóa phần dự - ở đầu
	str = str.replace(/^-+/g, "");

	// xóa phần dư - ở cuối
	str = str.replace(/-+$/g, "");

	// return
	return str;
};

function titleFomart(params) {
	let title = "";
	params.forEach(element => {
		title += element.ten;
		title += " + ";
	});
	
	title = title.slice(0, (title.length - 3))
	return title;
}

export default function ListCard() {

	const classes = useStyles();
	const classescard = useStyleCard();

	const [data, setData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const requestUrl = 'http://127.0.0.1:8000/api/info';
			const response = await fetch(requestUrl);
			const responseJSON = await response.json();
			setData(responseJSON)
		}

		fetchData();
	}, []);

	const listMajors = data.map((value, key) => {
		const title = titleFomart(value.data);
		return (
			<GridItem xs={12} sm={4} md={4} lg={4}>
				<Link to={"/khoa/" + changeURL(value.ten) + "." + value.id}>
						<Card className="faculty">
							<CardBody className="faculty-head">
								<Danger>
									<h6 className={classescard.cardCategory}>
										<TrendingUp /> {value.ten}
																		</h6>
								</Danger>
								<h4 className={classescard.cardTitle}>
									{title}
																</h4>
							</CardBody>
							<CardFooter className="faculty-footer">
								<div className="fac_with-icon">
									<SupervisorAccount className="info" />
										<span> Tất cả : {value.sosv}</span>
								</div>
								<div className={`fac_with-icon ${classescard.mlAuto}`}>
									<PersonAdd className="success" />
									<span> Khóa trước : 600</span>
								</div>
							</CardFooter>
						</Card>
					</Link>
				</GridItem>
		)
	})

	return (
		<div className={classes.container} id="form-data">
			<GridContainer>
				{listMajors}
			</GridContainer>
		</div>
	);
}
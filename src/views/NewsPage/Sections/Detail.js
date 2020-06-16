import React from "react";
import { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import CardBody from "components/Card/CardBody.js";
import VNav_Header from "../../IndexPage/Sections/VNav_Header";
// @material-ui icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// @router
import {
	Link
} from "react-router-dom";
// style for page
import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";

import cardBlog4 from "assets/img/examples/card-blog4.jpg";
import blog5 from "assets/img/examples/blog5.jpg";
import blog7 from "assets/img/examples/blog7.jpg";
import VFooter from "../../IndexPage/Sections/VFooter";

const useStyles = makeStyles(blogsStyle);

function formatDate(date) {
	const formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
	return formatted_date;
}

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

export default function Detail(props) {
	const [listNews, setListNews] = React.useState([]);

	useEffect(() => {
		async function fetchData() {
			const requestUrl = `http://127.0.0.1:8000/api/tintuc?page=${props.page}`;
			const response = await fetch(requestUrl);
			const responseJSON = await response.json();
			setListNews(responseJSON.data);
		}

		fetchData();
	}, []);

	const classes = useStyles();

	const news = listNews.map((value, key) => {
		if (value.id == props.id) {
			return (
				<GridItem xs={12} sm={8} md={8}>
					<h3 className={classes.cardTitle} style={{ margin: "0px 0 20px" }}>
						{value.tieu_de}
					</h3>
					<CardHeader image plain>
						<img
							src={value.anh}
							alt="..." />
						<div
							className={classes.coloredShadow}
							style={{
								backgroundImage: `url(${value.anh})`,
								opacity: "1"
							}}
						/>
					</CardHeader>
					<p className={classes.description1}
						style={{ margin: "20px 0 0", textIndent: "25px" }}>
						{value.noi_dung}
					</p>
				</GridItem>
			)
		}
	});

	const relatedNews = listNews.map((value, key) => {
		const date = new Date(value.updated_at);
		const dateFormat = formatDate(date);
		const tieu_de = value.mo_ta.slice(0, 100)
		if (value.id != props.id) {
			return (
				<Card plain blog className={classes.card + " " + "margin-t"}>
					<GridContainer>
						<GridItem xs={12} sm={6} md={6}>
							<CardHeader image plain>
								<Link to={"/detail/" + changeURL(value.tieu_de) + "." + value.id + "." + props.page + ".html"}>
									<img
										src={value.anh}
										alt="..." />
								</Link>
								<div
									className={classes.coloredShadow}
									style={{
										backgroundImage: `url(${blog7})`,
										opacity: "1"
									}}
								/>
								<div
									className={classes.coloredShadow}
									style={{
										backgroundImage: `url(${blog7})`,
										opacity: "1"
									}}
								/>
							</CardHeader>
						</GridItem>
						<GridItem xs={12} sm={6} md={6}>
							<h6 className={classes.cardTitle} style={{ marginBottom: '5px' }}>
								<Link to={"/detail/" + changeURL(value.tieu_de) + "." + value.id + "." + props.page + ".html"}>
									{`${value.tieu_de}...`}
								</Link>
							</h6>
							<p className={classes.author} style={{ fontSize: "12px" }}>
								đăng bởi
								<a href="#pablo" onClick={e => e.preventDefault()}>
									<b> TLU, </b>
								</a>
								{dateFormat}
							</p>
						</GridItem>
					</GridContainer>
				</Card>
			)
		}
	});

	return (
		<div>
			<VNav_Header />
			<div className={classes.blog} style={{ padding: '0px' }}>
				<GridContainer>
					<GridItem
						xs={12}
						sm={10}
						md={10}
						className={classes.mlAuto + " " + classes.mrAuto}
					>

						<Card plain blog className={classes.card}>
							<GridContainer>
								{news}
								<GridItem xs={12} sm={4} md={4}>
									<Success>
										<h4 className={classes.cardCategory + " " + "relate"}>Tin liên quan</h4>
									</Success>
									{relatedNews}
								</GridItem>
							</GridContainer>
						</Card>
					</GridItem>
				</GridContainer>
			</div>
			<VFooter />
		</div>
	);
}
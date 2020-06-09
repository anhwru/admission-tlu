import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import {
	Link
} from "react-router-dom";
// style for page
import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import Pagination from '@material-ui/lab/Pagination';
import { useEffect } from "react";
// import PaginationItem from '@material-ui/lab/PaginationItem';
// import Info from "components/Typography/Info.js";
// import Danger from "components/Typography/Danger.js";
// import TrendingUp from "@material-ui/icons/TrendingUp";

const useStyles = makeStyles(blogsStyle);

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

function formatDate(date) {
	const formatted_date = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
	return formatted_date;
}

export default function News(props) {
	const classes = useStyles();
	const [page, setPage] = React.useState(1);
	const [news, setNews] = React.useState([]);
	const [totalPage, setTotalPage] = React.useState(1);
	// const [listNewsRender, setListNewsRender] = React.useState();

	const handleChange = async (event, value) => {
		const requestUrl = `http://127.0.0.1:8000/api/tintuc?page=${value}`;
		const response = await fetch(requestUrl);
		const responseJSON = await response.json();
		setNews(responseJSON.data);
		setPage(value);

		const data = `${Math.round(Math.random() * 1000000000000)}`;
		props.loadPage(data)
	};

	useEffect(() => {
		async function fetchData() {
			const requestUrl = 'http://127.0.0.1:8000/api/tintuc';
			const response = await fetch(requestUrl);
			const responseJSON = await response.json();
			setNews(responseJSON.data);
			setTotalPage(Math.floor(responseJSON.total / responseJSON.per_page) + 1)
		}

		fetchData();
	}, []);

	const listNewsReeder = news.map((value, key) => {
		const date = new Date(value.updated_at);
		const dateFormat = formatDate(date);
		const mo_ta = value.mo_ta.slice(0, 300)
		if (key % 2 === 0) {
			return (
				<Card key={key} plain blog className={classes.card}>
					<GridContainer>
						<GridItem xs={12} sm={5} md={5}>
							<CardHeader image plain>
								<Link to={"/detail/" + changeURL(value.tieu_de) + "." + value.id +".html"}>
									<img
										src={value.anh}
										alt="..." />
								</Link>
								<div
									className={classes.coloredShadow}
									style={{
										backgroundImage: `url(${value.anh})`,
										opacity: "1"
									}}
								/>
							</CardHeader>
						</GridItem>
						<GridItem xs={12} sm={7} md={7}>
							<h3 className={classes.cardTitle}>
								<Link to={"/detail/" + changeURL(value.tieu_de) + "." + value.id +".html"}>
									{value.tieu_de}
								</Link>
							</h3>
							<p className={classes.description1}>
								{`${mo_ta}...`}
								<Link to={"/detail/" + changeURL(value.tieu_de) + "." + value.id +".html"}>
									{" "}
									Xem chi tiết{" "}
								</Link>
							</p>
							<p className={classes.author}>
								người đăng:{" "}
								<b>TLU</b>
								{" "}
																				, {dateFormat}
																		</p>
						</GridItem>
					</GridContainer>
				</Card>
			)
		} else {
			return (
				<Card plain blog className={classes.card}>
					<GridContainer>
						<GridItem xs={12} sm={7} md={7}>
							<h3 className={classes.cardTitle}>
								<Link to={"/detail/" + changeURL(value.tieu_de) + "." + value.id +".html"}>
								{value.tieu_de}
																				</Link>
							</h3>
							<p className={classes.description1}>
							{`${mo_ta}...`}
																				<Link to={"/detail/" + changeURL(value.tieu_de) + "." + value.id +".html"}>
									{" "}
																						Xem chi tiết{" "}
								</Link>
							</p>
							<p className={classes.author}>
								người đăng:{" "}
								<b>TLU</b>
								{" "}
																				, {dateFormat}
																		</p>
						</GridItem>
						<GridItem xs={12} sm={5} md={5}>
							<CardHeader image plain>
								<Link to={"/detail/" + changeURL(value.tieu_de) + "." + value.id +".html"}>
									<img
										src={value.anh}
										alt="..." />
								</Link>
								<div
									className={classes.coloredShadow}
									style={{
										backgroundImage: `url(${value.anh})`,
										opacity: "1"
									}}
								/>
							</CardHeader>
						</GridItem>
					</GridContainer>
				</Card>
			)
		}
	})

	return (
		<div className={classes.blog} style={{ padding: '0px' }}>
			<div className={classes.container}>
				<GridContainer>
					<GridItem
						xs={12}
						sm={10}
						md={10}
						className={classes.mlAuto + " " + classes.mrAuto}
					>
					{listNewsReeder}
					</GridItem>
					<GridItem
						xs={12}
						sm={10}
						md={10}
						className={classes.mlAuto + " " + classes.mrAuto}
					>
						<div className={classes.root}>
							<Pagination count={totalPage} page={page} variant="outlined" onChange={handleChange} size="large" color="secondary" />
						</div>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	);
}
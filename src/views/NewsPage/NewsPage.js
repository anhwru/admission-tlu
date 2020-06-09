import React from "react";

import "./Sections/Style.scss";
// import Parallax from "components/Parallax/Parallax.js";
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import VNav_Header from "../IndexPage/Sections/VNav_Header";
import News from "./Sections/News";
import VFooter from "../IndexPage/Sections/VFooter";


function NewsPage() {
		document.documentElement.classList.remove("nav-open");
		const checkScroll = () => {
				const componentPosition = document.getElementsByClassName("add-animation");
				const scrollPosition = window.pageYOffset;
				for (var i = 0; i < componentPosition.length; i++) {
						var rec =
								componentPosition[i].getBoundingClientRect().top + window.scrollY + 100;
						if (scrollPosition + window.innerHeight >= rec) {
						} else if (scrollPosition + window.innerHeight * 0.8 < rec) {
								componentPosition[i].classList.remove("animated");
						}
				}
		};
		
		React.useEffect(() => {
				document.body.classList.add("presentation-page");
				window.addEventListener("scroll", checkScroll);
				window.scrollTo(0, 0);
				document.body.scrollTop = 0;
				return function cleanup() {
						document.body.classList.remove("presentation-page");
						window.removeEventListener("scroll", checkScroll);
				};
		});

		const [state, setState] = React.useState(null)
		const getData = (data) => {
			setState(data);
		}
		
		return (
				
				<div>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<VNav_Header/>
								<News loadPage={(data) => {getData(data)}} />
								<VFooter/>
						</MuiPickersUtilsProvider>
				</div>
		);
}

export default NewsPage;
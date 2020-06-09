import React from "react";
import VNav_Header from "./Sections/VNav_Header.js";
import "./Sections/Style.scss";
// import Parallax from "components/Parallax/Parallax.js";
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import Admis_Form from "./Sections/VForm";
import VTitle from "./Sections/VTitle";
import VFooter from "./Sections/VFooter";

function IndexPage() {
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
		return (
				
				<div>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<VNav_Header/>
								<VTitle/>
								<Admis_Form/>
								<VFooter/>
						</MuiPickersUtilsProvider>
				</div>
		);
}

export default IndexPage;
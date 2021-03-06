import React from "react";

import "./Sections/Style.scss";
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import VNav_Header from "../IndexPage/Sections/VNav_Header";
import VFooter from "../IndexPage/Sections/VFooter";
import ProfileDetail from "./Sections/ProfileDetail";


function ProfilePage() {
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
								<ProfileDetail/>
								<VFooter/>
						</MuiPickersUtilsProvider>
				</div>
		);
}

export default ProfilePage;
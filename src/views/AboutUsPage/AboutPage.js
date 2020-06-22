import React from "react";
import "./Sections/Style.scss";
// import Parallax from "components/Parallax/Parallax.js";
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import VNav_Header from "../IndexPage/Sections/VNav_Header";
import VFooter from "../IndexPage/Sections/VFooter";


function AboutPage() {
		return (
				
				<div>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<VNav_Header/>
								
								<VFooter/>
						</MuiPickersUtilsProvider>
				</div>
		);
}

export default AboutPage;
import React from "react";
import "./Sections/Style.scss";
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import VNav_Header from "../IndexPage/Sections/VNav_Header";
import VFooter from "../IndexPage/Sections/VFooter";
import About from "./Sections/About";


function AboutPage() {
		return (
				
				<div>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<VNav_Header/>
								<About/>
								<VFooter/>
						</MuiPickersUtilsProvider>
				</div>
		);
}

export default AboutPage;
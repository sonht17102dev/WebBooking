import React from 'react'
import NavbarLayout from '../../components/Navbar/NavbarLayout';
import Header from '../../components/Header/Header';
import BodyContent from '../../components/BodyHome/BodyContent';
import Footer from '../../components/Footer/Footer';
import { DateRange } from "react-date-range";
import { useState } from 'react';


const Home = (props) => {
	const [state, setState] = useState([
		{
			startDate: new Date(),
			endDate: null,
			key: 'selection'
		}
	]);
	return (
		<div className='section-padding'>
			<section id="navbar">
				<NavbarLayout />
			</section>
			<section id="header">
				<Header />
			</section>
			<section id="body-content">
				<BodyContent />
			</section>
			<section id="footer">
				<Footer />
			</section>
			
		</div>
	);
};

export default Home;

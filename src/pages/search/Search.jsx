import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import BodySearch from '../../components/BodySearch/BodySearch';
const Search = () => {
  return (
    <div className='section-padding'>
			<section id="navbar">
				<Navbar />
			</section>
			
			<section id="body-content">
				<BodySearch />
			</section>
			<section id="footer">
				<Footer />
			</section>
		</div>
  );
};

export default Search;

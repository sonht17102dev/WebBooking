import React from 'react'
import NavbarLayout from '../../components/Navbar/NavbarLayout';
import Footer from '../../components/Footer/Footer';
import BodySearch from '../../components/BodySearch/BodySearch';
const Search = () => {
  return (
    <div className='section-padding'>
			<section id="navbar">
				<NavbarLayout />
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

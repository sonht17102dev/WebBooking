import React from 'react'
import NavbarLayout from '../../components/Navbar/NavbarLayout';
import Footer from '../../components/Footer/Footer';
import  Signup from '../../components/BodyHome/Signup'
import BodyDetail from '../../components/BodyDetail/BodyDetail';
const Detail = () => {
  return (
    <div className='section-padding'>
      <section id="navbar">
				<NavbarLayout />
			</section>
      <section id="body-content">
				<BodyDetail />
			</section>
			<section id="footer">
				<Signup />
				<Footer />
			</section>
    </div>
  );
};

export default Detail;

import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import BodyDetail from '../../components/BodyDetail/BodyDetail';
const Detail = () => {
  return (
    <div className='section-padding'>
      <section id="navbar">
				<Navbar />
			</section>
      <section id="body-content">
				<BodyDetail />
			</section>
			<section id="footer">
				<Footer />
			</section>
    </div>
  );
};

export default Detail;

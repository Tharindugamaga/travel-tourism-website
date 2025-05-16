import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';
import ava04 from '../../assets/images/ava-4.jpeg';
import './TestImonial.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestImonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 800,
        slidesToShow: 3, // 👈 Show 3 slides on large screens
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 992, // for tablets
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768, // for mobile
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      

  return (
    <Slider {...settings}>
      <div className='testimonial py-4 px-3'>
        <p>"Planning our trip was so easy thanks to this site — every spot we visited felt like a dream come true!"</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava01} alt="Client 1" className='w-25 h-25 rounded' />
          <div>
            <h6 className='mb-0 mt-3'>Nimal Perera</h6>
            <p>Colombo, Sri Lanka</p>
          </div>
        </div>
      </div>

      <div className='testimonial py-4 px-3'>
        <p>"From beaches to mountains, every recommendation was spot on. It felt like we had a local guide with us!"</p>
        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava02} alt="Client 2" className='w-25 h-25 rounded' />
          <div>
            <h6 className='mb-0 mt-3'>Sarah Johnson</h6>
            <p>California, USA</p>
          </div>
        </div>
      </div>

      <div className='testimonial py-4 px-3'>
  <p>"We found hidden spots we’d never have explored without this guide. Truly memorable!"</p>
  <div className='d-flex align-items-center gap-4 mt-3'>
    <img src={ava03} alt="Client 3" className='w-25 h-25 rounded' />
    <div>
      <h6 className='mb-0 mt-0'>Rajitha Fernando</h6>
      <p className='mb-0'>Galle, Sri Lanka</p>
    </div>
  </div>
</div>

<div className='testimonial py-4 px-3'>
  <p>"The tips were spot on and made our trip so much easier. Great experience!"</p>
  <div className='d-flex align-items-center gap-4 mt-3'>
    <img src={ava04} alt="Client 4" className='w-25 h-25 rounded' />
    <div>
      <h6 className='mb-0 mt-0'>Kamal Perera</h6>
      <p className='mb-0'>Colombo, Sri Lanka</p>
    </div>
  </div>
</div>

    </Slider>
  );
};

export default TestImonial;

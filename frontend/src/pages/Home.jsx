import React from 'react';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroVideo1 from '../assets/images/hero-video1.mp4';
import heroVideo2 from '../assets/images/hero-video2.mp4'
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitle from './../shared/Subtitle';
import worldImg from './../assets/images/world.png';
import experienceIMg from '../assets/images/experience.png'

import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tour/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import TestImonial from '../components/TestImonial/TestImonial';
import Newsletter from '../shared/Newsletter';
const Home = () => {
  return (
    <>
      {/*==== Hero Section Start ====*/} 
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle="Know Before you Go" />
                  <img src={worldImg} alt="World map" />
                </div>
                <h1>
                  Traveling opens the door to creating
                  <span className='highlight'> Memories</span>
                </h1>
                <p>
                  Discover beautiful destinations, breathtaking landscapes, and unforgettable adventures in Sri Lanka. From golden beaches to lush hills and ancient sites, it's a paradise for every traveler.
                </p>
              </div>
            </Col>

            <Col lg="2">
  <div className="hero__img-box mt-4">
    <video src={heroVideo1} autoPlay muted loop poster={heroImg} />
  </div>
</Col>
<Col lg="2">
  <div className="hero__img-box mt-4">
    <video src={heroVideo} autoPlay muted loop poster={heroImg} />
  </div>
</Col>
<Col lg="2">
  <div className="hero__img-box mt-4">
    <video src={heroVideo2} autoPlay muted loop poster={heroImg} />
  </div>
</Col>


            <SearchBar />
          </Row>
        </Container>
      </section>
      {/*==== Hero Section End ====*/}

      {/*==== Services Section Start ====*/} 
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className='services__subtitle'>What We Serve</h5>
              <h2 className='services__title'>We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/*==== Services Section End ====*/}

      {/*==== Featured Tours Section Start ====*/} 
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={'Explore'} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      {/*==== Featured Tours Section End ====*/}

      {/*==== Experience Section Start ====*/} 
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={'Experience'} />
                <h2>With our expertise <br /> We will serve you</h2>
                <p>
                  With expert knowledge of Sri Lanka's most peaceful retreats, we ensure a relaxing and rejuvenating journey, tailored just for you. Trust our experience to guide you through a land of healing and natural beauty.
                </p>
              </div>

              <div className='counter__wrapper d-flex align-items-center gap-5'>
                <div className='counter__box'>
                  <span>1M+</span>
                  <h6>Website Visitors</h6>
                </div>
                <div className='counter__box'>
                  <span>2K+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className='counter__box'>
                  <span>15</span>
                  <h6>Years Helping Travelers</h6>
                </div>
              </div>
            </Col>

            <Col lg='6'>
              <div className='experience__img'>
                <img src={experienceIMg} alt='' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*==== Experience Section End ====*/}

      {/*==== Gallery Section Start ====*/} 
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={'Gallery'} />
              <h2 className="gallery_title">Our Gallery</h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/*==== Gallery Section End ====*/} 


          {/*==== testimonialSection start ====*/} 
      <section>
        <Container>
          <Row>
            <Col lg="12">
              
                <Subtitle subtitle={'FanS Love'} />
                <h2 className='testimonial__title'>What our fan say about us</h2>
               
              </Col>
              <Col lg="12">
              <TestImonial/>
              </Col>
              </Row>
          </Container>
          </section>
              {/*==== testimonialSection End ====*/} 

              <Newsletter/>

    </>
  );
};

export default Home;

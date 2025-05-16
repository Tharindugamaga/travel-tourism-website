import React, { useRef, useState } from 'react';
import '../styles/tour-details.css';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import tourData from '../assets/data/tours';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking'

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);

  const tour = tourData.find(tour => tour.id === id);

  if (!tour) {
    return (
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <h2>Tour not found</h2>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  const { photo, title, desc, reviews, city, distance } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  // Format date
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  // Submit handler
  const submitHandler = e => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;

    alert(`Review: ${reviewText}\nRating: ${tourRating}`);
    // You can push this to backend or state later.
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className="tour__content">
                <img src={photo} alt={title} className="tour__img" />
                <div className="tour__info">
                  <h2>{title}</h2>

                  <div className='d-flex align-items-center gap-5'>
                    <span className='tour__rating d-flex align-items-center gap-1'>
                      <i className="ri-star-line" style={{ color: 'var(--secondary-color)' }}></i>
                      {!reviews || reviews.length === 0 ? (
                        <span className='not-rated'>Not rated</span>
                      ) : (
                        <>
                          {Number(avgRating).toFixed(1)} <span>({reviews.length})</span>
                        </>
                      )}
                    </span>
                    <span className="location-info d-flex align-items-center gap-3">
                      <span><i className="ri-map-pin-fill"></i> {city}</span>
                      <span><i className="ri-map-pin-fill"></i> {distance} km</span>
                    </span>
                  </div>

                  <hr />

                  <div className="tour__desc">
                    <h5>Description</h5>
                    <p className='des'>{desc}</p>
                  </div>
                </div>

<br /><br /><br />
                <hr />
                {/* Tour Reviews Section */}
                <div className="tour_reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>

                  <form onSubmit={submitHandler}>
                    <div className='d-flex align-items-center gap-3 mb-4 rating__group'>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <span key={num} onClick={() => setTourRating(num)} style={{ cursor: 'pointer' }}>
                          {num}<i className="ri-star-line"></i>
                        </span>
                      ))}
                    </div>

                    <div className="review__input">
                      <input
                        type="text"
                        ref={reviewMsgRef}
                        placeholder="Share your thoughts"
                        required
                      />
                      <button className="btn primary__btn text-white" type='submit'>
                        Submit
                      </button>
                    </div>
                  </form>

                  <hr />

                  <ListGroup className='user__reviews'>
                    {reviews?.map((review, index) => (
                      <ListGroup.Item key={index} className='review__item d-flex gap-3 mb-3'>
                        <img src={avatar} alt="user avatar" className='review__avatar' />
                        <div className='w-100'>
                          <div className='d-flex align-items-center justify-content-between'>
                            <div>
                              <h5>User {index + 1}</h5>
                              <p>{new Date('01-18-2022').toLocaleDateString('en-US', options)}</p>
                            </div>
                            <span className='d-flex align-items-center'>
                              5<i className="ri-star-fill"></i>
                            </span>
                          </div>
                          <h6>Amazing Tour</h6>
                        </div>
                      </ListGroup.Item>
                    ))}

                    <ListGroup.Item className='review__item d-flex gap-3 mb-3'>
                      <img src={avatar} alt="user avatar" className='review__avatar' />
                      <div className='w-100'>
                        <div className='d-flex align-items-center justify-content-between'>
                          <div>
                            <h5>Tharindu</h5>
                            <p>{new Date('12-01-2021').toLocaleDateString('en-US', options)}</p>
                          </div>
                          <span className='d-flex align-items-center'>
                            4<i className="ri-star-fill"></i>
                          </span>
                        </div>
                        <h6>Good trip</h6>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </div>
                {/* End Tour Reviews Section */}
              </div>
            </Col>

            <Col lg='4'>
             <Booking tour ={tour} avgRating= {avgRating}/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TourDetails;

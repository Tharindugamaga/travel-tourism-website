import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import './tour-card.css';
import calculateAvgRating from '../utils/avgRating';

const TourCard = ({ tour }) => {
  const { id, title, photo, shortDesc, featured, reviews, city } = tour;

  // Use utility function to calculate ratings
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  return (
    <div className='tour__card'>
      <Card>
        <div className='tour__img'>
          <img src={photo} alt='tour-img' />
          {featured && <span>Featured</span>}
        </div>

        <CardBody>
          <div className='card__top d-flex align-items-center justify-content-between'>
            <span className='tour__location d-flex align-items-center gap-1'>
              <i className="ri-map-pin-line"></i> {city}
            </span>

            <span className='tour__rating d-flex align-items-center gap-1'>
              <i className="ri-star-line"></i>
              {!reviews || reviews.length === 0 ? (
                <span className='not-rated'>Not rated</span>
              ) : (
                <>
                  {Number(avgRating).toFixed(1)} <span>({reviews.length})</span>
                </>
              )}
            </span>
          </div>

          <div className='title__row d-flex align-items-center justify-content-between'>
            <h5 className='tour__title mb-0'>
              <Link to={`/tours/${id}`}>{title}</Link>
            </h5>
            <Link to={`/tours/${id}`} className='btn booking_btn'>
              Visit
            </Link>
          </div>

          <p className='tour__desc'>{shortDesc}</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default TourCard;

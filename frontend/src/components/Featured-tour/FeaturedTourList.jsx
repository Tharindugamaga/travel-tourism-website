import React from "react";
import { Col } from "reactstrap";
import TourCard from "../../shared/TourCard";
import tourData from '../../assets/data/tours';




const FeaturedTourList = () => {


  return (
    <>

      {tourData?.map((tour) => (
        <Col
          lg="3"
          md="4"
          sm="6"
          xs="12"
          className="mb-4 d-flex align-items-stretch"
          key={tour.id}
          
        >
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedTourList;

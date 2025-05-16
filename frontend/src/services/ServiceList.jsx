import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'react-bootstrap'
import weatherImg from '../assets/images/weather.png'
import beachImg from '../assets/images/guide.webp'
import safariImg from '../assets/images/customization.webp'

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Check Local Weather",
    desc: "Get real-time weather updates for popular tourist spots in Sri Lanka."
  },
  {
    imgUrl: beachImg,
    title: "Beach Getaways",
    desc: "Discover paradise beaches like Mirissa, Unawatuna, and Arugam Bay."
  },
  {
    imgUrl: safariImg,
    title: "Wildlife Safaris",
    desc: "Book safaris to Yala to spot leopards and elephants."
  }
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg='3' key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  )
}

export default ServiceList

import React, { useState } from 'react';
import '../styles/hotel.css';
import { Modal, Button } from 'react-bootstrap';
import HImg01 from '../assets/images/hotel1.jpg.webp';
// import HImg02 from '../assets/images/hotel2.jpg.webp';
// import HImg03 from '../assets/images/hotel3.jpg.webp';
// import HImg04 from '../assets/images/hotel4.jpg.webp';
// import HImg05 from '../assets/images/hotel5.jpg.webp';
// import HImg06 from '../assets/images/hotel6.jpg.webp';
// import HImg07 from '../assets/images/hotel7.jpg.webp';
// import HImg08 from '../assets/images/hotel8.jpg.webp';
// import HImg09 from '../assets/images/hotel9.jpg.webp';
// import HImg10 from '../assets/images/hotel10.jpg.webp';

const hotelsData = [
  {
    id: 1,
    name: 'Heritance Kandalama',
    location: 'Dambulla, Central Province',
    price: 120,
    rating: 5,
    image: HImg01,
    phone: '+94112345678',
    description: 'A luxurious eco-friendly hotel overlooking the Sigiriya Rock Fortress.',
  },
  {
    id: 2,
    name: 'Jetwing Lighthouse',
    location: 'Galle, Southern Province',
    price: 150,
    rating: 4,
    image: HImg01,
    phone: '+94912345678',
    description: 'An elegant beachfront hotel designed by Geoffrey Bawa.',
  },
  {
    id: 3,
    name: 'Cinnamon Grand Colombo',
    location: 'Colombo, Western Province',
    price: 160,
    rating: 5,
    image: HImg01,
    phone: '+94112546789',
    description: 'A five-star city hotel offering luxury and comfort in Colombo.',
  },
  {
    id: 4,
    name: 'The Fortress Resort & Spa',
    location: 'Koggala, Southern Province',
    price: 180,
    rating: 5,
    image:HImg01,
    phone: '+94912233445',
    description: 'Boutique beachfront resort blending colonial charm and modern luxury.',
  },
  {
    id: 5,
    name: 'Chena Huts by Uga Escapes',
    location: 'Yala, Southern Province',
    price: 250,
    rating: 5,
    image: HImg01,
    phone: '+94472223456',
    description: 'Luxury safari lodge near Yala National Park with wild views.',
  },
  {
    id: 6,
    name: 'Taj Bentota Resort & Spa',
    location: 'Bentota, Southern Province',
    price: 140,
    rating: 4,
    image: HImg01,
    phone: '+94472234567',
    description: 'A tropical retreat with a stunning ocean view in Bentota.',
  },
  {
    id: 7,
    name: 'Cape Weligama',
    location: 'Weligama, Southern Province',
    price: 220,
    rating: 5,
    image: HImg01,
    phone: '+94412255678',
    description: 'A clifftop luxury resort with panoramic views of the Indian Ocean.',
  },
  {
    id: 8,
    name: 'Anantara Peace Haven Tangalle',
    location: 'Tangalle, Southern Province',
    price: 200,
    rating: 5,
    image: HImg01,
    phone: '+94422223456',
    description: 'A beachfront paradise nestled among coconut plantations.',
  },
  {
    id: 9,
    name: 'Amaya Hills',
    location: 'Kandy, Central Province',
    price: 110,
    rating: 4,
    image: HImg01,
    phone: '+94812345678',
    description: 'Mountain view resort offering a royal stay experience in Kandy.',
  },
  {
    id: 10,
    name: '98 Acres Resort & Spa',
    location: 'Ella, Uva Province',
    price: 170,
    rating: 5,
    image:HImg01,
    phone: '+94572234567',
    description: 'Eco-friendly resort with panoramic views of Little Adam’s Peak.',
  },
  {
    id: 10,
    name: '98 Acres Resort & Spa',
    location: 'Ella, Uva Province',
    price: 170,
    rating: 5,
    image:HImg01,
    phone: '+94572234567',
    description: 'Eco-friendly resort with panoramic views of Little Adam’s Peak.',
  },
   {
    id: 10,
    name: '98 Acres Resort & Spa',
    location: 'Ella, Uva Province',
    price: 170,
    rating: 5,
    image:HImg01,
    phone: '+94572234567',
    description: 'Eco-friendly resort with panoramic views of Little Adam’s Peak.',
  },
];

const Hotels = () => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShow = (hotel) => {
    setSelectedHotel(hotel);
    setShowModal(true);
  };

  const handleClose = () => {
    setSelectedHotel(null);
    setShowModal(false);
  };

  return (
    <section id="hotels" className="hotels-section">
      <h2>Top Hotels in Sri Lanka</h2>
      <p>
        Find the best places to stay across the island – luxury, budget, and everything in between.
      </p>

      <div className="hotel-list">
        {hotelsData.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <img src={hotel.image} alt={hotel.name} />
            <h3>{hotel.name}</h3>
            <p className="location">{hotel.location}</p>
            <p className="price">From ${hotel.price}/night</p>
            <p className="rating">{'⭐️'.repeat(hotel.rating)}</p>
            <button className="details-btn" onClick={() => handleShow(hotel)}>
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedHotel && (
        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedHotel.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedHotel.image}
              alt={selectedHotel.name}
              style={{ width: '100%', borderRadius: '10px', marginBottom: '15px' }}
            />
            <p><strong>Location:</strong> {selectedHotel.location}</p>
            <p><strong>Price:</strong> ${selectedHotel.price}/night</p>
            <p><strong>Rating:</strong> {'⭐️'.repeat(selectedHotel.rating)}</p>
            <p><strong>Description:</strong> {selectedHotel.description}</p>
            <p><strong>Phone:</strong> <a href={`tel:${selectedHotel.phone}`}>{selectedHotel.phone}</a></p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <a href={`tel:${selectedHotel.phone}`}>
              <Button variant="primary">
                Book Now
              </Button>
            </a>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
};

export default Hotels;

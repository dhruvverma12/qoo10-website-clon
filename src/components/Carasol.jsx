import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FirstImage from '../assets/image1.jpg'; // Adjust the path accordingly
import SecondImage from '../assets/image2.jpg'; // Adjust the path accordingly
import ThirdImage from '../assets/image3.jpg'; // Adjust the path accordingly
import '../styles/Carasol.css'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='carsol-container'>
      <Carousel.Item>
        <img
          className="carasol-image"
          src={FirstImage}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carasol-image"
          src={SecondImage}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carasol-image"
          src={ThirdImage}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;

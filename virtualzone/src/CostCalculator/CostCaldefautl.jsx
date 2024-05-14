import React, { useState } from 'react';
import './CostCal1.css';
import CostCal2 from './CostCal2'; // Import the next component
import CostCal1 from './CostCal1';
function CostCalSlider() {
  const totalSlides = 2; // Total number of slides
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const renderSlide = () => {
    switch (currentSlide) {
      case 0:
        return <CostCal1 />;
      case 1:
        return <CostCal2 />;
      // Add cases for more slides/components if needed
      default:
        return null;
    }
  };

  return (
    <div className='slider-container'>
      <div className='slider' >
        {renderSlide()}
      </div>
      <div className='controls'>
        <button type='button' onClick={handlePrevSlide} disabled={currentSlide === 0}>Previous</button>
        <button type='button' onClick={handleNextSlide} disabled={currentSlide === totalSlides - 1}>Next</button>
      </div>
    </div>
  );
}

export default CostCalSlider;

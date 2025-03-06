import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel/slick/slick';
import EstimateForm from '../EstimateForm/EstimateForm';
import './HomePage.css';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSlickInitialized, setIsSlickInitialized] = useState(false);

  const initializeSlider = () => {
    const $slider = $('.slideshow .slider');
    const maxItems = $('.item', $slider).length;

    if (!$slider.hasClass('slick-initialized')) {
      $slider.addClass('slideshow-left').slick({
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        infinite: true,
        dots: true,
        speed: 1000,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        if (currentSlide > nextSlide && nextSlide === 0 && currentSlide === maxItems - 1) {
          $('.slideshow-right .slider').slick('slickGoTo', -1);
          $('.slideshow-text').slick('slickGoTo', maxItems);
        } else if (currentSlide < nextSlide && currentSlide === 0 && nextSlide === maxItems - 1) {
          $('.slideshow-right .slider').slick('slickGoTo', maxItems);
          $('.slideshow-text').slick('slickGoTo', -1);
        } else {
          $('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
          $('.slideshow-text').slick('slickGoTo', nextSlide);
        }
      });
    }

    const $rightSlider = $('.slideshow-right .slider');
    if (!$rightSlider.hasClass('slick-initialized')) {
      $rightSlider.slick({
        swipe: false,
        vertical: true,
        arrows: false,
        infinite: true,
        speed: 950,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        initialSlide: maxItems - 1,
      });
    }

    const $textSlider = $('.slideshow-text');
    if (!$textSlider.hasClass('slick-initialized')) {
      $textSlider.slick({
        swipe: false,
        vertical: true,
        arrows: false,
        infinite: true,
        speed: 900,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      });
    }

    setIsSlickInitialized(true);

    // Recalculate layout after initialization
    setTimeout(() => {
      $slider.slick('setPosition');
      $rightSlider.slick('setPosition');
      $textSlider.slick('setPosition');
    }, 100);
  };

  useEffect(() => {
    const images = document.querySelectorAll('.item img');
    let loadedImages = 0;

    const handleImageLoad = () => {
      loadedImages += 1;
      if (loadedImages === images.length) {
        initializeSlider();
      }
    };

    if (images.length > 0) {
      images.forEach((img) => {
        if (img.complete) {
          handleImageLoad();
        } else {
          img.addEventListener('load', handleImageLoad);
          img.addEventListener('error', handleImageLoad); // Handle broken images
        }
      });
    } else {
      initializeSlider(); // Fallback if no images
    }

    const handleResize = () => {
      if (isSlickInitialized) {
        $('.slideshow-left, .slideshow-right .slider, .slideshow-text').slick('unslick');
        initializeSlider();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (isSlickInitialized) {
        try {
          $('.slideshow-left, .slideshow-right .slider, .slideshow-text').slick('unslick');
        } catch (e) {
          console.warn('Slick cleanup failed:', e);
        }
      }
      images.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      });
    };
  }, [isSlickInitialized]);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="split-slideshow">
      <div className="slideshow">
        <div className="slider">
          {[
            "/images/kitchen-home.jpg",
            "/images/livingroom.jpg",
            "/images/livingroom2.jpg",
            "/images/basement1.jpg",
            "/images/basement2.jpg",
            "/images/hallway.jpg",
            "/images/bathroom1.jpg",
            "/images/bathroom2.jpg",
            "/images/deck1.jpg",
            "/images/kitchen-home.jpg",
          ].map((src, index) => (
            <div className="item" key={index}>
              <img src={src} alt={`Slide ${index + 1}`} />
              <button className="estimation-button" onClick={handleOpenModal}>
                Free Estimate
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="slideshow-text">
        {[...Array(10)].map((_, index) => (
          <div className="item" key={index}></div>
        ))}
      </div>
      <EstimateForm show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default HomePage;




import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel/slick/slick';
import EstimateForm from '../EstimateForm/EstimateForm';
import './HomePage.css';

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    const checkImagesLoaded = () => {
      const images = document.querySelectorAll('.item img');
      if (images.length === 0) {
        setImagesLoaded(true);
        return;
      }

      let loadedCount = 0;
      const totalImages = images.length;

      const handleImageLoad = () => {
        loadedCount++;
        if (loadedCount === totalImages) setImagesLoaded(true);
      };

      images.forEach(img => {
        if (img.complete) {
          handleImageLoad();
        } else {
          img.addEventListener('load', handleImageLoad);
          img.addEventListener('error', handleImageLoad);
        }
      });

      // Fallback timeout
      setTimeout(() => setImagesLoaded(true), 2000);
    };

    checkImagesLoaded();

    return () => {
      const $slider = $('.slideshow .slider');
      if ($slider.hasClass('slick-initialized')) {
        $slider.slick('unslick');
      }
    };
  }, []);

  useEffect(() => {
    if (imagesLoaded) {
      const $slider = $('.slideshow .slider');
      $slider.slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 400, // Faster transition
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000, // Faster autoplay
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        lazyLoad: 'ondemand', // Load images on demand
      });

      const handleResize = () => $slider.slick('setPosition');
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [imagesLoaded]);

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
              <img src={src} alt={`Slide ${index + 1}`} loading="lazy" />
              <button className="estimation-button" onClick={handleOpenModal}>
                Free Estimate
              </button>
            </div>
          ))}
        </div>
      </div>
      <EstimateForm show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default HomePage;




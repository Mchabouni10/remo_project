import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel/slick/slick';
import EstimateForm from '../EstimateForm/EstimateForm';
import './HomePage.css';


const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const initializeSlider = () => {
      const $slider = $('.slideshow .slider');
      const maxItems = $('.item', $slider).length;

      $slider.addClass('slideshow-left');

      $('.slideshow-left')
        .slick({
          vertical: true,
          verticalSwiping: true,
          arrows: false,
          infinite: true,
          dots: true,
          speed: 1000,
          cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        })
        .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
          if (
            currentSlide > nextSlide &&
            nextSlide === 0 &&
            currentSlide === maxItems - 1
          ) {
            $('.slideshow-right .slider').slick('slickGoTo', -1);
            $('.slideshow-text').slick('slickGoTo', maxItems);
          } else if (
            currentSlide < nextSlide &&
            currentSlide === 0 &&
            nextSlide === maxItems - 1
          ) {
            $('.slideshow-right .slider').slick('slickGoTo', maxItems);
            $('.slideshow-text').slick('slickGoTo', -1);
          } else {
            $('.slideshow-right .slider').slick(
              'slickGoTo',
              maxItems - 1 - nextSlide
            );
            $('.slideshow-text').slick('slickGoTo', nextSlide);
          }
        });

      // Right slider initialization
      $('.slideshow-right .slider').slick({
        swipe: false,
        vertical: true,
        arrows: false,
        infinite: true,
        speed: 950,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        initialSlide: maxItems - 1,
      });

      // Text slider initialization
      $('.slideshow-text').slick({
        swipe: false,
        vertical: true,
        arrows: false,
        infinite: true,
        speed: 900,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      });
    };

    initializeSlider();

    // Cleanup on component unmount
    return () => {
      $('.slideshow-left, .slideshow-right .slider, .slideshow-text').slick(
        'unslick'
      );
    };
  }, []);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="split-slideshow">
      <div className="slideshow">
        <div className="slider">
          <div className="item">
            <img src="/images/kitchen-home.jpg" alt="Kitchen Home" />
            <button className="estimation-button" onClick={handleOpenModal}>
              Free Estimate
            </button>
          </div>
          <div className="item">
            <img src="/images/livingroom.jpg" alt="Living Room" />
            <button className="estimation-button" onClick={handleOpenModal}>
              Free Estimate
            </button>
          </div>
          <div className="item">
            <img src="/images/livingroom2.jpg" alt="Living Room 2" />
            <button className="estimation-button" onClick={handleOpenModal}>
              Free Estimate
            </button>
          </div>
          <div className="item">
            <img src="/images/basement1.jpg" alt="Basement 1" />
            <button className="estimation-button" onClick={handleOpenModal}></button>
          </div>
          <div className="item">
            <img src="/images/basement2.jpg" alt="Basement 2" />
            <button className="estimation-button" onClick={handleOpenModal}></button>
          </div>
          <div className="item">
            <img src="/images/hallway.jpg" alt="Hallway" />
            <button className="estimation-button" onClick={handleOpenModal}></button>
          </div>
          <div className="item">
            <img src="/images/bathroom1.jpg" alt="Bathroom 1" />
            <button className="estimation-button" onClick={handleOpenModal}></button>
          </div>
          <div className="item">
            <img src="/images/bathroom2.jpg" alt="Bathroom 2" />
            <button className="estimation-button" onClick={handleOpenModal}></button>
          </div>
          <div className="item">
            <img src="/images/deck1.jpg" alt="Deck 1" />
            <button className="estimation-button" onClick={handleOpenModal}></button>
          </div>
          <div className="item">
            <img src="/images/kitchen-home.jpg" alt="Kitchen Home" />
            <button className="estimation-button" onClick={handleOpenModal}></button>
          </div>
        </div>
      </div>
      <div className="slideshow-text">
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item"></div>
      </div>
      <EstimateForm show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default HomePage;



import React, { useEffect } from 'react';
import anime from 'animejs';
import { carouselAnimation } from '../../animation';

export const Carousel = () => {

  useEffect(() => {
    anime(carouselAnimation);
  }, []);

  return (
    <div id="carouselExampleCaptions" className="carousel slide carouselAnimation" data-bs-ride="carousel" data-test='carousel-component'>
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/spider-man.jpeg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Spiderman No Way Home</h5>
            <p>Parker tries to convince an MIT administrator to reconsider MJ and Ned's applications.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/lord-of-the-rings.jpeg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>The Lord of the Rings</h5>
            <p>Sixty years later, Bilbo celebrates his 111th birthday in the Shire.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="/interstellar.jpeg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Interstellar</h5>
            <p>Cooper decides to use their remaining fuel to reach Mann's planet.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
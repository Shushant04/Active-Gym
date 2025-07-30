import React from 'react';
import heroImg from '../../assets/gym-02.jpeg';
import dumbleIcon from '../../assets/dumble.png';
import './Hero.css';

const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="hero_wrapper">

          {/* Hero Content */}
          <div className="hero_content">
            <h2 className="section_title">
              Exercise is key to <span className="highlights">healthy</span> lifestyle
            </h2>
            <p>
              Welcome to our website! We are committed to providing excellent service
              and ensuring a great experience for all our users. Feel free to explore our
              services and contact us with any questions or feedback.
            </p>

            <div className="hero_btns">
              <button className="register_btn">Get Started</button>
              <button className="watch_btn">
                <span><i className="ri-play-fill"></i></span> Watch Video
              </button>
            </div>

            {/* Moved gym location info below buttons */}
            <div className="gym_location gym_below">
              <span><i className="ri-map-pin-2-fill"></i></span>
              <h5>Find a new gym near you</h5>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hero_img">
            <div className="hero_img-wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box_img">
                      <img src={heroImg} alt="Gym Workout" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="heart_rate">
                <h5>Heart Rate</h5>
                <span><i className="ri-heart-pulse-fill"></i></span>
                <h5>2567 BPM</h5>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

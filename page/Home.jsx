import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/home.css';
import img1 from '../assets/homeimgs/h2img.jpeg';
import img2 from '../assets/homeimgs/h6.jpg';
import img3 from '../assets/homeimgs/h4.webp';
import img4 from '../assets/homeimgs/h6.jpg';
import img5 from '../assets/homeimgs/h5.webp';
import img6 from '../assets/homeimgs/h4.webp';
import Login from './Login'; 
import { Link } from 'react-router-dom';
import Map from '../components/Map';

export default function Home() {
  const sliderRef = useRef(null); // Create a ref for the Slider component

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="homepage">
      <div className="homewrap">
        <div className="homebgimg">
          <div className="fade-in-out">
            <h1>Welcome to S-GYM</h1>
            <h4>Ready, set, sweat</h4>
            <h2 style={{ color: 'red' }}>S-Gym your way to a better you today</h2>
            <p>Welcome to S-Gym Fitness, the premier fitness destination in Khammam.</p>
          </div>
        </div>
        <div className="potetionalbox">
          <h3>Unlock Your Full Fitness Potential at S-GYM Fitness!</h3>
        </div>
        <div className="Trainingcontain">
          <h2>WE BELIEVE IN Training!!</h2>
          <p>
            At S-GYM Fitness, we believe that fitness goes beyond just working out. That's why we offer a variety of services designed to help you achieve your fitness goals, including personal training, group fitness classes, and nutrition counseling. Our gym in Khammam is equipped with state-of-the-art facilities to provide you with the best fitness experience. Whether you're new to fitness or a seasoned enthusiast, our expert trainers and tailored programs at our Khammam gym will support you every step of the way.
          </p>
        </div>
   <div className="landingimgs">
          <Slider ref={sliderRef} {...settings}>
            <div className='landingimg'>
              <img className='bg1' src={img1} alt="img" />
            </div>
            <div className='landingimg'>
              <img className='bg2' src={img2} alt="img" />
            </div>
            <div className='landingimg'>
              <img className='bg3' src={img3} alt="img" />
            </div>
            <div className='landingimg'>
              <img className='bg4' src={img4} alt="img" />
            </div>
            <div className='landingimg'>
              <img className='bg5' src={img5} alt="img" />
            </div>
            <div className='landingimg'>
              <img className='bg5' src={img6} alt="img" />
            </div>
          </Slider>
        </div>

        <div className="fitnessgoal">
          <div className="goalhead">
            <h2>Discover Our Services for Your</h2>
            <h1 style={{ color: 'red', marginLeft: '7rem' }}>Fitness Goals</h1>
            <p>Join one of our plans and get access to all of our fitness workouts.</p>
          </div>
          <div className="goaldiv">
            <div className="goaldiv1">
              <div className="yearlyplandiv">
                YEARLY PLAN
                <p>(Single)</p>
                <p>₹18000</p>
              </div>
            </div>
            <div className="goaldiv2">
            </div>
            <div className="goaldiv3">
              <div className="monplandiv">
                MONTHLY PLAN
                <p>(Single)</p>
                <p>₹4500</p>
              </div>
            </div>
          </div>

          <div className="facilities">
            <div className="fachhead">
              <h2>S-GYM Fitness Facilities </h2>
              <h4>Join us today and start your journey to a</h4>
              <h3>healthier, happier you</h3>
            </div>
            <div className="facilitiesdiv">
              <div className="faci1">
                <ul className="facitems">
                  <li>Unlock a complete area of 5000 sq ft.</li>
                  <li>Hygienic changing rooms.</li>
                  <li>Modern Showering Facilities.</li>
                  <li>Relaxing Steam Room.</li>
                  <li>Private Consultation Room.</li>
                  <li>Wide range of equipment.</li>
                  <li>Regular deep cleaning and sanitization.</li>
                  <li>Biometric Entry Available.</li>
                  <li>Access to Bubbles Salon exclusive offers.</li>
                </ul>
              </div>
              <div className="faci2">
                <h4>Want to know more?</h4>
                <button><Link to={'/about'} className='pagelinks'>About Us</Link></button>
              </div>
            </div>
          </div>
        </div>
        <div id="logincontimg" className="logincontimg">
          <div className="logincontdiv">
            <center> <h2 style={{ fontStyle: 'italic', color: 'white' }}>FEELING Motivated?
              <br />
              GET IN TOUCH</h2></center>
            <Login className='logincont' />
          </div>
        </div>
        <div className="contquery" id='contquery'>
          <h4> For Any Queries, Call or WhatsApp At ✆ 91+7330656759</h4>
        </div>

        <div className="map">
          <Map/>
        </div>
      </div>
    </div>
  );
}



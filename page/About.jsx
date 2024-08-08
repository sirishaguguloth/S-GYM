import React from 'react';
import '../styles/about.css';
import { Link } from 'react-router-dom';
import aboutimage from '../assets/homeimgs/h1img.jpg';
import { TbDeviceMobileCharging } from "react-icons/tb";
import { FaShower } from "react-icons/fa";
import { MdDryCleaning } from "react-icons/md";
import { FaHandsBubbles } from "react-icons/fa6";

export default function About() {
  return (
    <div className='aboutpage'>
      <div className="aboutwrap">
        <div className="aboutbgimg">
        <div className="aboutiusdiv">
            <h1 style={{ color:'red'}}>About Us</h1>
            <h5>Welcome to Xpress Fitness, the epitome of a top-notch gym in Vijayawada. 
                Our unique approach revolves around your holistic well-being. Our goal is 
                to propel you towards your fitness aspirations and unlock your maximum 
                potential through our diverse services and transformative programs.</h5>
                <button className='aboutbtn'><Link to={'/login'} className='pagelinks'>Join Now</Link></button>
        </div>
        </div>
        <div className="ourgymdetails">
            <div className="ourgym1">
                <h2>OUR GYM</h2>
                <p>Our state-of-the-art gym in Vijayawada is located in the heart of the city, making it convenient for you to fit your workouts into your busy schedule. Our facilities include a wide range of equipment and training tools to help you get the most out of your workout, no matter your fitness level or goals.</p>
                <button className='aboutbtn'><Link to={'/package'} className='pagelinks'> Our packages</Link></button>
            </div>
            <div className="ourgym2" >
                <img src={aboutimage} alt="" height={350}  width={350} />
            </div>
        </div>
        <div className="fecilitiesabout">
            <li className='aboutfacitems'><TbDeviceMobileCharging className='abouticons'/>Changing Rooms</li>
            <li className='aboutfacitems'><FaShower className='abouticons'/>Showering Facilities</li>
            <li className='aboutfacitems'><MdDryCleaning className='abouticons'/>Regular deep cleaning</li>
        </div>
        <div className="aboutknow">
            <div className="aboutknowimg">
            <img src={aboutimage} alt="" height={350}  width={450} />
            </div>
            <div className="aboutknowcont">
            <h2>Get to Know Us</h2>
                <p>We are committed to providing an inclusive and supportive environment where everyone feels welcome and comfortable. Whether you’re a beginner or a seasoned fitness enthusiast, our team is here to support you every step of the way.</p>
                <button className='aboutbtn'><Link to={'/'} className='pagelinks'>Conatct us</Link></button>
            </div>
        </div>
        <div className="getstartabout">
            <h2>Get Started</h2>
            <p>So what are you waiting for? Join us today and start your journey to a healthier, happier You</p>
            <button className='aboutbtn'><Link to={'/login'} className='pagelinks'>Become a Member</Link></button>
        </div>
      </div>
    </div>
  )
}

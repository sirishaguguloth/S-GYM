import React, { useState } from 'react';
import '../styles/package.css';
import { Link } from 'react-router-dom';
import img1 from '../assets/homeimgs/h2img.jpeg';

export default function Package() {
  const [trainers, setTrainers] = useState([
    {
      img: img1,
      name: 'Vaasu',
      specialty: 'Core strength and training',
      experience: '10 years'
    },
    {
      img: img1,
      name: 'John',
      specialty: 'Weight Loss Specialist',
      experience: '8 years'
    },
    {
      img: img1,
      name: 'Sitha',
      specialty: 'Muscle Building Expert',
      experience: '12 years'
    }
  ]);
  return (
    <div className='packagepage'>
      <div className="packagewrap">
        <div className="mempackage">
            <h1>S-GYM </h1>
            <h2>Membership Packages</h2>
            <div className="membershipdiv">
              <div className="memdiv">
              <p>offer various membership packages to suit your needs and preferences, including monthly, quarterly, and yearly options. Each membership package includes access to all of our facilities, equipment, and classes,
                 as well as the guidance and support of our experienced trainers. When it comes to gym fees in Vijayawada, our flexible packages ensure you can choose what best fits your fitness journey.</p>
                 <button className='pacakgebtn'><Link to={'/login'} className='pagelinks'>Join Now</Link></button>
              </div>
              <div className="memdiv1">
                <h4>Duration</h4>
                <p>Annual</p>
                <p>Half-Yearly</p>
                <p>Quarterly</p>
                <p>Monthly</p>
                <p>One Day</p>
              </div>
              <div className="memdiv1" style={{backgroundColor:'rgb(91, 91, 91)', color:'white'}}>
                <h4>Single</h4>
                <p>₹ 18,000</p>
                <p>₹ 12,000</p>
                <p>₹ 9,500</p>
                <p>₹ 4,500</p>
                <p>₹ 350</p></div>
              <div className="memdiv1">
              <h4>Couple</h4>
                <p>₹ 34,000</p>
                <p>₹ 22,000</p>
                <p>₹ 17,000</p>
                <p>N/A</p>
                <p>N/A </p>
                </div>
              </div>
            </div>
            
            <div className="personalpackage">
              <div className="ppdiv1">
                <p>Our experienced personal trainers will work with you one-on-one to design a customized fitness
                 program that suits your specific goals, whether you want to lose weight, build muscle,
                 improve your athletic performance, or just feel better in your own skin.</p>
                 <button className='pacakgebtn'><Link to={'/'} className='pagelinks'>Call Now</Link></button>
              </div>
                 
              <div className="ppdiv2">
                <div className="ppdivs2">
              <div className="memdiv1" style={{backgroundColor:'rgb(91, 91, 91)', color:'white'}}>
              <h4>Duration</h4>
                <p>Monthly</p>
                <p>Quarterly</p>
                <p>Half-Yearly</p>
                <p>Yearly</p>
              </div>
              <div className="memdiv1">
              <h4>Couple</h4>
                <p>₹ 7,000</p>
                <p>₹ 18,000</p>
                <p>₹ 30,000</p>
                <p>₹ 55,000</p>
                </div>
              </div>
              </div>
            </div>

            <div className="mempackage">
            <h1>S-GYM Weight Management</h1>
            <h2>and Holistic Health Programs</h2>
            <div className="membershipdiv">
              <div className="memdiv">
              <p>Unlock vitality with our dynamic gym packages, featuring Weight Management and Holistic Health Programs. Elevate your fitness 
                journey with access to top-notch facilities, personalized guidance, and invigorating classes. Your path to holistic well-being begins here.</p>
                 <button className='pacakgebtn'><Link to={'/login'} className='pagelinks'>Join Now</Link></button>
              </div>
              <div className="memdiv1">
                <h4>Weight Loss Target</h4>
                <p>4Kgs</p>
                <p>8Kgs</p>
                <p>16Kgs</p>
                <p>20Kgs</p>
                <p>One Day</p>
              </div>
              <div className="memdiv1" style={{backgroundColor:'rgb(91, 91, 91)', color:'white'}}>
                <h4>
                Membership</h4>
                <p>1 Month +
                Personal Training</p>
                <p>3 Months +
                Personal Training</p>
                <p>6 Months +
                Personal Training</p>
                <p>8 Months +
                Personal Training</p>
                </div>
              <div className="memdiv1">
              <h4>Tariff</h4>
                <p>₹ 10,500</p>
                <p>₹ 25,500</p>
                <p>₹ 40,000</p>
                <p>₹ 55,000</p>
                <p>N/A </p>
                </div>
              </div>
            </div>

            <div className="plusprog">
              <div className="plusimg"></div>
              <div className="pluscont">
                <h3>S-GYM Fitness Plus Program</h3>
                <p>One year (12 months) Membership +
                   One year (12 months) of Personal Training for ₹6800</p>
                   <button className='pacakgebtn'><Link to={'/login'} className='pagelinks'>Join Now</Link></button>
              </div>
            </div>
            <div className="pthead">
              <h1>Personal Trainers</h1>
            </div>
            <div className="personaltrainers">
            {trainers.map((trainer, index) => (
            <div key={index} className="pt1">
              <img src={trainer.img} alt={`Trainer ${index + 1}`} width={200} height={200} className='ptimg'/>
              <div className="trainer-details">
                <h3>{trainer.name}</h3>
                <p><strong></strong> {trainer.specialty}</p>
                <p><strong>Experience:</strong> {trainer.experience}</p>
              </div>
            </div>
          ))}
            </div>
      </div>
    </div>
  )
}

import React from 'react'
import "../styles/footer.css";
import { PiAddressBookDuotone } from "react-icons/pi";
import { SiSocialblade } from "react-icons/si";
import { RiMenuSearchFill } from "react-icons/ri";

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footerwrap">
        <div className="firstfooter">
        <div className="footeradderss">
          <h4>ADDRESS<PiAddressBookDuotone className='footericons'/></h4>
          <p>Khammam</p>
          <h6>E-mail</h6>
          <p>S-gym@gmail.com</p>
          <h6>phone:7330656759</h6>
        </div>
        <div className="footersocial">
            <h5>SOCIAL<SiSocialblade className='footericons'/></h5>
            <h6>Facebook</h6>
            <h6>Youtube</h6>
            <h6>Instagram</h6>
        </div>
        <div className="Menu">
            <h5>MENU <RiMenuSearchFill className='footericons'/></h5>
            <h6>Home</h6>
            <h6>AboutUs</h6>
            <h6>Packages</h6>
            <h6>ContactUs</h6>
        </div>
        </div>
        <div className="secondfooter">
            <p>Copyright&#169; 2024 by S-GYM</p>
        </div>
      </div>
    </div>
  )
}

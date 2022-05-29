import React from 'react'
import './FooterDefault.css'

import facebook from '../../Img/Footer/logo_fb.svg'
import instagram from '../../Img/Footer/logo_instagram.svg'
import twitter from '../../Img/Footer/logo_twitter.svg'
import mail from '../../Img/Footer/logo_mail.svg'
import twitch from '../../Img/Footer/logo_twitch.svg'
import logo from "../../Img/Nav/logo.svg";

export const FooterDefault = () => {
  return (
    <div className='container-footer'>
      <div className='address'>
          <p>Jalan Suroyo No. 161 Mayangan Kota <br/> Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
      </div>
      <div className='pages'>
          <ul>
            <li><a href="http://google.com">Our Services</a></li>
            <li><a href="http://google.com">Why Us</a></li>
            <li><a href="http://google.com">Testimonial</a></li>
            <li><a href="http://google.com">FAQ</a></li>
          </ul>
      </div>
      <div className='contact'>
          <p>Connect with us</p>
          
            <a href="http://google.com"><img className="facebook" src={facebook} alt="#"></img></a>
            <a href="http://google.com"><img className="instagram" src={instagram} alt='#'></img></a>
            <a href="http://google.com"><img className="twitter" src={twitter} alt='#'></img></a>
            <a href="http://google.com"><img className="mail" src={mail} alt='#'></img></a>
            <a href="http://google.com"><img className="twitch" src={twitch} alt='#'></img></a>
          
      </div>
      <div className='copyright'>
          <p>Copyright Binar 2022</p>
          <img className="logo2" src={logo} alt="#"></img>
      </div>
    </div>
  )
}
import React from 'react'
import s from "../styles/footer.module.css"
import img from "../img/image 25.png"
import img1 from "../img/image 1.png"
import { FaFacebookF } from "react-icons/fa6";
import Image from 'next/image';
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
export default function footer() {
  return (
    <div>
      <div className={s.footer_sayt}>
     <div className={s.app}>
     <Image src={img} alt="" />
      <p>Download the app by clicking the link below :</p>
      <div className={s.apps}>
        <Image src={img1} alt="" />
        <Image src={img1} alt="" />
      </div>
     </div>
     <ul>
      <h3>Menu</h3>
      <li>О компании</li>
      <li>документов</li>
      <li>Контакты</li>
     </ul>
     <ul>
      <h3>Contact</h3>
      <li><FaPhoneAlt style={{marginRight:'20px'}} />+998-88 164 7777</li>
      <li><MdEmail style={{marginRight:'20px'}}/>radiocity@gmail.com</li>
      <li><FaLocationDot style={{marginRight:'20px'}} />Buxoro , Buxoro 1A</li>
     </ul>
     <ul>
      <h3>Sosial media</h3>
      <div className={s.social}>
      <FaFacebookF />
      <FaTelegram />
      <FaYoutube />
      <FaInstagram />
      </div>
     
     </ul>
      </div>
      <hr style={{width:'40%',margin:'auto',color:'rgba(128, 128, 128, 0.175)',opasity:'0.7',boxShadow:'0px 0px 0px 1px'}} />
      <p className={s.footer_p}>Copyright ©2024 All rights reserved | This web site is made with  by 4a.uz</p>
    </div>
  )
}

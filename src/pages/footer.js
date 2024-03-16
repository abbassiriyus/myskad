import React from 'react'
import s from "../styles/footer.module.css"
import { FaTelegramPlane,FaFacebookF } from "react-icons/fa";
import { LiaYoutube } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa6";
import img from "../img/image.png"
import img1 from "../img/click.png"
import Image from 'next/image';
export default function footer() {
  return (
    <div>
        <div className={s.footer_sayt}>
        <div className={s.contact}>
            <h5>Контакты</h5>
            <span>Call-центр</span>
            <h5>+998-88 164 7777</h5>
            <span>Эл. почта</span>
            <p>info@rce.uz</p>
        </div>
        <div className={s.app}>
        <h5>Мы в социальных сетяхМы в социальных сетях</h5>
        <div className={s.app_1}>
            <div className={s.telegram}>
            <FaTelegramPlane />
            </div>
            <div className={s.youtube}>
            <LiaYoutube />
            </div>
            <div className={s.instagram}>
            <FaInstagram />
            </div>
            <div className={s.facebook}>
            <FaFacebookF />
            </div>
        </div>
            </div>
            <div className={s.pay}>
                <div className={s.payme}>
                    <Image src={img} alt="" />
                    <Image src={img1} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

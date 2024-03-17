import React from 'react'
import s from "../styles/footer.module.css"
import img from "../img/image.png"
import img1 from "../img/click.png"
import img2 from "../img/telegram.png"
import img3 from "../img/instagram.png"
import img4 from "../img/insta.png"
import img5 from "../img/facebook.png"
import Image from 'next/image';
export default function footer() {
  return (
    <div>
        <div className={s.footer_sayt}>
        <div className={s.contact}>
            <h5>Контакты</h5>
            <span>Call-центр</span>
            <h5 style={{marginTop:'10px'}}>+998-88 164 7777</h5>
            <span>Эл. почта</span>
            <p>info@rce.uz</p>
        </div>
        <div className={s.app}>
        <h5>Мы в социальных сетях</h5>
        <div className={s.app_1}>
          <div> <Image src={img2} alt="" /></div>
           <Image src={img3} alt="" />
          <div> <Image src={img4} alt="" /></div>
           <Image src={img5} alt="" />
        </div>
            </div>
            <div className={s.pay}>
                <div className={s.payme}>
                   <div> <Image src={img} alt="" /></div>
                    <Image src={img1} alt="" />
                </div>
                <p>Интренет магазин RadioCity 2010-2024 <br />
                права защищены
                </p>
            </div>
        </div>
        <p className={s.footer_p}>Copyright ©2024 All rights reserved | This web site is made with  by 4a.uz</p>
    </div>
  )
}

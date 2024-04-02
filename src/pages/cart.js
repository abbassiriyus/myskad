import React from 'react'
import s from "../styles/cart.module.css"
import Footer from "../pages/footer"
import Navbar from "../pages/NavbarHome"
import Image from 'next/image'
import { FaCheck } from "react-icons/fa";
import img from "../img/noutbuk.png"
import img1 from "../image/pard.png"
import { RiDeleteBin5Fill } from "react-icons/ri";
export default function oneProduct() {
  return (
    <div>
        <Navbar/> <h2>Заказ в ORZUTECH</h2>
    <div className={s.body}>
       
    <div className={s.about}>
<div className={s.cart}>
 <div className={s.order1}>
 <Image className={s.image1} src={img1} alt="" />
    <div className={s.price2}>
        <span>TP-Link UE300C</span>
        <p style={{fontSize:'13px'}}>1599</p>
        <span><strong>270 000,00</strong>₽/шт</span>
        <p style={{fontSize:'13px'}}>270 000,00 ₽</p>
    </div>
 </div>
<div></div>
<div className={s.delete1}>
<RiDeleteBin5Fill  style={{color:'red',fontSize:'30px'}}/>
<div className={s.plus_minus}>
    <button className={s.minus}>-</button>
    <span>1</span>
   <button className={s.plus}>+</button>
</div>
</div>
</div>
<hr style={{marginBottom:'20px',marginTop:"20px",color:"rgba(128, 128, 128, 0.411)",opacity:'0.3',boxShadow:'0px 0px 3px',width:'80%',margin:'auto'}}/>
    </div>
<div className={s.order}>
<div className={s.price_big}>
<div className={s.price}>
    <h3>4 040 000 сум</h3>
    <div className={s.price_back}>
      <span>≈ $ 329.79</span>
    </div>
    </div>
   <div className={s.span}>
   <div className={s.price_back1}>
      <div className={s.tick}>
        <div className={s.check}>
        <FaCheck />
        </div>
      <span>В наличии</span>
      </div>
    </div>
   </div>
   <button>Добавить в корзину</button>
</div>
<div className={s.price_big}>
<h3>Заказать</h3>
<hr style={{marginBottom:'20px',marginTop:"10px",color:"rgba(128, 128, 128, 0.411)",opacity:'0.3',boxShadow:'0px 0px 3px'}}/>
<div className={s.input}>
<label htmlFor="">Ваше имя</label><br />
<input type="text" placeholder='имя'/>
</div>
<div className={s.input}>
<label htmlFor="">Hомер телефона</label><br />
<input type="text" placeholder='+998'/>
</div>
   <button>Заказать</button>
</div>
</div>




    </div>
        <Footer/>
    </div>
  )
}
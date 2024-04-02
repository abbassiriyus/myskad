import React from 'react'
import s from "../styles/oneProduct.module.css"
import Footer from "../pages/footer"
import Navbar from "../pages/NavbarHome"
import Image from 'next/image'
import { FaCheck } from "react-icons/fa";
import img from "../img/noutbuk.png"
export default function oneProduct() {
  return (
    <div>
        <Navbar/>
    <div className={s.body}>
  <div className={s.d}>
  <div  className={s.image}>
  
  </div>
  </div>
    <div className={s.about}>
      <h3>Ноутбук HP 15s-fq3011ur 15.6" Celeron N4500
4Гб DDR4 256Гб SSD (3V7K5EA)</h3>
<hr style={{marginBottom:'20px',marginTop:"10px",color:"rgba(128, 128, 128, 0.411)",opacity:'0.3',boxShadow:'0px 0px 3px'}}/>
<strong>Краткое описание</strong>
<p>Процессор: 2х ядерный Intel Celeron N4500
Частота процессора: до 2.8 ГГц  
Операционная система: FreeDOS
Оперативная память: DDR4, 4 Гб
Накопитель данных: SDD, 256 Гб
Модель видеокарты: Intel UHD Graphics
Тип видеокарты: интегрированный
Диагональ экрана: 15.6″
Ёмкость аккумулятора: 41 Вт.ч
Комплект: ноутбук, адаптер питания, документация</p>
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
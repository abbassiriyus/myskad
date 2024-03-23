import React from 'react'
import Footer from "../pages/footer"
import Navbar from "../pages/NavbarHome"
import s from "../styles/about.module.css"
import { BsBuilding } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa6";
import { GrLink } from "react-icons/gr";
import { IoMdCart } from "react-icons/io";
import { GrDeliver } from "react-icons/gr";    
import { FaHeadphones } from "react-icons/fa"; 
export default function contact() {
 
  return (
    <div>
<Navbar/>
<div className={s.page_road}>   
            <div className={s.span_p}>
                <h1>О компании</h1>
            <p><span >Главная</span> /О компании</p>
            </div>
        </div>
<div className={s.contact_sayt}>

<div className={s.welcome}>
<div className={s.welcome_text}>
<span>Мы верим в меньшее, но в лучшее</span>
<h1>Добро пожаловать в МедК! Цель вашей службы — создание нашего MedQ. Поэтому мы всегда хотим быть рядом с вами....</h1>
<p>Наша компания работает честно уже 5 лет. Оказать положительное влияние на рынки, на которых мы работаем, расширить возможности партнеров и сообщества. мы фокусируемся на росте и добавлении ценности для клиентов.</p>
<p>Сообщение от наших основателей</p>
<p className={s.border}>Нам удалось создать платформу, к которой клиенты могут получить доступ, когда захотят. Мы всегда стремимся служить вам.</p>
</div>
<div style={{background:'url("https://cdn.vox-cdn.com/thumbor/kON-ZQrYVHKQkmczFhRK_kabAcw=/0x0:6222x3500/2000x1333/filters:focal(3111x1750:3112x1751)/cdn.vox-cdn.com/uploads/chorus_asset/file/22298929/SM3DW_Lead.jpg")',width:'100%',backgroundSize:'cover',backgroundPosition:'center'}} className={s.welcome_img}>
    

</div>
</div>
<div className={s.clients}>
    <div className={s.win}>
    <h1>12M</h1>
    <span>Счастливые клиенты</span>
    </div>
    <div className={s.win}>
    <h1>22M</h1>
    <span>Глобальные клиенты</span>
    </div>
    <div className={s.win}>
    <h1>79+</h1>
    <span>Эксперты Сотрудник</span>
    </div>
    <div className={s.win}>
    <h1>29+</h1>
    <span>Награды</span>
    </div>  
</div>
<div className={s.choose_us}>
    <h1>Почему выбрали нас</h1>
    <hr style={{marginBottom:'30px'}} />
<div className={s.production}>
<div className={s.quick}>
   <div className={s.quick_body}>
    <center><BsBuilding style={{color:'red',fontSize:'40px',marginBottom:'20px'}} /></center>
   <h2>Высокая производительность</h2>
    <p>Lorem ipsum dolor sit amet, consectetur ipiscing elit, sed do eiusmod tempor inc ididunt ut labore et dolore magna aliqua.</p>
   </div>
    </div> 
    <div className={s.quick}>
   <div className={s.quick_body}>
    <center><GrLink  style={{color:'red',fontSize:'40px',marginBottom:'20px'}} /></center>
   <h2>Надежные поставки</h2>
    <p>Lorem ipsum dolor sit amet, consectetur ipiscing elit, sed do eiusmod tempor inc ididunt ut labore et dolore magna aliqua.</p>
   </div>
    </div> 
    <div className={s.quick}>
   <div className={s.quick_body}>
    <center><GrDeliver  style={{color:'red',fontSize:'40px',marginBottom:'20px'}} /></center>
   <h2>Быстрая доставка</h2>
    <p>Lorem ipsum dolor sit amet, consectetur ipiscing elit, sed do eiusmod tempor inc ididunt ut labore et dolore magna aliqua.</p>
   </div>
    </div> 
    
</div>
<div className={s.free}>
<div className={s.delivery}>
<GrDeliver  style={{color:'red',fontSize:'40px'}} />
<div className={s.shipping}>
    <h3>Бесплатная доставка</h3>
    <p>Бесплатная доставка по всему миру</p>
</div>
</div>
<div className={s.delivery}>
<FaHeadphones   style={{color:'red',fontSize:'40px'}} />
<div className={s.shipping}>
    <h3>Поддерживать 24/7</h3>
    <p>Свяжитесь с нами 24 часа в сутки</p>
</div>
</div>
<div className={s.delivery}>
<FaRegCreditCard   style={{color:'red',fontSize:'40px'}} />
<div className={s.shipping}>
    <h3>Безопасные платежи</h3>
    <p>100% защита платежей</p>
</div>
</div>
<div className={s.delivery}>
<IoMdCart   style={{color:'red',fontSize:'40px'}} />
<div className={s.shipping}>
    <h3>Легкий возврат</h3>
    <p>Простая политика возврата</p>
</div>
</div>
</div>
</div>
</div>
<Footer/>
    </div>
  )
}

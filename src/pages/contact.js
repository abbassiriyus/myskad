import React from 'react'
import s from "../styles/contact.module.css"
import Navbar from "../pages/NavbarHome"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from "../pages/footer"
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
            <div className={s.white}>
            <div className={s.white_body}>
            <div className={s.location}>
            <div className={s.phone}>
            <FaLocationDot style={{color:'red',fontSize:'30px'}}/>
            <h3>Адрес</h3>
            <p>Lorem ipsum dolor sit</p>
            </div>
            <div className={s.phone}>
            <FaPhone style={{color:'red',fontSize:'30px'}}/>
            <h3>Телефон</h3>
            <p>Lorem ipsum dolor sit</p>
            </div>
            <div className={s.phone}>
            <MdEmail style={{color:'red',fontSize:'30px'}}/>
            <h3>Email</h3>
            <p>Lorem ipsum dolor sit</p>
            </div>
            </div>
            <div className={s.inputs}>
                <h1>Отправить сообщение</h1>
                <p>поделитесь с нами своими предложениями, и мы свяжемся с вами в ближайшее время</p>
                <input type="text" name="" id="" placeholder='Введите ваше имя'/>
                <input type="text" name="" id="" placeholder='Введите свой номер телефона '/>
                <input type="text" name="" id="" placeholder='Введите адрес электронной почты '/>
               <textarea name="" id="" cols="30" rows="10" placeholder='Введите ваше сообщение'></textarea>
               <button>Отправлять</button>

     
             <div   className={s.location1}>
            <div className={s.phone}>
            <FaLocationDot style={{color:'red',fontSize:'30px'}}/>
            <h3>Адрес</h3>
            <p>Lorem ipsum dolor sit</p>
            </div>
            <div className={s.phone}>
            <FaPhone style={{color:'red',fontSize:'30px'}}/>
            <h3>Телефон</h3>
            <p>Lorem ipsum dolor sit</p>
            </div>
            <div className={s.phone}>
            <MdEmail style={{color:'red',fontSize:'30px'}}/>
            <h3>Email</h3>
            <p>Lorem ipsum dolor sit</p>
            </div>
            </div>
               
            </div>
            
            </div>
         
            <iframe className={s.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11990.515403730344!2d69.3711774!3d41.295181449999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef7caa606093d%3A0x4170e08da9eb76e7!2sAbror%20Ferma!5e0!3m2!1sru!2s!4v1711185301566!5m2!1sru!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>   </div>
    </div>
  )
}

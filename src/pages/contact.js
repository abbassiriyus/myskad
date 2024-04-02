import React, { useEffect, useState } from 'react'
import s from "../styles/contact.module.css"
import Navbar from "../pages/NavbarHome"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from "../pages/footer"
import axios from 'axios';
import url from "./host"
export default function contact() {
var [data,setData]=useState({})

function sendMessage(){
var send="Siz bilan bog`lanmoqchi"+`%0A`
send+= "ismi:"+document.querySelector('#name1').value+`%0A`
send+= "nomeri:"+document.querySelector('#phone1').value+`%0A`
send+= "email:"+document.querySelector('#email').value+`%0A`
send+= document.querySelector('#merssage').value+`%0A`
axios.get(`https://api.telegram.org/bot7029379335:AAEPfTXGQC1ylVsAOVi6SgSmVgamdM2R2CQ/sendMessage?chat_id=-1002089485609&text=${send}`).then(res=>{
  document.querySelector('#name1').value=''
  document.querySelector('#phone1').value=''
  document.querySelector('#email').value=''
  document.querySelector('#merssage').value=''
  axios.get(`https://api.telegram.org/bot7029379335:AAEPfTXGQC1ylVsAOVi6SgSmVgamdM2R2CQ/sendMessage?chat_id=1520593027&text=${send}`)
    alert("Информация отправлена. Мы скоро свяжемся с вами")
  }).catch(err=>{
    alert('Пожалуйста, позвоните по номеру. Ваше сообщение не было отправлено')
  })
  }
 
function getcompany() {
  axios.get(`${url()}/api/company`).then(res=>{
    if((res.data).length>0){
setData(res.data[0])
    }
  })
}
   

useEffect(()=>{
getcompany()
},[])
  return (
    <div>
<Navbar/>
<div className={s.page_road}>   
            <div className={s.span_p}>
                <h1>Контакт</h1>
            <p><span >Главная</span> /Контакт</p>
            </div>
        </div>
        <div className={s.contact_sayt}>
            <div className={s.white}>
            <div className={s.white_body}>
            <div className={s.location}>
            <div className={s.phone}>
            <FaLocationDot style={{color:'red',fontSize:'30px'}}/>
            <h3>Адрес</h3>
            <p>{data.address}</p>
            </div>
            <div className={s.phone}>
            <FaPhone style={{color:'red',fontSize:'30px'}}/>
            <h3>Телефон</h3>
            <p>{data.phone}</p>
            </div>
            <div className={s.phone}>
            <MdEmail style={{color:'red',fontSize:'30px'}}/>
            <h3>Email</h3>
            <p>{data.email}</p>
            </div>
            </div>
            <div className={s.inputs}>
                <h1>Отправить сообщение</h1>
                <p>поделитесь с нами своими предложениями, и мы свяжемся с вами в ближайшее время</p>
                <input type="text" name="" id="name1" placeholder='Введите ваше имя'/>
                <input type="text" name="" id="phone1" placeholder='Введите свой номер телефона '/>
                <input type="text" name="" id="email" placeholder='Введите адрес электронной почты '/>
               <textarea name="" id="merssage" cols="30" rows="10" placeholder='Введите ваше сообщение'></textarea>
               <button onClick={()=>{sendMessage()}}>Отправлять</button>

     
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
         {data.lac?(<iframe className={s.map} src={data.lac} width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>):(<></>)}
         

        </div>   </div>
        <Footer/>

    </div>
  )
}

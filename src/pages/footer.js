import React, { useEffect, useState } from 'react'
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
import url from "./host"
import axios from 'axios';
export default function footer() {
  var [company,setCompany]=useState([{}])

function getCompany(){
  axios.get(`${url()}/api/company`).then(res=>{
    if(res.data.length>0){
      setCompany(res.data)
    }
  })
}
var [documen,setDocumen]=useState({})
function getDocumen() {
  axios.get(`${url()}/api/document`).then(res=>{
if((res.data).length>0){
setDocumen(res.data[0])
}
  }).catch(err=>{

  })
}
useEffect(()=>{
  getCompany()
  getDocumen()
},[])


  return (
    <div>
      <div className={s.footer_sayt}>
     <div className={s.app}>
     <img src={company[0].image} alt="" />
      <p>Download the app by clicking the link below :</p>
      <div className={s.apps}>
        <Image src={img1} alt="" />
        <Image src={img1} alt="" />
      </div>
     </div>
     <ul>
      <h3>Menu</h3>
    <a href="/about/"><li>О компании</li></a>
    
    <a href={documen.image}><li>Документов</li></a>
    <a href="/contact/"><li>Контакты</li></a>
     
     </ul>
     <ul>
      <h3>Contact</h3>
      <a style={{textDecoration:'none',color:'black'}} href={`tel:+${company[0].phone}`}><li><FaPhoneAlt style={{marginRight:'20px'}} />+{company[0].phone}</li></a>
     <a style={{textDecoration:'none',color:'black'}} href={`mailto:${company[0].email}`}><li><MdEmail style={{marginRight:'20px'}}/>{company[0].email}</li></a> 
      <li><FaLocationDot style={{marginRight:'20px'}} />{company[0].address}</li>
     </ul>
     <ul>
      <h3>Sosial media</h3>
      <div className={s.social}>
     <a href={company[0].facebook}> <FaFacebookF /></a>
    <a href={company[0].telegram}> <FaTelegram /></a> 
      <a href={company[0].youtobe}><FaYoutube /></a>
     <a href={company[0].instagram}><FaInstagram /></a> 
      </div>
     
     </ul>
      </div>
      <hr style={{width:'40%',margin:'auto',color:'rgba(128, 128, 128, 0.175)',opasity:'0.7',boxShadow:'0px 0px 0px 1px'}} />
      <p className={s.footer_p}>Copyright ©2024 All rights reserved | This web site is made with  by 4a.uz</p>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import n from "../styles/NavbarHome.module.css"
import Image from 'next/image'
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FaPhone } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import user_image from "../image/user_image.png"
import toogle from "../image/toogle.png"
import logo from "../image/logo.png"
import axios from 'axios';
import url from "./host.js"

import { IoCloseSharp } from "react-icons/io5";
export default function NavbarHome() {
  var [category,setCategory]=useState([])
var [company,setCompany]=useState([{}])

function getCompany(){
  axios.get(`${url()}/api/company`).then(res=>{
    if(res.data.length>0){
      setCompany(res.data)
    }
  })
}
function seachData(){
var data=document.querySelector("#seach_data").value;
window.location=`/products/${category[0].id}/`;
localStorage.setItem("search", data);
}
  function getCategory(){
    axios.get(`${url()}/api/category`).then(res=>{
  setCategory(res.data)
    }).catch(err=>{
  console.log(err);
    })
  }
  function PasteSearch(e) {
   if((e.target.value).length==0){
    document.querySelector(".sharp").style="display:none"
   }else{
    document.querySelector(".sharp").style="display:block"
   }
  }
  useEffect(()=>{
getCategory()
getCompany()
  },[])
  return (
    <div>
<div className={n.navbar_home}>
<div className={n.logo}>

<div class="sec-center" style={{position:'relative'}}> 	
	  	<input class="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
	  	<label class="for-dropdown" for="dropdown"><Image src={toogle} alt='img' /> </label>
  		<div style={{maxWidth:'400px'}} class="section-dropdown"> 
      <a href="/">Домашняя страница</a>
		  	<input class="dropdown-sub" type="checkbox" id="dropdown-sub" name="dropdown-sub"/>
		  	<label class="for-dropdown-sub" for="dropdown-sub">Категория <IoIosArrowForward/></label>
	  		<div class="section-dropdown-sub"> 
        {category.map((item,key)=>{
         	 return	<a key={key} href={`/products/${item.id}/`}>{item.category_title}</a>
        })}
	  		</div>
        <a href="/about/">О компании</a>
  			<a href="#">Документы</a>
  			<a href="/contact">Контакты</a>
  		</div>
  	</div>
<img onClick={()=>{window.location="/"}} src={company[0].image} className={n.logo} />
</div>
<div className={n.input_search}>
    <input id='seach_data' defaultValue={localStorage.getItem("search")}  onKeyUp={(e)=>{PasteSearch(e)}} placeholder='Найти товары' type="text" />
    <div className={n.search_icons}>
    <div className={n.search_page}>
    <IoCloseSharp style={{display:'none'}} className='sharp'  />
    </div><IoMdSearch onClick={()=>{seachData()}}  />
    </div>
   
</div>
<div className={n.all_contact}>
<MdOutlineShoppingCart className={n.icons} />
<div className={n.contact}>
<BiWorld className={n.icons} />
<select name="" id="">
    {/* <option value="">Русский</option> */}
    <option value="">Русский</option>
 </select>

</div>
<a className={n.contact1} href={`tel:+${company[0].phone}`} style={{textDecoration:'none',color:"black"}} ><FaPhone className={n.icons} /><p>
  +{company[0].phone}</p></a>
<Image src={user_image}  className={n.alluser_img} />
</div>
</div>
<div className={n.line}></div>

  	
      </div>
  )
}

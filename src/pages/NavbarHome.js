import React, { Component } from 'react'
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
export default class NavbarHome extends Component {
  render() {
    return (
      <div>
<div className={n.navbar_home}>
<div className={n.logo}>

<div class="sec-center" style={{position:'relative'}}> 	
	  	<input class="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
	  	<label class="for-dropdown" for="dropdown"><Image src={toogle} /> </label>
  		<div style={{maxWidth:'400px'}} class="section-dropdown"> 
      <a href="/">Домашняя страница</a>
		  	<input class="dropdown-sub" type="checkbox" id="dropdown-sub" name="dropdown-sub"/>
		  	<label class="for-dropdown-sub" for="dropdown-sub">Категория <IoIosArrowForward/></label>
	  		<div class="section-dropdown-sub"> 
        
	  			<a href="#">Смартфоны и гаджеты </a>
	  			<a href="#">Dropdown Link </a>
	  		</div>
        <a href="/about/">О компании</a>
  			<a href="#">Документы</a>
  			<a href="/contact">Контакты</a>
  		</div>
  	</div>
<Image onClick={()=>{window.location="/"}} src={logo} className={n.logo} />
</div>
<div className={n.input_search}>
    <input placeholder='Найти товары' type="text" />
    <div className={n.search_icons}>
    <IoMdSearch  />
    </div>
</div>
<div className={n.all_contact}>
<MdOutlineShoppingCart className={n.icons} />
<div className={n.contact}>
<BiWorld className={n.icons} />
<select name="" id="">
    <option value="">Русский</option>
    <option value="">Русский</option>
 </select>

</div>
<div className={n.contact1} ><FaPhone className={n.icons} /><p>+998-88-164-7777</p></div>
<Image src={user_image}  className={n.alluser_img} />
</div>
</div>
<div className={n.line}></div>

  	
      </div>
    )
  }
}

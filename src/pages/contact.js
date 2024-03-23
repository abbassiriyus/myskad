import React from 'react'
import Footer from "../pages/footer"
import Navbar from "../pages/NavbarHome"
import s from "../styles/contact.module.css"
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
<div className={s.contact_sayt}>
<div className={s.page_road}>   
            <p><span >Главная</span> /О компании</p>
        </div>
<div className={s.welcome}>
<div className={s.welcome_text}>
<span>We believe in less but better</span>
<h1>Welcome to MedQ! The purpose of your service is to create our MedQ. So we always want to be by your side....</h1>
<p>Our company has been working honestly for 25 years. To make a positive impact in the markets where we operate, to empower partners and the community. we focusing on growth and adding value to customers.</p>
<p>A message from our founders</p>
<p className={s.border}>We’ve been able to create a platform that customers can get their hands on whenever they want. It is always our intention to serve you.</p>
</div>
<div style={{background:'url("https://cdn.vox-cdn.com/thumbor/kON-ZQrYVHKQkmczFhRK_kabAcw=/0x0:6222x3500/2000x1333/filters:focal(3111x1750:3112x1751)/cdn.vox-cdn.com/uploads/chorus_asset/file/22298929/SM3DW_Lead.jpg")',width:'100%',backgroundSize:'cover',backgroundPosition:'center'}} className={s.welcome_img}>
    

</div>
</div>
<div className={s.clients}>
    <div className={s.win}>
    <h1>12M</h1>
    <span>Happy Clients</span>
    </div>
    <div className={s.win}>
    <h1>22M</h1>
    <span>Global Customers</span>
    </div>
    <div className={s.win}>
    <h1>79+</h1>
    <span>Experts Employee</span>
    </div>
    <div className={s.win}>
    <h1>29+</h1>
    <span>Awards Win</span>
    </div>  
</div>
<div className={s.choose_us}>
    <h1>Why Choose Us</h1>
    <hr style={{marginBottom:'30px'}} />
<div className={s.production}>
<div className={s.quick}>
   <div className={s.quick_body}>
    <center><BsBuilding style={{color:'red',fontSize:'40px',marginBottom:'20px'}} /></center>
   <h2>High Production</h2>
    <p>Lorem ipsum dolor sit amet, consectetur ipiscing elit, sed do eiusmod tempor inc ididunt ut labore et dolore magna aliqua.</p>
   </div>
    </div> 
    <div className={s.quick}>
   <div className={s.quick_body}>
    <center><GrLink  style={{color:'red',fontSize:'40px',marginBottom:'20px'}} /></center>
   <h2>Reliable Supplying</h2>
    <p>Lorem ipsum dolor sit amet, consectetur ipiscing elit, sed do eiusmod tempor inc ididunt ut labore et dolore magna aliqua.</p>
   </div>
    </div> 
    <div className={s.quick}>
   <div className={s.quick_body}>
    <center><GrDeliver  style={{color:'red',fontSize:'40px',marginBottom:'20px'}} /></center>
   <h2>Quick Delivery</h2>
    <p>Lorem ipsum dolor sit amet, consectetur ipiscing elit, sed do eiusmod tempor inc ididunt ut labore et dolore magna aliqua.</p>
   </div>
    </div> 
    
</div>
<div className={s.free}>
<div className={s.delivery}>
<GrDeliver  style={{color:'red',fontSize:'40px'}} />
<div className={s.shipping}>
    <h3>Free Shipping</h3>
    <p>Free shipping world wide</p>
</div>
</div>
<div className={s.delivery}>
<FaHeadphones   style={{color:'red',fontSize:'40px'}} />
<div className={s.shipping}>
    <h3>Support 24/7</h3>
    <p>Contact us 24 hours a day</p>
</div>
</div>
<div className={s.delivery}>
<FaRegCreditCard   style={{color:'red',fontSize:'40px'}} />
<div className={s.shipping}>
    <h3>Secure Payments</h3>
    <p>100% payment protection</p>
</div>
</div>
<div className={s.delivery}>
<IoMdCart   style={{color:'red',fontSize:'40px'}} />
<div className={s.shipping}>
    <h3>Easy Return</h3>
    <p>Simple returns policy</p>
</div>
</div>
</div>
</div>
</div>
<Footer/>
    </div>
  )
}

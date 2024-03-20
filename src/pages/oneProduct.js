import React from 'react'
import s from "../styles/oneProduct.module.css"
import Footer from "../pages/footer"
import img from "../img/div.w-full.png"
import Navbar from "../pages/NavbarHome"
export default function oneProduct() {
  return (
    <div>
        <Navbar/>
    <div className={s.body}>
    <Image src={img} alt="" />
    </div>
        {/* <Footer/> */}
    </div>
  )
}

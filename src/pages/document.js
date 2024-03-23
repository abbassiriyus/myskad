import React from 'react'
import Footer from "../pages/footer"
import Navbar from "../pages/NavbarHome"
import s from  "../styles/document.module.css" 
export default function document() {
  return (
    <div>
<Navbar/>
<div className={s.page_road}>   
            <div className={s.span_p}>
                <h1>Документов</h1>
            <p><span >Главная</span> /Документов</p>
            </div>
        </div>
        <div className={s.document_sayt}>

        </div>
    </div>
  )
}

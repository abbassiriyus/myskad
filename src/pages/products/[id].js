import React, { useEffect, useState } from 'react'
import s from "../../styles/filterPage.module.css"
import Navbar from "../../pages/NavbarHome"
import { MdAddShoppingCart } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import Footer from "../../pages/footer"
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from 'next/router';
import axios from 'axios';
import url from "../host"
export default function filterPage() {
    var router=useRouter()
    var [pageTitle,setPageTitle]=useState("")
var [category,setCategory]=useState([])
    function getCategory() {
       axios.get(`${url()}/api/category`).then(res=>{
        setCategory(res.data)
      for (let i = 0; i < res.data.length; i++) {
        res.data[i].page=false
        if(res.data[i].id==router.query.id){
        res.data[i].page=true
        setPageTitle(res.data[i].category_title)
        }
      }
       }).catch(err=>{  
       })
    }
useEffect(()=>{
    console.log(router.query.id);
    if(router.query.id){
        getCategory()
    }
},[router])

  return (
    <div>
        <Navbar/>
        <div className={s.noutbuk_body}>
        <div className={s.page_road}>   
            <p><span >Главная</span> / {pageTitle}</p>
        </div>
        <div className={s.price}>
            <h3> {pageTitle}</h3>
            <div className={s.sort}>
            <p>Сортировать по:Цене</p>
            <p>Цене</p>
            </div>
        </div>
        <div className={s.level}>
       <div className={s.l_instruction}>
    
{category.map((item,key)=>{
return <div key={key} style={item.page?{background:'red'}:{}} onClick={()=>{if(!item.page){window.location=`/products/${item.id}/`}}} className={s.instruction}>
        <span>{item.category_title}</span>
</div>
})}



       </div>
       <main className={s.main2}>
        <div class={s.cards}>
          <div class={s.card}>
            <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}> <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div onClick={()=>window.location="/oneProduct/"} class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
          </div>
          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}>  <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div onClick={()=>window.location="/oneProduct/"} class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
          </div>

          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}>    <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div onClick={()=>window.location="/oneProduct/"} class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
            </div>
          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
            <div className={s.ss}><h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div onClick={()=>window.location="/oneProduct/"} class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
          </div>
          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}>  <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div onClick={()=>window.location="/oneProduct/"} class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
            </div>
          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}> <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div onClick={()=>window.location="/oneProduct/"} class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
            </div>
        </div>     
         <hr style={{marginTop:"30px",color:"rgba(128, 128, 128, 0.411)",opacity:'0.3',boxShadow:'0px 0px 3px'}}/>
        <div className={s.number}>
        <MdKeyboardArrowLeft />
<div className={s.one}>
    <span>1</span>
</div>
<div className={s.one}>
    <span>2</span>
</div>
<div className={s.one}>
    <span>3</span>
</div>
<div className={s.one}>
    <span>4</span>
</div>
<div className={s.one}>
    <span>5</span>
</div>
<div className={s.one}>
    <span>6</span>
</div>
        <MdKeyboardArrowRight />



        </div>
        <hr style={{marginBottom:"30px",color:"rgba(128, 128, 128, 0.411)",opacity:'0.3',boxShadow:'0px 0px 3px'}}/>
      </main>

        </div>
        </div>
<Footer/>
    </div>
  )
}

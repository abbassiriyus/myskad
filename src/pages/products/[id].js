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
    var [count,setCount]=useState(0)
    var [pageTitle,setPageTitle]=useState("")
var [category,setCategory]=useState([])
    function getCategory() {
       axios.get(`${url()}/api/category`).then(res=>{
        setCategory(res.data)
      for (let i = 0; i < res.data.length; i++) {
        res.data[i].page=false
        if(res.data[i].id==router.query.id){
        res.data[i].page=true
        getCard(res.data[i].category_id)
        setPageTitle(res.data[i].category_title)
        }
      }
       }).catch(err=>{  
       })
    }
    var [topTovar,setTopTovar]=useState([])

function pagnation(id){

}
    function getCard(category_id) {
      axios.get(`${url()}/api/category/count/${category_id}`).then(res2=>{
setCount(res2.data.count)
      axios.get(`${url()}/api/category/product/${category_id}?limit=10`).then(res=>{
        res.data.sort((a, b) => {
          const timestampA = new Date(a.updated);
          const timestampB = new Date(b.updated);
          return timestampB - timestampA;
        });
        setTopTovar(res.data)
      }).catch(err=>{
    console.log(err);
      })  })
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
         {topTovar.map((item,key)=>{
         return <div class={s.card}>
            <div class={s.img} style={(item.images.rows).length>0?{background: `url(${item.images.rows[0].miniature.downloadHref})`, backgroundSize: 'cover', backgroundPosition: 'center'}:{background: 'url(https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
            <div className={s.ss}> <h5>{item.name}</h5>
              <h3>{item.buyPrice && item.buyPrice.value} сум</h3>
              <div onClick={()=>window.location=`/oneproduct/${item.id}`} class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
          </div>
      
         })}
       

      
      
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

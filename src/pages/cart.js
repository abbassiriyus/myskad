import React, { useEffect, useState } from 'react';
import Footer from "../pages/footer"
import Navbar from "../pages/NavbarHome"
import s from "../styles/cart.module.css";
import Image from 'next/image'
import { FaCheck } from "react-icons/fa";
import img from "../img/noutbuk.png"
import img1 from "../image/pard.png"
import img2 from "../image/cart1.jpg"
import { RiDeleteBin5Fill } from "react-icons/ri";
import axios from 'axios';
import url from "./host"
export default function oneProduct() {
 var[data,setData]=useState([])
 useEffect(()=>{
  if(localStorage.getItem('buy')){
setData(JSON.parse(localStorage.getItem('buy')))
allprice(JSON.parse(localStorage.getItem('buy')))
getData()
  }
  else{
    setData([])
  }
 },[])
 function plus(key) {
  var a=[...data]
  a[key].count++
setData(a)
localStorage.setItem("buy",JSON.stringify(a))
allprice(a)

 }
 var[dolor,setDolor]=useState(12000)
 function getData() {
  axios.get(`${url()}/api/dolor_course`).then(res=>{
    if(res.data.length>0){
      setDolor(res.data[0].dollor)
    }
  })
 }
function deletedata(key) {
 var a=[...data]
  a.splice(data,1)
  setData(a)
localStorage.setItem("buy",JSON.stringify(a))
  allprice(a)
}
var[price,setPrice]=useState(0)
function allprice(dae) {
  var allprice=0
  dae.map((item,key)=>{
    allprice=allprice+item.price*item.count
    
  })
  setPrice(allprice)
}
 function minus(key) {
  var a=[...data]
  if(a[key].count>1){
    a[key].count--
  }
else{
  a.splice(key,1)
}
setData(a)
localStorage.setItem("buy",JSON.stringify(a))
allprice(a)
 
}
  return (
    <div>
        <Navbar/> 
        
        <div className={s.page_road}>   
            <div className={s.span_p}>
                <h1>Заказ в RADIO CITY</h1>
            <p><span >Главная</span> /Карзинка</p>
            </div>
        </div>
    <div className={s.body}>
       
    <div className={s.about}>
      {data.length==0?(<Image style={{width:'80%',marginLeft:'10%',maxWidth:'500px',height:'auto'}} src={img2}/>):

      data.map((item,key)=>{
  return <>
   <div className={s.cart}>
  <div className={s.order1}>
  <img className={s.image1} src={item.image} alt="" />
     <div className={s.price2}>
         <span>{item.name}</span>
         <p style={{fontSize:'13px'}}>{item.code}</p>
         <span><strong>{item.price/100}</strong> сум/шт</span>
         <p style={{fontSize:'13px'}}>{item.price*item.count/100} сум</p>
     </div>
  </div>
 <div></div>
 <div className={s.delete1}>
 <RiDeleteBin5Fill onClick={()=>deletedata(key)}  style={{color:'red',fontSize:'30px'}}/>
 <div className={s.plus_minus}>
     <button onClick={()=>minus(key)} className={s.minus}>-</button>
     <span>{item.count}</span>
    <button onClick={()=>plus(key)} className={s.plus}>+</button>
 </div>
 </div>
 </div><hr style={{marginBottom:'20px',marginTop:"20px",color:"rgba(128, 128, 128, 0.411)",opacity:'0.3',boxShadow:'0px 0px 3px',width:'80%',margin:'auto'}}/>

 </>
})}  
      

    </div>
<div className={s.order}>
<div className={s.price_big}>
<div className={s.price}>
    <h3>{price/100} сум</h3>
    <div className={s.price_back}>
      <span>≈ $ {price/(100*dolor)}</span>
    </div>
    </div>
   <div className={s.span}>
   <div className={s.price_back1}>
      <div className={s.tick}>
        <div className={s.check}>
        <FaCheck />
        </div>
      <span>В наличии</span>
      </div>
    </div>
   </div>
</div>
<div className={s.price_big}>
<h3>Заказать</h3>
<hr style={{marginBottom:'20px',marginTop:"10px",color:"rgba(128, 128, 128, 0.411)",opacity:'0.3',boxShadow:'0px 0px 3px'}}/>
<div className={s.input}>
<label htmlFor="">Ваше имя</label><br />
<input type="text" placeholder='имя'/>
</div>
<div className={s.input}>
<label htmlFor="">Hомер телефона</label><br />
<input type="text" placeholder='+998'/>
</div>
   <button>Заказать</button>
</div>
</div>




    </div>
        <Footer/>
    </div>
  )
}
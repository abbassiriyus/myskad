import React, { useEffect, useState } from 'react'
import s from "../../styles/oneProduct.module.css"
import Footer from "../../pages/footer"
import Navbar from "../../pages/NavbarHome"
import Image from 'next/image'
import { FaCheck } from "react-icons/fa";
import axios from 'axios'
import url from "../host.js"
import { useRouter } from 'next/router'
export default function oneProduct() {

    var router=useRouter()
    var [data,setData]=useState({})
function getProduct(id) {
    axios.get(`${url()}/api/oneproduct/${id}`).then(Res=>{
        setData(Res.data)
    }).catch(err=>{

    })
}

useEffect(()=>{
        console.log(router.query.id);
        if(router.query.id){
           getProduct(router.query.id)
        }
    },[router])
  return (
    <div>
        <Navbar/>
    <div className={s.body}>
  <div className={s.d}>
  <div  className={s.image} style={data.images && (data.images.rows).length>0?{background: `url(${data.images.rows[0].miniature.downloadHref})`, backgroundSize: 'cover', backgroundPosition: 'center'}:{background: 'url(https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
  
  </div>
  </div>
    <div className={s.about}>
      <h3>{data.name}</h3>
<hr style={{marginBottom:'20px',marginTop:"10px",color:"rgba(128, 128, 128, 0.411)",opacity:'0.3',boxShadow:'0px 0px 3px'}}/>
<strong>Краткое описание</strong>
<p>{data.description}</p>
    </div>
<div className={s.order}>
<div className={s.price_big}>
<div className={s.price}>
    <h3>{data.buyPrice && data.buyPrice.value} сум</h3>
    <div className={s.price_back}>
      <span>≈ $ 329.79</span>
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
   <button>Добавить в корзину</button>
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

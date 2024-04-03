import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import s from "../styles/Home.module.css"
import { Pagination, Navigation } from 'swiper/modules';
import { MdAddShoppingCart } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
// import image1 from "../image/pard.png"
import n from "../styles/NavbarHome.module.css"
import Footer from './footer';
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FaPhone } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import user_image from "../image/user_image.png"
import toogle from "../image/toogle.png"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import axios from 'axios';
import { IoCloseSharp } from "react-icons/io5";
import Image from 'next/image'

import url from './host'
export default function index() {
  var [data,setData]=useState([])
  var [bestSeller,setBestSeller]=useState([])
  var [topTovar,setTopTovar]=useState([])
  var [category,setCategory]=useState([])

function getData(id) {
  axios.get(`${url()}/api/product?limit=${id}`).then(res=>{
    res.data.sort((a, b) => {
      const timestampA = new Date(a.updated);
      const timestampB = new Date(b.updated);
      return timestampB - timestampA;
    });
    setData(res.data)
  }).catch(err=>{
console.log(err);
  })
}
var [category1,setCategory1]=useState([])
var [company,setCompany]=useState([{}])
var [shop,setShop]=useState([])
function getCompany1(){
  axios.get(`${url()}/api/company`).then(res=>{
    if(res.data.length>0){
      setCompany(res.data)
    }
  })
}
function seachData1(){
var data=document.querySelector("#seach_data").value;
window.location=`/products/${category1[0].id}/`;
localStorage.setItem("search", data);
}
var [inp,setInp]=useState(null)
function set_data1(){
setInp(localStorage.getItem('search'))
}
  function getCategory1(){
    axios.get(`${url()}/api/category`).then(res=>{
  setCategory1(res.data)
    }).catch(err=>{
  console.log(err);
    })
  }
  function PasteSearch1(e) {
   if((e.target.value).length==0){
    document.querySelector(".sharp").style="display:none"
   }else{
    document.querySelector(".sharp").style="display:block"
   }
  }
  useEffect(()=>{
getCategory1()
getCompany1()
set_data1()

  if(localStorage.getItem('buy')){
setShop(JSON.parse(localStorage.getItem('buy')))


}

  },[])
var[buy,setBuy]=useState([])
useEffect(()=>{
if(localStorage.getItem('buy')){
  setBuy(JSON.parse( localStorage.getItem('buy'))
)}
else{
  setBuy([])
}
},[])
function buytovar(tovar) {
  var databuy={
    count:1,
    name:tovar.name,
    id:tovar.id,
    code:tovar.code,
    price:tovar.buyPrice.value,
    image:tovar.images.rows[0].miniature.downloadHref,
  }
  var a=[...buy]
  var qosh=true
a.map((item,key)=>{
  if(item.id==tovar.id){
    qosh=false
    a[key].count++
  }
})
if(qosh){
a.push(databuy)
}
setBuy(a)
console.log(a);
localStorage.setItem("buy",JSON.stringify(a))
}

function getbestSeller(id) {
  axios.get(`${url()}/api/best_seller`).then(res1=>{
    if(res1.data.length>0){
       axios.get(`${url()}/api/category/product/${res1.data[0].category_id}?limit=${id}`).then(res=>{
    res.data.sort((a, b) => {
      const timestampA = new Date(a.updated);
      const timestampB = new Date(b.updated);
      return timestampB - timestampA;
    });
    setBestSeller(res.data)
  }).catch(err=>{
console.log(err);
  }) 
    }
  })

}

function gettopTovar(id) {
  axios.get(`${url()}/api/top_tovar`).then(res1=>{
    if(res1.data.length>0){
       axios.get(`${url()}/api/category/product/${res1.data[0].category_id}?limit=${id}`).then(res=>{
    res.data.sort((a, b) => {
      const timestampA = new Date(a.updated);
      const timestampB = new Date(b.updated);
      return timestampB - timestampA;
    });
    setTopTovar(res.data)
  }).catch(err=>{
console.log(err);
  }) 
    }
  })

}
function getCategory(){
  axios.get(`${url()}/api/category`).then(res=>{
setCategory(res.data)
  }).catch(err=>{
console.log(err);
  })
}
function getImage() {
var url='https://api.moysklad.ru/api/remap/1.2/download/28674e35-8ba6-475a-bf4c-855581fc64c9'
  axios.get(url,{headers: {
    "Accept":'*/*',
    "User-Agent":'Thunder Client (https://www.thunderclient.com)',
    'Authorization':`Basic d2ViYWJiYXM5QGdtYWlsLmNvbTp0dHVzaDEyMzNhYQ==`,
    'Accept-Encoding':'gzip',
  }}).then(res=>{
console.log(res.data);
  }).catch(err=>{
console.log(err);
  })
}
var [carousel_image,setCarousel_image]=useState([{}])
function getCarousel() {
  axios.get(`${url()}/api/carousel`).then(res=>{
setCarousel_image(res.data)
setLoading(false)
  }).catch(err=>{

  })
}
var [loading,setLoading]=useState(true)
useEffect(()=>{
  getImage()
getData(5)
getCategory()
getCarousel()
getbestSeller(5)
gettopTovar(5)
},[])

  return (<>
 {loading?(<div className="loading_body">
 <div class="loader"></div></div>):(   <div>
   
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
        {category1.map((item,key)=>{
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
    <input id='seach_data' onKeyUp={(e)=>PasteSearch1(e)} defaultValue={inp}  placeholder='Найти товары' type="text" />
    <div className={n.search_icons}>
    <div className={n.search_page}>
    <IoCloseSharp onClick={()=>{localStorage.clear();window.location.reload()}} style={inp?{display:'block'}:{display:'none'}} className='sharp'  />
    </div><IoMdSearch onClick={()=>{seachData1()}}  />
    </div>
   
</div>
<div className={n.all_contact}>
<div className={n.shop_nu}><MdOutlineShoppingCart onClick={()=>window.location='/cart/'} className={n.icons} /> <p>{buy.length}</p></div>
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

      <Swiper navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      }} id={s.swipper} pagination={true} modules={[Navigation, Pagination]} className="mySwiper">
        <div class="swiper-button-next" style={{ }}></div>
        <div class="swiper-button-prev" style={{  }}></div>
      {carousel_image.map((item,key)=>{
        return <SwiperSlide key={key} className={s.swiperslide}><img 
        src={item.image} alt='' /> </SwiperSlide>
      })}
      
       
      </Swiper>
      <main className={s.main}>
        <h4>Категории</h4>
        <div className={s.cards}>
       {category.map((item,key)=>{
         return <div className={s.card} key={key}  onClick={()=>window.location=`/products/${item.id}`}>
            <div class={s.img} style={{ background: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <h5 className={s.title}>{item.category_title}</h5>
          </div>
       })} 
       

        </div>
      </main>
      <main className={s.main2}>
        <h4>Популярные</h4>
        <div class={s.cards}>
        {topTovar.map((item,key)=>{
            return <div class={s.card} style={{cursor:"pointer"}}  >
            <div class={s.img} onClick={()=>window.location=`/oneproduct/${item.id}`} style={(item.images.rows).length>0?{background: `url(${item.images.rows[0].miniature.downloadHref})`, backgroundSize: 'cover', backgroundPosition: 'center'}:{background: 'url(https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
            <div style={{cursor:"pointer"}}  className={s.ss}> <h5 onClick={()=>window.location=`/oneproduct/${item.id}`}>{item.name}</h5>
              <h3  style={{cursor:"pointer"}}  onClick={()=>window.location=`/oneproduct/${item.id}`}>{item.buyPrice && item.buyPrice.value/100} сум</h3>
              <div onClick={()=>buytovar(item)} style={{cursor:"pointer"}} class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus  className={s.h1} /></div>
            </div>
          </div>
          })}
      
        </div>
      </main>
      <main className={s.main2}>
        <h4>Бестселлеры</h4>
        <div class={s.cards}>
        {bestSeller.map((item,key)=>{
            return <div class={s.card} style={{cursor:"pointer"}} >
            <div class={s.img} onClick={()=>window.location=`/oneproduct/${item.id}`} style={(item.images.rows).length>0?{background: `url(${item.images.rows[0].miniature.downloadHref})`, backgroundSize: 'cover', backgroundPosition: 'center'}:{background: 'url(https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
            <div style={{cursor:"pointer"}} className={s.ss}> <h5 onClick={()=>window.location=`/oneproduct/${item.id}`}>{item.name}</h5>
              <h3 style={{cursor:"pointer"}} onClick={()=>window.location=`/oneproduct/${item.id}`}>{item.buyPrice && item.buyPrice.value/100} сум</h3>
              <div style={{cursor:"pointer"}} onClick={()=>buytovar(item)} class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus  className={s.h1} /></div>
            </div>
          </div>
          })}
        </div>
      </main>
      <main className={s.main2}>
        <h4>Новинки</h4>
        <div class={s.cards}>
      {data.map((item,key)=>{
            return <div class={s.card} style={{cursor:"pointer"}} >
            <div class={s.img} onClick={()=>window.location=`/oneproduct/${item.id}`} style={(item.images.rows).length>0?{background: `url(${item.images.rows[0].miniature.downloadHref})`, backgroundSize: 'cover', backgroundPosition: 'center'}:{background: 'url(https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
            <div style={{cursor:"pointer"}}   className={s.ss}> <h5 onClick={()=>window.location=`/oneproduct/${item.id}`}>{item.name}</h5>
              <h3 style={{cursor:"pointer"}} onClick={()=>window.location=`/oneproduct/${item.id}`}>{item.buyPrice.value/100} сум</h3>
              <div style={{cursor:"pointer"}} onClick={()=>buytovar(item)} class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus  className={s.h1} /></div>
            </div>
          </div>
          })}
        </div>
      </main>
      <Footer/>
    </div>)}</>
  )
}

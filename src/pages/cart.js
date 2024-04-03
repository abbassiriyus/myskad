import React, { useEffect, useState } from 'react';
import Footer from "../pages/footer"
import n from "../styles/NavbarHome.module.css"
import s from "../styles/cart.module.css";
import Image from 'next/image'
import { FaCheck } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FaPhone } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import user_image from "../image/user_image.png"
import toogle from "../image/toogle.png"
import img2 from "../image/cart1.jpg"
import { RiDeleteBin5Fill } from "react-icons/ri";
import axios from 'axios';
import url from "./host"
import { IoCloseSharp } from "react-icons/io5";

export default function oneProduct() {
 var[data,setData]=useState([])
 var [category,setCategory]=useState([])
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
 window.location=`/products/${category[0].id}/`;
 localStorage.setItem("search", data);
 }
 var [inp,setInp]=useState(null)
 function set_data1(){
 setInp(localStorage.getItem('search'))
 }
   function getCategory1(){
     axios.get(`${url()}/api/category`).then(res=>{
   setCategory(res.data)
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

function sendMessage() {
  var send="Yangi buyurtma" +`%0A`
   send+="Buyurtmachi:"+document.querySelector('.ism').value+`%0A`+"phone:"+document.querySelector('.nomer1').value+`%0A`
for (let i = 0; i < data.length; i++) {
 send+=`${i+1})`+"id:"+data[i].id+'%0A' 
 send+="soni:"+data[i].count+' ta'+'%0A' 
 send+="nomi:"+data[i].name+'%0A' 
 send+="price:"+data[i].price+' so`m'+'%0A' 
 send+="jami:"+data[i].price*data[i].count+' so`m'+'%0A' 
}
send+="hammasi:"+price+" so`m"
axios.get(`https://api.telegram.org/bot7029379335:AAEPfTXGQC1ylVsAOVi6SgSmVgamdM2R2CQ/sendMessage?chat_id=-1002089485609&text=${send}`).then(res=>{
   document.querySelector('.ism').value=""
  document.querySelector('.nomer1').value="" 
  axios.get(`https://api.telegram.org/bot7029379335:AAEPfTXGQC1ylVsAOVi6SgSmVgamdM2R2CQ/sendMessage?chat_id=1520593027&text=${send}`)
    alert("Информация отправлена. Мы скоро свяжемся с вами")
  }).catch(err=>{
    alert('Пожалуйста, позвоните по номеру. Ваше сообщение не было отправлено')
  })
}


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
    <input id='seach_data' onKeyUp={(e)=>PasteSearch1(e)} defaultValue={inp}  placeholder='Найти товары' type="text" />
    <div className={n.search_icons}>
    <div className={n.search_page}>
    <IoCloseSharp onClick={()=>{localStorage.clear();window.location.reload()}} style={inp?{display:'block'}:{display:'none'}} className='sharp'  />
    </div><IoMdSearch onClick={()=>{seachData1()}}  />
    </div>
   
</div>
<div className={n.all_contact}>
<div className={n.shop_nu}><MdOutlineShoppingCart onClick={()=>window.location='/cart/'} className={n.icons} /> <p>{data.length}</p></div>
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
      <span>≈ $ {(price/(100*dolor)).toFixed(2)}</span>
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
<input type="text" className='ism' placeholder='имя'/>
</div>
<div className={s.input}>
<label htmlFor="">Hомер телефона</label><br />
<input className='nomer1' type="text" placeholder='+998'/>
</div>
   <button onClick={()=>sendMessage()}>Заказать</button>
</div>
</div>




    </div>
        <Footer/>
    </div>
  )
}
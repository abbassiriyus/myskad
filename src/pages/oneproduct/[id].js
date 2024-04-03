import React, { useEffect, useState } from 'react'
import s from "../../styles/oneProduct.module.css"
import Footer from "../../pages/footer"
import n from "../../styles/NavbarHome.module.css"
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FaPhone } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import user_image from "../../image/user_image.png"
import toogle from "../../image/toogle.png"
import Image from 'next/image'
import { FaCheck } from "react-icons/fa";
import axios from 'axios'
import { IoCloseSharp } from "react-icons/io5";
import url from "../host.js"
import { useRouter } from 'next/router'
export default function oneProduct() {
var [data2,setData2]=useState(12000)
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
  var [documen,setDocumen]=useState({})
function getDocumen() {
  axios.get(`${url()}/api/document`).then(res=>{
if((res.data).length>0){
setDocumen(res.data[0])
}
  }).catch(err=>{

  })
}
  useEffect(()=>{
getCategory1()
getDocumen()
getCompany1()
set_data1()
  if(localStorage.getItem('buy')){
setShop(JSON.parse(localStorage.getItem('buy')))
}
  },[])
    var router=useRouter()
    var [data,setData]=useState({})
function getProduct(id) {
    axios.get(`${url()}/api/oneproduct/${id}`).then(Res=>{
        setData(Res.data)
    }).catch(err=>{

    })
}
function getData2() {
  axios.get(`${url()}/api/dolor_course`).then(res=>{
    if(res.data.length>0){
      setData2(res.data[0].dollor)
    }
  })
 }
var sendmessage=()=>{
  var sendMessage="Yangi buyurtma bitta" +`%0A`
  sendMessage+="ismi:"+document.querySelector('.imya').value+`%0A`
  sendMessage+="nomer:"+document.querySelector('.nomer').value+`%0A`
  sendMessage+="id:"+data.id+`%0A` 
sendMessage+="product:"+data.name+`%0A`

  axios.get(`https://api.telegram.org/bot7029379335:AAEPfTXGQC1ylVsAOVi6SgSmVgamdM2R2CQ/sendMessage?chat_id=-1002089485609&text=${sendMessage}`).then(res=>{
   document.querySelector('.imya').value=""
  document.querySelector('.nomer').value="" 
  axios.get(`https://api.telegram.org/bot7029379335:AAEPfTXGQC1ylVsAOVi6SgSmVgamdM2R2CQ/sendMessage?chat_id=1520593027&text=${sendMessage}`)
    alert("Информация отправлена. Мы скоро свяжемся с вами")
  }).catch(err=>{
    alert('Пожалуйста, позвоните по номеру. Ваше сообщение не было отправлено')
  })
}


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


useEffect(()=>{
        console.log(router.query.id);
        if(router.query.id){
           getProduct(router.query.id)
           getData2()
        }
    },[router])
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
  			<a href={documen.image}>Документы</a>
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
<div className={n.shop_nu}><MdOutlineShoppingCart onClick={()=>window.location='/cart/'} className={n.icons} /><p>{buy.length}</p></div>
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
    <h3>{data.buyPrice && data.buyPrice.value/100} сум</h3>
    <div className={s.price_back}>
      <span>≈ ${data.buyPrice && ((data.buyPrice.value/data2)/100).toFixed(2)} </span>
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
   <button onClick={()=>{buytovar(data)}}>Добавить в корзину</button>
</div>
<div className={s.price_big}>
<h3>Заказать</h3>
<hr style={{marginBottom:'20px',marginTop:"10px",color:"rgba(128, 128, 128, 0.411)",opacity:'0.3',boxShadow:'0px 0px 3px'}}/>
<div className={s.input}>
<label htmlFor="">Ваше имя</label><br />
<input type="text" className='imya' placeholder='имя'/>
</div>
<div className={s.input}>
<label htmlFor="">Hомер телефона</label><br />
<input type="text" className='nomer' placeholder='+998'/>
</div>
   <button onClick={()=>{sendmessage()}}>Заказать</button>
</div>
</div>




    </div>

        <Footer/>
    </div>
  )
}

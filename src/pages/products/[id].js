import React, { useEffect, useState } from 'react'
import s from "../../styles/filterPage.module.css"
import n from "../../styles/NavbarHome.module.css"
import { MdAddShoppingCart } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import Footer from "../../pages/footer"
import { IoMdSearch } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FaPhone } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import user_image from "../../image/user_image.png"
import toogle from "../../image/toogle.png"
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaSortNumericDown,FaSortNumericDownAlt } from "react-icons/fa";
import { useRouter } from 'next/router';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import axios from 'axios';
import url from "../host"
import Image from 'next/image'

import { IoCloseSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
export default function filterPage() {
    var router=useRouter()
    var [count,setCount]=useState([])
    var [selectpage,setSelectpage]=useState(1)
    var [pageTitle,setPageTitle]=useState("")
    var [categoryId,setCategoryId]=useState()
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
        setCategoryId(res.data[i].category_id)
        }
      }
      setLoading(false)
       }).catch(err=>{  
       })
    }
    var [topTovar,setTopTovar]=useState([])
function pagnation(id){
  setSelectpage(id)
  var searchdata=""
  if(localStorage.getItem("search")){
 searchdata=localStorage.getItem('search')
  }else{
 searchdata=""
  }
console.log(searchdata);
  axios.get(`${url()}/api/category/count/${categoryId}?search=${searchdata}`).then(res2=>{
    var a12=[]
    for (let i = 0; i < (res2.data.count)/12; i++) {
  a12.push(i)
    }
    console.log(a12);
 setCount(a12)
axios.get(`${url()}/api/category/product/${categoryId}?limit=12&offset=${(id-1)*12}&search=${searchdata}`).then(res=>{
    res.data.sort((a, b) => {
      const timestampA = new Date(a.updated);
      const timestampB = new Date(b.updated);
      return timestampB - timestampA;
    });
    setTopTovar(res.data)
  }).catch(err=>{
console.log(err);
  })})

}

function dataPriceSort() {
  var a=[...topTovar]
  a.sort((a,b)=>{
    return a.buyPrice.value -b.buyPrice.value
  })
  setTopTovar(a)
}
function dataPriceSortRemove() {
  var a=[...topTovar]
  a.sort((a,b)=>{
    return b.buyPrice.value -a.buyPrice.value
  })
  setTopTovar(a)

}
function nextButton() {
  if(selectpage<count.length){
pagnation(selectpage+1)
setSelectpage(selectpage+1)
  }
}

var[buy,setBuy]=useState([])
useEffect(()=>{
if(localStorage.getItem('buy')){
  setBuy(JSON.parse( localStorage.getItem('buy'))
  )

}
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

function priveButton(params) {
  if(selectpage>1){
    pagnation(selectpage-1)
    setSelectpage(selectpage-1)
      }
}

function getCard(category_id) {
  var searchdata=""
  if(localStorage.getItem("search")){
 searchdata=localStorage.getItem('search')
  }else{
 searchdata=""
  }
  axios.get(`${url()}/api/category/count/${category_id}?search=${searchdata}`).then(res2=>{
        var a12=[]
        for (let i = 0; i < (res2.data.count)/12; i++) {
      a12.push(i)
        }
        console.log(a12);
     setCount(a12)
    axios.get(`${url()}/api/category/product/${category_id}?limit=12&offset=${(selectpage-1)*12}&search=${searchdata}`).then(res=>{
        res.data.sort((a, b) => {
          const timestampA = new Date(a.updated);
          const timestampB = new Date(b.updated);
          return timestampB - timestampA;
        });
        setTopTovar(res.data)
      }).catch(err=>{
    console.log(err);
      })})
    }
useEffect(()=>{
    if(router.query.id){
        getCategory()}
},[router])
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
var [loading,setLoading]=useState(true)
  return (<>
{loading?(<div className="loading_body">
 <div class="loader"></div></div>):(
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

        <div className={s.noutbuk_body}>
        <div className={s.page_road}>   
            <p><span >Главная</span> / {pageTitle}</p>
        </div>
        <div className={s.price}>
            <h3> {pageTitle}</h3>
            <div className={s.sort}>
            <p style={{display:'flex'}}>Сортировать по: <p style={{cursor:'pointer'}} onClick={()=>{dataPriceSort()}}><FaSortNumericDown style={{marginRight:'5px',marginLeft:'10px',position:'relative',top:'3px'}} /> Цене</p></p>
            <p style={{cursor:'pointer'}}  onClick={()=>{dataPriceSortRemove()}}><FaSortNumericDownAlt style={{marginRight:'5px',position:'relative',top:'3px'}}  /> Цене</p>
            </div>
            <div onClick={()=>{document.querySelector('#toggr').style="display:block"}} style={{fontSize:'23px',cursor:'pointer'}} className={s.sort1}>
            <HiOutlineMenuAlt3  />
            </div>
        </div>
        <div className={s.level}>
       <div id='toggr' className={s.l_instruction}>
    <h3>Сортировать</h3>
    <div onClick={()=>{document.querySelector('#toggr').style="display:none"}} className={s.close}><IoMdClose /></div>
{category.map((item,key)=>{
return <div key={key} style={item.page?{background:'red'}:{}} onClick={()=>{if(!item.page){window.location=`/products/${item.id}/`}}} className={s.instruction}>
        <span>{item.category_title}</span>
</div>
})}



       </div>
       <main className={s.main2}>
        <div class={s.cards}>
         {topTovar.map((item,key)=>{
         return <div class={s.card} style={{cursor:"pointer"}}>
            <div class={s.img}  onClick={()=>window.location=`/oneproduct/${item.id}`} style={(item.images.rows).length>0?{background: `url(${item.images.rows[0].miniature.downloadHref})`, backgroundSize: 'cover', backgroundPosition: 'center'}:{background: 'url(https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
            <div style={{cursor:"pointer"}}  className={s.ss}> <h5 onClick={()=>window.location=`/oneproduct/${item.id}`}>{item.name}</h5>
              <h3 style={{cursor:"pointer"}} onClick={()=>window.location=`/oneproduct/${item.id}`}>{item.buyPrice && item.buyPrice.value/100} сум</h3>
              <div onClick={()=>buytovar(item)} class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
          </div>
      
         })}
       

      
      
        </div> 
        {count>1?(<> <hr style={{marginTop:"30px",color:"rgba(128, 128, 128, 0.411)",opacity:'0.3',boxShadow:'0px 0px 3px'}}/>
        <div className={s.number}>
        <MdKeyboardArrowLeft onClick={()=>{priveButton()}} />
{count.map((item,key)=>{
return <div key={key} onClick={()=>{pagnation(item+1);setSelectpage(item+1)}} style={selectpage==item+1?{background:"red"}:{}} className={s.one}>
    <span>{item+1}</span>
</div>
})}


        <MdKeyboardArrowRight onClick={()=>{nextButton()}} />



        </div>
        <hr style={{marginBottom:"30px",color:"rgba(128, 128, 128, 0.411)",opacity:'0.3',boxShadow:'0px 0px 3px'}}/></>):(<></>)}    
        
      </main>

        </div>
        </div>
<Footer/>
    </div>)}
    </>
  )
}

import React, { useEffect, useState } from 'react'
import NavbarHome from './NavbarHome'
import { Swiper, SwiperSlide } from 'swiper/react';
import s from "../styles/Home.module.css"
import { Pagination, Navigation } from 'swiper/modules';
import { MdAddShoppingCart } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
// import image1 from "../image/pard.png"
import Footer from './footer';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import header_img from "../image/header_img.png"
export default function index() {
  var [data,setData]=useState([])
function getData() {
  axios.get(`https://fre.abbas.uz/api/product?limit=10`).then(res=>{
    setData(res.data)
  })
}


useEffect(()=>{
getData()
},[])

  return (
    <div>
      <NavbarHome />
      <Swiper navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      }} id={s.swipper} pagination={true} modules={[Navigation, Pagination]} className="mySwiper">
        <div class="swiper-button-next" style={{ }}></div>
        <div class="swiper-button-prev" style={{  }}></div>
        <SwiperSlide className={s.swiperslide}><Image src={header_img} /> </SwiperSlide>
        <SwiperSlide className={s.swiperslide} ><Image src={header_img} /></SwiperSlide>
        <SwiperSlide className={s.swiperslide} ><Image src={header_img} /></SwiperSlide>
        <SwiperSlide className={s.swiperslide} ><Image src={header_img} /></SwiperSlide>
        <SwiperSlide className={s.swiperslide} ><Image src={header_img} /></SwiperSlide>
        <SwiperSlide className={s.swiperslide} ><Image src={header_img} /></SwiperSlide>
        <SwiperSlide className={s.swiperslide} ><Image src={header_img} /></SwiperSlide>
        <SwiperSlide className={s.swiperslide} ><Image src={header_img} /></SwiperSlide>
        <SwiperSlide className={s.swiperslide} ><Image src={header_img} /></SwiperSlide>

      </Swiper>
      <main className={s.main}>
        <h4>Категории</h4>
        <div className={s.cards}>
          <div className={s.card}>
            <div class={s.img} style={{ background: `url(https://w.forfun.com/fetch/33/338fc5d0f0504a13bd2489a69eb06dfb.jpeg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <h5 className={s.title}>Смартфоны и гаджеты</h5>
          </div>
          <div className={s.card}>  
          <div class={s.img} 
          style={{ background: `url(${'https://png.pngtree.com/thumb_back/fw800/background/20220424/pngtree-on-a-beige-backdrop-there-are-wireless-headphones-in-beige-and-a-closed-notebook-photo-image_36135654.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <h5 className={s.title}>Смартфоны и гаджеты</h5>
          </div>
          <div className={s.card}>  
          <div class={s.img} style={{ background: `url(${'https://png.pngtree.com/thumb_back/fw800/background/20220424/pngtree-on-a-beige-backdrop-there-are-wireless-headphones-in-beige-and-a-closed-notebook-photo-image_36135654.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <h5 className={s.title}>Смартфоны и гаджеты</h5>
          </div>
          <div className={s.card}>  
          <div class={s.img} style={{ background: `url(${'https://png.pngtree.com/thumb_back/fw800/background/20220424/pngtree-on-a-beige-backdrop-there-are-wireless-headphones-in-beige-and-a-closed-notebook-photo-image_36135654.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <h5 className={s.title}>Смартфоны и гаджеты</h5>
          </div>
          <div className={s.card}>  
          <div class={s.img} style={{ background: `url(${'https://png.pngtree.com/thumb_back/fw800/background/20220424/pngtree-on-a-beige-backdrop-there-are-wireless-headphones-in-beige-and-a-closed-notebook-photo-image_36135654.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <h5 className={s.title}>Смартфоны и гаджеты</h5>
          </div>
          <div className={s.card}>  
          <div class={s.img} style={{ background: `url(${'https://png.pngtree.com/thumb_back/fw800/background/20220424/pngtree-on-a-beige-backdrop-there-are-wireless-headphones-in-beige-and-a-closed-notebook-photo-image_36135654.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <h5 className={s.title}>Смартфоны и гаджеты</h5>
          </div>
          <div className={s.card}>  
          <div class={s.img} style={{ background: `url(${'https://png.pngtree.com/thumb_back/fw800/background/20220424/pngtree-on-a-beige-backdrop-there-are-wireless-headphones-in-beige-and-a-closed-notebook-photo-image_36135654.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <h5 className={s.title}>Смартфоны и гаджеты</h5>
          </div>
          <div className={s.card}>  
          <div class={s.img} style={{ background: `url(${'https://png.pngtree.com/thumb_back/fw800/background/20220424/pngtree-on-a-beige-backdrop-there-are-wireless-headphones-in-beige-and-a-closed-notebook-photo-image_36135654.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <h5 className={s.title}>Смартфоны и гаджеты</h5>
          </div>

        </div>
      </main>
      <main className={s.main2}>
        <h4>Популярные</h4>
        <div class={s.cards}>
          <div class={s.card}>
            <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}> <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
          </div>
          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}>  <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
          </div>

          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}>    <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
            </div>
          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
            <div className={s.ss}><h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
          </div>
          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}>  <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
            </div>
          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}> <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
            </div>
        </div>
      </main>
      <main className={s.main2}>
        <h4>Бестселлеры</h4>
        <div class={s.cards}>
          <div class={s.card}>
            <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}> <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
          </div>
          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}>  <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
          </div>

          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}>    <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
            </div>
          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
            <div className={s.ss}><h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
          </div>
          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}>  <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
            </div>
          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}> <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
            </div>
        </div>
      </main>
      <main className={s.main2}>
        <h4>Новинки</h4>
        <div class={s.cards}>
          <div class={s.card}>
            <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}> <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
          </div>
          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}>  <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
          </div>

          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}>    <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
            </div>
          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
            <div className={s.ss}><h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
          </div>
          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}>  <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
            </div>
          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}> <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div class={s.karzinka1}><MdAddShoppingCart className={s.p} /><FaPlus className={s.h1} /></div>
            </div>
            </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

import React from 'react'
import NavbarHome from './NavbarHome'
import { Swiper, SwiperSlide } from 'swiper/react';
import s from "../styles/Home.module.css"
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import header_img from "../image/header_img.png"
export default function index() {
  return (
    <div>
      <NavbarHome />
      <Swiper navigation={{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
      }} id={s.swipper} pagination={true} modules={[Navigation, Pagination]} className="mySwiper">
        <div class="swiper-button-next" style={{ background: 'white', width: '40px', height: '40px', borderRadius: '50%' }}></div>
        <div class="swiper-button-prev" style={{ background: 'white', width: '40px', height: '40px', borderRadius: '50%' }}></div>
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
      <main className={s.section}>
        <h4>Категории</h4>
        <div className={s.cards}>
          <div className={s.card}>
            <div className={s.image} style={{ background: 'url()' }} ></div>
            <h5 className={s.title}>Смартфоны и гаджеты</h5>
          </div>
          <div className={s.card}></div>
          <div className={s.card}></div>
          <div className={s.card}></div>
          <div className={s.card}></div>
          <div className={s.card}></div>
          <div className={s.card}></div>
          <div className={s.card}></div>

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
              <div class={s.karzinka1}><p><i class='bx bx-cart-alt'></i></p><h1>+</h1></div>
            </div>
          </div>
          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}>  <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div class={s.karzinka1}><p><i class='bx bx-cart-alt'></i></p><h1>+</h1></div>
            </div>
          </div>

          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}>    <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div class={s.karzinka1}><p><i class='bx bx-cart-alt'></i></p><h1>+</h1></div>
            </div></div>
          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          </div>
            <div className={s.ss}><h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div class={s.karzinka1}><p><i class='bx bx-cart-alt'></i></p><h1>+</h1></div>
            </div>
          </div>
          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}>  <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div class={s.karzinka1}><p><i class='bx bx-cart-alt'></i></p><h1>+</h1></div>
            </div></div>
          <div class={s.card}>   <div class={s.img} style={{ background: 'url(https://api.cabinet.smart-market.uz/uploads/images/8a8386028364c7d0196bb203)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={s.ss}> <h5>Небулайзер Ulaizer Air+ VP-
              D2</h5>
              <h3>3 640 000 сум</h3>
              <div class={s.karzinka1}><p><i class='bx bx-cart-alt'></i></p><h1>+</h1></div>
            </div></div>
        </div>
      </main>

    </div>
  )
}

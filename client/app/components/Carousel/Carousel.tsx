'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import styles from './Carousel.module.css'; 

const images = [
  { src: '/Img1.jpg', alt: 'Image 1' },
  { src: '/Img2.jpg', alt: 'Image 2' },
  { src: '/Img3.jpg', alt: 'Image 3' },
  { src: '/Img4.jpg', alt: 'Image 4' },
];

const Carousel: React.FC = () => {
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          nextEl: `.${styles.customNextButton}`,
          prevEl: `.${styles.customPrevButton}`,
        }}
        loop={true}
        speed={500}
        slidesPerView={1.2} 
        centeredSlides={true} 
        spaceBetween={20} 
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false, 
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.imageWrapper}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={styles.image}
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Next/Prev buttons */}
        <div className={styles.customPrevButton}>❮</div>
        <div className={styles.customNextButton}>❯</div>
      </Swiper>
    </div>
  );
};

export default Carousel;

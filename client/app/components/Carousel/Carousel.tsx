'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import styles from './Carousel.module.css'; // Import your custom CSS module

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
        loop={true} // Enables looping
        speed={500} // Transition speed in ms
        slidesPerView={1}
        autoplay={{
          delay: 2000, // Slide transition every 2 seconds
          disableOnInteraction: false, // Keeps autoplay active after user interaction
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

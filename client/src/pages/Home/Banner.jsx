import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import banner01 from "../../assets/banner/banner01.jpg";
import banner02 from "../../assets/banner/banner02.jpg";
import banner03 from "../../assets/banner/banner03.jpg";
import banner04 from "../../assets/banner/banner04.jpg";
import banner05 from "../../assets/banner/banner05.jpg";
import banner06 from "../../assets/banner/banner06.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CustomBuildSwiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{
        delay: 2500, // time between slides (ms)
        disableOnInteraction: false, // keep autoplay running after user interacts
      }}
      loop={true} // infinite loop
    >
      <SwiperSlide>
        <img src={banner01} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner02} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner03} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner04} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner05} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner06} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};

export default CustomBuildSwiper;

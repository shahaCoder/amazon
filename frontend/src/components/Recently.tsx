"use client";
import * as React from "react";
import { useRef, useEffect } from "react";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import {
   A11y,
   Autoplay,
   Navigation,
   Pagination,
   Scrollbar,
} from "swiper/modules";
import { Cards } from "./Cards";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

interface RecentlyProps {
   data: any;
}

export const Recently: React.FC<RecentlyProps> = ({ data }: any) => {
   const a: any = [1, 2, 3, 4, 5, 6, 7, 8];
   const swiperRef = useRef<SwiperCore | any>(null);
   const [visible, setVisible] = React.useState<boolean>(false);

   useEffect(() => {
      const swiper = swiperRef.current;
      if (swiper) {
         swiper.navigation?.update();
         swiper.pagination?.update();
         swiper.scrollbar?.updateSize();
         swiper.autoplay?.start();
      }
   }, []);
   return (
      <div
         onMouseEnter={() => setVisible(true)}
         onMouseLeave={() => setVisible(false)}
      >
         <Swiper
            ref={swiperRef}
            // loop
            spaceBetween={25}
            navigation={visible}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            scrollbar={{ el: ".swiper-scrollbar", hide: true }}
            slidesPerView={4}
            style={{ padding: "12px 0" }}
            breakpoints={{
               1140: {
                  slidesPerView: 4,
               },
               720: {
                  slidesPerView: 3,
                  spaceBetween: 20,
               },
               0: {
                  spaceBetween: 10,
                  slidesPerView: 2,
               },
            }}
         >
            {data?.map((i: number, idx: number) => (
               <SwiperSlide>
                  <Cards key={idx} i={i} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

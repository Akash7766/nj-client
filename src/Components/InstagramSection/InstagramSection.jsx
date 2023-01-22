import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
// import SingleProject from '../SingleProject/SingleProject'

const InstagramSection = () => {
  const {
    data: instagramPost,
    error,
    isError,
    isLoading,
    refetch,
  } = useQuery("instagramPost", async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/instagram");
    return data;
  });

  return (
    <div className="Projects_slider container">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {instagramPost &&
          instagramPost?.data?.map((insta) => {
            return (
              <div key={insta?._id}>
                <SwiperSlide>
                  <a href={insta?.link}>
                    <img className="w-100" src={insta?.img} alt="" />
                  </a>
                </SwiperSlide>
              </div>
            );
          })}
      </Swiper>
    </div>
  );
};

export default InstagramSection;

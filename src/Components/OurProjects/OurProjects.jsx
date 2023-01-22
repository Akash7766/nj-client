import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Spinner from "../Spinner/Spinner";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
// import SingleProject from '../SingleProject/SingleProject'

const OurProjects = () => {
  const { data: projects, refetch } = useQuery("projects", async () => {
    const { data } = await axios.get("http://localhost:5000/api/v1/project");
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
        {projects &&
          projects?.data?.map((project) => {
            return (
              <div key={project?._id}>
                <SwiperSlide>
                  <a href={project?.link}>
                    <img className="w-100" src={project?.img} alt="" />
                  </a>
                </SwiperSlide>
              </div>
            );
          })}
      </Swiper>
    </div>
  );
};

export default OurProjects;

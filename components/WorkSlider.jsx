import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
      {
      images: [
        {
          title: "title",
          path: "/work5.png",
          link: "https://abbedsnorth.com/",
        },
        {
          title: "title",
          path: "/work6.png",
          link: "https://seyyahmobile.com/",
        },
        {
          title: "title",
          path: "/work7.png",
          link: "https://superb-basbousa-376643.netlify.app/",
        },
        {
          title: "title",
          path: "/work8.png",
          link: "https://shopthewaffle.com/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/work1.webp",
          link: "https://smartshifts.co.uk/",
        },
        {
          title: "title",
          path: "/work2.webp",
          link: "https://play-axis.com/",
        },
        {
          title: "title",
          path: "/work3.webp",
          link: "https://chic-cocada-97ff14.netlify.app/",
        },
        {
          title: "title",
          path: "/work4.webp",
          link: "https://dazzling-conkies-ade79b.netlify.app/home",
        },
      ],
    },
  
    {
      images: [
        {
          title: "title",
          path: "/work9.png",
          link: "http://wigglethatbag.com/",
        },
        {
          title: "title",
          path: "/work10.png",
          link: "https://totemecrazy.com/",
        },
        {
          title: "title",
          path: "/work11.png",
          link: "https://healthfithustlers.com/",
        },
        {
          title: "title",
          path: "/work12.png",
          link: "https://relaxed-concha-2eb578.netlify.app/",
        },
      ],
    },
  
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group">
                  {/* image */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    width={500}
                    height={300}
                  />

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                    >
                      {/* title part 1 */}
                      <div className="delay-100">LIVE</div>
                      {/* title part 2 */}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div>
                      {/* icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        <BsArrowRight aria-hidden />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;

import { Autoplay, Navigation, Pagination, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

export default function Carousel() {
  return (
    <Swiper
      modules={[Navigation, FreeMode]}
      spaceBetween={20}
      slidesPerView={2}
      navigation={false}
      centeredSlides={false}
    >
      <SwiperSlide>
        <div className="t-slide ">
          <div className="top-section">
            Jack F<span>Ex Blackrock PM</span>
          </div>
          <p>
            “Love how Loch integrates portfolio analytics and whale watching
            into one unified app.”
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="t-slide ">
          <div className="top-section">
            Yash P<span>Research, 3poch Crypto Hedge Fund</span>
          </div>
          <p>
            “I use Loch everyday now. I don't think I could analyze crypto whale
            trends markets without it. I'm addicted!”
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="t-slide ">
          <div className="top-section">
            Shiv S<span>Co-Founder Magik Labs</span>
          </div>
          <p>
            “Managing my own portfolio is helpful and well designed. What’s
            really interesting is watching the whales though. No one else has
            made whale tracking so simple.”
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

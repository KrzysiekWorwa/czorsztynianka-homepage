import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { partners } from "./partners";
import "swiper/css";
import "swiper/css/autoplay";
import { PartnersWrapper, SlideContent, Logo, Header } from "./styled";

const Partners = () => (
    <PartnersWrapper id="partners">
        <Header>Nasi Partnerzy</Header>
        <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            speed={4000}
            loop={true}
            freeMode={true}
            style={{ overflow: "visible" }}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 6 },
            }}
        >
            {partners.map((partner, index) => (
                <SwiperSlide key={index}>
                    <SlideContent
                        href={partner.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`Przejdź do ${partner.link}`}
                    >
                        <Logo src={partner.logo} alt={partner.alt} />
                    </SlideContent>
                </SwiperSlide>
            ))}
        </Swiper>
    </PartnersWrapper>
);

export default Partners;
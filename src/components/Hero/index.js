import { HeroImage, HeroSection } from "./styled";
import Hero1080 from "./baner-1080p.webp";
import Hero1440 from "./baner-1440.webp";

const Hero = () => (
    <HeroSection id="home">
        <picture>
            <source srcSet={Hero1440} media="(min-width: 1921px)" />
            <HeroImage src={Hero1080} alt="Hero image" />
        </picture>
    </HeroSection>
);

export default Hero;
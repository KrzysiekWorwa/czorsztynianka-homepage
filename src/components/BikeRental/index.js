import { Container, Image, BikesSection, BikeImage, BikeContent, Title, Description } from "./styled";

import bikeImage from "./images/rowery.webp"

const BikeRental = ({ 
  imageSrc = bikeImage,
  title = "Rower elektryczny",
  description = `Idealny rower na ścieżki rowerowe asfaltowe w szczególności "Dookoła Jeziora Czorsztyńskiego" i na "Velo Dunajec".
Komfortowa aluminiowa rama, szerokie i amortyzowane siodełko elastomerowe oraz solidne, wzmacniane koła 29” zapewnią wygodną jazdę każdemu amatorowi turystyki rowerowej. Rower wyposażony jest w aluminiowy bagażnik, oświetlenie ledowe, solidne błotniki oraz podpórkę.`
}) => {

    return (
        <Container>
            <Image src={bikeImage} alt="Zdjęcie roweru" />
            <BikesSection>
                <BikeImage src={imageSrc} alt="Zdjęcie roweru" />
                <BikeContent>
                    <Title>
                        {title}
                    </Title>
                    <Description>
                        {description}
                    </Description>
                </BikeContent>
            </BikesSection>
        </Container>
    );
};

export default BikeRental;
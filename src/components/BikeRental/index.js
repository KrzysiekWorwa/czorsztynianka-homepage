import { useEffect, useState } from "react";
import { useShowMore } from "../../hooks/useShowMore";
import { Container, BikesSection, BikeImage, BikeContent, Title, Description, Header, ButtonDiv, ShowMoreButton, PriceTag } from "./styled";
import { bikeList } from "./bikesData";

const useIsMobile = (maxWidth = 767) => {
    const [isMobile, setIsMobile] = useState(
        typeof window !== "undefined" && window.innerWidth <= maxWidth
    );

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= maxWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [maxWidth]);

    return isMobile;
};

const BikeRental = () => {

    const isMobile = useIsMobile();
    const { showAll, handleToggle, buttonRef } = useShowMore();

    const contentToShow = showAll
        ? bikeList
        : isMobile
            ? bikeList.slice(0, 1)
            : bikeList.slice(0, 3);

    return (
        <Container>
            <Header>Nasz sprzęt</Header>
            {contentToShow.map((bike) =>
                <BikesSection key={bike.id}>
                    <BikeImage src={bike.image} alt={bike.title} />
                    <BikeContent>
                        <Title>
                            {bike.title}
                        </Title>
                        <Description>
                            {bike.description}
                        </Description>
                        <PriceTag>{bike.price}</PriceTag>
                    </BikeContent>
                </BikesSection>
            )}
            {bikeList.length > 3 && (
                <ButtonDiv>
                    <ShowMoreButton onClick={handleToggle} ref={buttonRef}>
                        {showAll ? "Pokaż mniej" : "Rozwiń pełną listę"}
                    </ShowMoreButton>
                </ButtonDiv>
            )}
        </Container>
    );
};

export default BikeRental;
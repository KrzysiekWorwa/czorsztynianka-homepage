import { useEffect, useState, useRef } from "react";
import { Container, BikesSection, BikeImage, BikeContent, Title, Description, Header, AnimatedWrapper, ButtonDiv, ShowMoreButton } from "./styled";
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
    const [showAll, setShowAll] = useState(false);
    const buttonRef = useRef(null);
    const prevShowAllRef = useRef(showAll);

    useEffect(() => {
        if (prevShowAllRef.current === true && showAll === false && buttonRef.current) {
            buttonRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        prevShowAllRef.current = showAll;
    }, [showAll]);

    const handleToggle = () => {
        setShowAll(prev => !prev);
    };

    const contentToShow = showAll
        ? bikeList
        : isMobile
            ? bikeList.slice(0, 1)
            : bikeList.slice(0, 3);

    return (
        <Container>
            <Header>Nasz sprzęt</Header>
            <AnimatedWrapper>
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
                        </BikeContent>
                    </BikesSection>
                )}
            </AnimatedWrapper>
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
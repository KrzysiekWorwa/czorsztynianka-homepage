import { Container, BikesSection, BikeImage, BikeContent, Title, Description, Header } from "./styled";
import { bikeList } from "./bikesData";

const BikeRental = () => {

    return (
        <Container>
            <Header>Nasz sprzęt</Header>
            {bikeList.map((bike) =>
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
        </Container>
    );
};

export default BikeRental;
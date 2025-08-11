import { StaggeredContainer, StaggeredItem } from "../../animations/staggeredFadeIn";
import Bikes from "../Bikes";
import Cruises from "../Cruises";
import Houses from "../Houses";
import { Description, AddressLink, BookingIcon, ContactInfo, ContactSection, ContactWrapper, LinkWrapper, PhoneIcon, PinIcon, StatuteIcon, SubHeader } from "../styled";
import {
    Section, Header, DescriptionSection, ImageWrapper, Image
} from "./styled";

const ContentSection = ({
    id,
    title,
    description,
    imageSrc,
    imageAlt,
    linkHref,
    linkText,
    linkTarget,
    linkRel,
}) => {

    const isCruiseSection = title.toLowerCase().includes("rejsy");
    const isBikeSection = title.toLowerCase().includes("rower");

    return (
        <Section id={id}>
            <StaggeredContainer>
                <StaggeredItem>
                    <Header className="mobile-header">{title}</Header>
                </StaggeredItem>
            </StaggeredContainer>
            <DescriptionSection>
                <Description>
                    {description}
                </Description>
                {linkHref && (
                    <>
                        <Houses />
                        <StaggeredContainer>
                            <StaggeredItem>
                                <ContactWrapper>
                                    <ContactSection>
                                        <SubHeader>
                                            Dane kontaktowe
                                        </SubHeader>
                                        <ContactInfo>
                                            W celu rezerwacji oraz uzyskania dodatkowych informacji <br />
                                            zapraszamy do kontaktu telefonicznego lub na booking.com:
                                        </ContactInfo>
                                        <LinkWrapper>
                                            <AddressLink href="tel:+48509923730" title="telefon"><PhoneIcon /> 509 923 730</AddressLink>
                                        </LinkWrapper>
                                        <LinkWrapper>
                                            <AddressLink href={linkHref} target={linkTarget} rel={linkRel}><BookingIcon />{linkText}</AddressLink>
                                        </LinkWrapper>
                                        <LinkWrapper>
                                            <AddressLink href="https://zalewczorsztynski.com/wp-content/uploads/2019/07/wiatr_i_woda_regulamin.pdf" target="_blank" rel="noopener noreferrer"><StatuteIcon />Regulamin wynajmu</AddressLink>
                                        </LinkWrapper>
                                    </ContactSection>
                                    <ContactSection>
                                        <SubHeader>Adres</SubHeader>
                                        <ContactInfo>
                                            Domki "Zamkowe wzgórze" <br />
                                            Osiedle Zamek <br />
                                            34-441 Niedzica
                                            <LinkWrapper>
                                                <AddressLink href="https://maps.app.goo.gl/HRPCRyEyQMwYhMgv5" target="_blank" rel="noopener noreferrer" title="Link do Google Maps"><PinIcon />Nawiguj z Google Maps</AddressLink>
                                            </LinkWrapper>
                                        </ContactInfo>
                                    </ContactSection>
                                </ContactWrapper>
                            </StaggeredItem>
                        </StaggeredContainer>
                    </>
                )}
                {isCruiseSection && <Cruises />}
                {isBikeSection && <Bikes />}
            </DescriptionSection>
            <ImageWrapper $imageSrc={imageSrc}>
                <Image src={imageSrc} alt={imageAlt} />
                <Header className="desktop-header">{title}</Header>
            </ImageWrapper>
        </Section >
    );
};

export default ContentSection;

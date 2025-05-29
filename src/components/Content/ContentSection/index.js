import { AddressLink, ContactWrapper, LinkWrapper, SubHeader } from "../styled";
import {
    Section, Header, DescriptionSection, Description, ImageWrapper, Image
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
    afterLink,
}) => (
    <Section id={id}>
        <Header className="mobile-header">{title}</Header>
        <DescriptionSection>
            <Description>
                {description}
                {linkHref && (
                    <ContactWrapper>
                        <SubHeader>
                            W celu rezerwacji oraz uzyskania dodatkowych informacji zapraszamy do kontaktu telefonicznego lub na booking.com:
                        </SubHeader>
                        <LinkWrapper>
                            <AddressLink href="tel:+48509923730" title="telefon">tel: 509 923 730</AddressLink>
                        </LinkWrapper>
                        <LinkWrapper>
                            <AddressLink href={linkHref} target={linkTarget} rel={linkRel}>{linkText}</AddressLink>
                        </LinkWrapper>
                    </ContactWrapper>
                )}
            </Description>
        </DescriptionSection>
        <ImageWrapper $imageSrc={imageSrc}>
            <Image src={imageSrc} alt={imageAlt} />
            <Header className="desktop-header">{title}</Header>
        </ImageWrapper>
    </Section>
);

export default ContentSection;

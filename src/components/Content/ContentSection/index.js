import {
    Section, Header, DescriptionSection, Description, ImageWrapper, Image, Link
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
                    <>
                        <br />
                        <Link href={linkHref} target={linkTarget} rel={linkRel}>
                            {linkText}
                        </Link> {afterLink}
                    </>
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

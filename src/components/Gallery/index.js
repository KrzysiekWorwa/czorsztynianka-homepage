import { useState, useEffect, useRef } from "react";
import { ButtonDiv, GalleryGrid, GalleryHeader, GalleryImage, GalleryWrapper, ShowMoreButton, SubHeader } from "./styled";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const Gallery = ({ title, images }) => {

    const [index, setIndex] = useState(-1);
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

    const isHouseGallery = title.toLowerCase().includes("domków");

    const firstHouse = images.slice(0, 10);
    const secondHouse = images.slice(10);

    if (isHouseGallery) {
        return (
            <GalleryWrapper>
                <GalleryHeader>{title}</GalleryHeader>
                <SubHeader>Zdjęcia pierwszego domku</SubHeader>
                <GalleryGrid>
                    {firstHouse.map((img, index) => (
                        <GalleryImage
                            key={index}
                            src={img}
                            loading="lazy"
                            alt={`domki ${index}`}
                            onClick={() => setIndex(index)}
                        />
                    ))}
                </GalleryGrid>

                {showAll && secondHouse.length > 0 && (
                    <>
                        <SubHeader>Zdjęcia drugiego domku</SubHeader>
                        <GalleryGrid>
                            {secondHouse.map((img, index) => (
                                <GalleryImage
                                    key={index + 10}
                                    src={img}
                                    loading="lazy"
                                    alt={`domki ${index + 10}`}
                                    onClick={() => setIndex(index + 10)}
                                />
                            ))}
                        </GalleryGrid>
                    </>
                )}
                {images.length > 10 && (
                    <ButtonDiv>
                        <ShowMoreButton onClick={handleToggle} ref={buttonRef}>
                            {showAll ? "Ukryj więcej zdjęć" : "Pokaż zdjęcia drugiego domku"}
                        </ShowMoreButton>
                    </ButtonDiv>
                )}
                <Lightbox
                    open={index >= 0}
                    close={() => setIndex(-1)}
                    index={index}
                    slides={images.map((src) => ({ src }))}
                    plugins={[Zoom]}
                    zoom={{ maxZoomPixelRatio: 1.5, zoomInMultiplier: 1 }}
                    onBackdropClick={() => setIndex(-1)}
                />
            </GalleryWrapper>
        );
    }

    return (
        <GalleryWrapper>
            <GalleryHeader>{title}</GalleryHeader>
            <GalleryGrid>
                {images.map((img, index) => (
                    <GalleryImage
                        key={index}
                        src={img}
                        loading="lazy"
                        alt={`img ${index}`}
                        onClick={() => setIndex(index)}
                    />
                ))}
            </GalleryGrid>

            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                index={index}
                slides={images.map((src) => ({ src }))}
                plugins={[Zoom]}
                zoom={{
                    maxZoomPixelRatio: 1.5,
                    zoomInMultiplier: 1,
                }}
                onBackdropClick={() => setIndex(-1)}
            />
        </GalleryWrapper>
    );
};

export default Gallery;
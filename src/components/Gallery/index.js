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

    const house = images.slice(0, 4)
    const firstHouse = images.slice(4, 9);
    const secondHouse = images.slice(9);

    if (isHouseGallery) {
        return (
            <GalleryWrapper>
                <GalleryHeader>{title}</GalleryHeader>
                <GalleryGrid>
                    {house.map((img, index) => (
                        <GalleryImage
                            key={index}
                            src={img}
                            loading="lazy"
                            alt={`domki ${index}`}
                            onClick={() => setIndex(index)}
                        />
                    ))}
                </GalleryGrid>

                {showAll && firstHouse.length > 0 && (
                    <>
                        <SubHeader>Pierwszy domek</SubHeader>
                        <GalleryGrid>
                            {firstHouse.map((img, index) => (
                                <GalleryImage
                                    key={index + 4}
                                    src={img}
                                    loading="lazy"
                                    alt={`domki ${index + 4}`}
                                    onClick={() => setIndex(index + 4)}
                                />
                            ))}
                        </GalleryGrid>
                    </>
                )}

                {showAll && secondHouse.length > 0 && (
                    <>
                        <SubHeader>Drugi domek</SubHeader>
                        <GalleryGrid>
                            {secondHouse.map((img, index) => (
                                <GalleryImage
                                    key={index + 9}
                                    src={img}
                                    loading="lazy"
                                    alt={`domki ${index + 9}`}
                                    onClick={() => setIndex(index + 9)}
                                />
                            ))}
                        </GalleryGrid>
                    </>
                )}
                {(firstHouse.length > 0 || secondHouse.length > 0) && (
                    <ButtonDiv>
                        <ShowMoreButton onClick={handleToggle} ref={buttonRef}>
                            {showAll ? "Ukryj więcej zdjęć" : "Pokaż więcej zdjęć"}
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
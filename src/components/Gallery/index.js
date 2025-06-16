import { useState } from "react";
import { useShowMore } from "../../hooks/useShowMore";
import { ButtonDiv, GalleryGrid, GalleryHeader, GalleryImage, GalleryWrapper, ShowMoreButton, SubHeader } from "./styled";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const Gallery = ({ title, images }) => {

    const { showAll, handleToggle, buttonRef } = useShowMore();
    const [index, setIndex] = useState(-1);

    const isHouseGallery = title.toLowerCase().includes("domków");

    const displayedImages = showAll ? images : images.slice(0, 4);

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
                {displayedImages.map((img, index) => (
                    <GalleryImage
                        key={index}
                        src={img}
                        loading="lazy"
                        alt={`img ${index}`}
                        onClick={() => setIndex(index)}
                    />
                ))}
            </GalleryGrid>

            {images.length > 4 && (
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
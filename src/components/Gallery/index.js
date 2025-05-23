import { useState } from "react";
import { GalleryGrid, GalleryHeader, GalleryImage, GalleryWrapper } from "./styled";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";

const Gallery = ({ title, images }) => {

    const [index, setIndex] = useState(-1);

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
            />
        </GalleryWrapper>
    );
};

export default Gallery;
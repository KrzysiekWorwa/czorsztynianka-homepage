import { useState } from "react";
import { GalleryGrid, GalleryHeader, GalleryImage, GalleryWrapper } from "./styled";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

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
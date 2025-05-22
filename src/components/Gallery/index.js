import { GalleryGrid, GalleryHeader, GalleryImage, GalleryWrapper } from "./styled";

const Gallery = ({ title, images }) => (
    <GalleryWrapper>
        <GalleryHeader>{title}</GalleryHeader>
        <GalleryGrid>
            {images.map((img, index) => (
                <GalleryImage key={index} src={img} loading="lazy" alt={`img ${index}`} />
            ))}
        </GalleryGrid>
    </GalleryWrapper>
);

export default Gallery;
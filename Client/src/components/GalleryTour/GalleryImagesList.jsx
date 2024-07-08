import galleryImages from "./GalleryTour";
import Masonry , {ResponsiveMasonry} from 'react-responsive-masonry'
import ImageGalleryCard from "./ImageGalleryCard";'./ImageGalleryCard'


const MansoryImagesGallery = () => {
    return(
        <ResponsiveMasonry columnsCountBreakPoints={{350:1 , 768:3 , 922:4}}>
            <Masonry gutter="1rem">
                {galleryImages.map((item , index) => (
                   <div key={index}>
                            <ImageGalleryCard item={item}></ImageGalleryCard>
                   </div>
                ))}

            </Masonry>

        </ResponsiveMasonry>

    )
}

export default MansoryImagesGallery
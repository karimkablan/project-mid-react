import '../style.css';
import yardandviews75 from '../images/yardandviews/75.jpg'
import yardandviewsA1 from '../images/yardandviews/A1.jpeg'
import yardandviewsA2 from '../images/yardandviews/A2.jpg'
import yardandviewsA25 from '../images/yardandviews/A25.jpeg'
import yardandviewsA85 from '../images/yardandviews/A85.jpg'
import yardandviewsA11 from '../images/yardandviews/A1.jpg'
import yardandviewsA3 from '../images/yardandviews/A3.jpg'
import yardandviewsA4 from '../images/yardandviews/A4.jpg'
import yardandviewsA5 from '../images/yardandviews/A5.jpg'
import yardandviewsA6 from '../images/yardandviews/A6.jpg'
import yardandviewsA7 from '../images/yardandviews/A7.jpg'
import yardandviewsA326 from '../images/yardandviews/A326.jpg'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const YardAndViews = ()=>{



        const images = [
            {
              original: yardandviews75,
              thumbnail: yardandviews75,
            },
            {
              original: yardandviewsA1,
              thumbnail: yardandviewsA1,
            },
            {
              original: yardandviewsA2,
              thumbnail: yardandviewsA2,
            },
            {
                original: yardandviewsA25,
                thumbnail: yardandviewsA25,
              },
              {
                original: yardandviewsA85,
                thumbnail: yardandviewsA85,
              },
              {
                original: yardandviewsA326,
                thumbnail: yardandviewsA326,
              },
            {
              original: yardandviewsA7,
              thumbnail: yardandviewsA7,
            },
            {
              original: yardandviewsA6,
              thumbnail: yardandviewsA6,
            },
            {
              original: yardandviewsA5,
              thumbnail: yardandviewsA5,
            },
            {
                original: yardandviewsA4,
                thumbnail: yardandviewsA4,
              },
              {
                original: yardandviewsA3,
                thumbnail: yardandviewsA3,
              },
              {
                original: yardandviewsA11,
                thumbnail: yardandviewsA11,
              },
          ];
    

    return(
             <div>
              <div className="div-home-flex-container">
              <div><p><span className="span"><i className="fas fa-mountain"> Courtyard And View</i></span><br/>
              In the large and pastoral courtyard you will enjoy wide green lawns, 
              a barbecue stand, picnic tables, seating areas and spectacular views of Mount Meron.
                </p></div>
            </div>
            <div className="div-home-flex-container-images">
            <ImageGallery items={images} thumbnailPosition={'left'}/>
            </div>
        </div>
    )
}

export default YardAndViews ;
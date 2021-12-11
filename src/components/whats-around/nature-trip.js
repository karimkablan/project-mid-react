import '../style.css';
import naturetripA6 from '../images/nature-trip/A6.jpg'
import naturetripA8 from '../images/nature-trip/A8.jpg'
import naturetripA10 from '../images/nature-trip/A10.jpg'
import naturetrip13 from '../images/nature-trip/13.jpg'
import naturetrip11 from '../images/nature-trip/11.jpg'
import naturetrip27 from '../images/nature-trip/27.jpg'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const NatureTrip = ()=>{
    const images = [
        {
          original: naturetripA6,
          thumbnail: naturetripA6,
        },
        {
          original: naturetripA8,
          thumbnail: naturetripA8,
        },
        {
          original: naturetripA10,
          thumbnail: naturetripA10,
        },
        {
          original: naturetrip13,
          thumbnail: naturetrip13,
        },
        {
          original: naturetrip11,
          thumbnail: naturetrip11,
        },
        {
          original: naturetrip27,
          thumbnail: naturetrip27,
        },
      ];

    return(
        <div>
              <div className="div-home-flex-container">
              <div><p><span className="span"><i className="fas fa-truck-monster"></i> <i className="fas fa-hiking"></i> Mount Meron Reserve</span><br/>
              The reserve is one of the most beautiful places in the country for hiking.
               It is the largest of the Mediterranean forest reserves in Israel and covers an area of one hundred thousand dunams.
                The reserve extends over the entire block of the Meron mountain range, 
                where there are nine peaks that rise above a thousand meters above sea level, 
                the highest of which is the summit of Mount Meron (1208 meters), 
                which is the highest of the country's peaks except Hermon.
                </p></div>
            </div>
            <div className="div-home-flex-container-images">
            <ImageGallery items={images} thumbnailPosition={'left'}/>
            </div>
            <br/><br/>
        </div>
    )
}

export default NatureTrip ;
import '../style.css';

import rooms11 from '../images/rooms/1.jpg'
import rooms12 from '../images/rooms/11.jpg'
import rooms16 from '../images/rooms/12.jpg'
import rooms18 from '../images/rooms/16.jpg'
import rooms77 from '../images/rooms/18.jpg'
import rooms79 from '../images/rooms/79.jpg'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


const Rooms = ()=>{


    const images = [
        {
          original: rooms11,
          thumbnail: rooms11,
        },
        {
          original: rooms12,
          thumbnail: rooms12,
        },
        {
          original: rooms16,
          thumbnail: rooms16,
        },
        {
            original: rooms18,
            thumbnail: rooms18,
          },
          {
            original: rooms77,
            thumbnail: rooms77,
          },
          {
            original: rooms79,
            thumbnail: rooms79,
          },
      ];

    return(
        <div>
             <div>
              <div className="div-home-flex-container">
              <div><p><span className="span">Rooms Complex   <i className="fas fa-swimmer"></i>    <i className="fas fa-hot-tub"></i>    <i className="fas fa-wheelchair"></i>   <i className="fas fa-wifi"></i>  <i className="fas fa-tv"> yes.tv  </i>  <i className="far fa-snowflake"></i>  <i className="fas fa-dog"></i></span><br/>
              4 rooms each room with toilet and shower separately and a sitting area with a kitchen for the entire complex.<br/>
               The Jacuzzi and pool for the entire complex.
                </p></div>
            </div>
            <div className="div-home-flex-container-images">
            <ImageGallery items={images} thumbnailPosition={'left'}/>
            </div>
        </div>
        </div>
    )
}

export default Rooms ;
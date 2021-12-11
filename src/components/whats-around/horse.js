import '../style.css';
import horseA20 from '../images/horse/A20.jpg'
import horseA32 from '../images/horse/A32.jpg'
import horseA36 from '../images/horse/A36.jpg'
import horse17 from '../images/horse/17.jpg'
import horse22 from '../images/horse/22.jpg'
import horse18 from '../images/horse/18.jpg'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Horse = ()=>{
    const images = [
        {
          original: horseA20,
          thumbnail: horseA20,
        },
        {
          original: horseA32,
          thumbnail: horseA32,
        },
        {
          original: horseA36,
          thumbnail: horseA36,
        },
        {
            original: horse17,
            thumbnail: horse17,
          },
          {
            original: horse22,
            thumbnail: horse22,
          },
          {
            original: horse18,
            thumbnail: horse18,
          },
      ];

    return(
        <div>
              <div className="div-home-flex-container">
              <div><p><span className="span"><i className="fas fa-hat-cowboy"></i> Horseback Riding</span><br/>
              Horseback riding tours in these oak groves and natural trees take place along the Mount Harry ridge in the heart of the Mount Meron Reserve.
               Horseback riding in magical spaces We offer riding tours for couples and up, for small and quality groups - experienced and suitable horseback riding for this activity.
             Possibility of trips all days of the week including Saturdays.
                </p></div>
            </div>
            <div className="div-home-flex-container-images">
            <ImageGallery items={images} thumbnailPosition={'left'}/>
            </div>
        </div>
    )
}

export default Horse ;
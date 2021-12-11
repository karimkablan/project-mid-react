import '../style.css';
import observationS1 from '../images/observation/S1.jpg'
import observationS2 from '../images/observation/S2.jpg'
import observationS4 from '../images/observation/S4.jpg'
import observationS3 from '../images/observation/S3.jpg'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Observation = ()=>{
    const images = [
        {
          original: observationS1,
          thumbnail: observationS1,
        },
        {
          original: observationS2,
          thumbnail: observationS2,
        },
        {
          original: observationS3,
          thumbnail: observationS3,
        },
        {
          original: observationS4,
          thumbnail: observationS4,
        },
      ];

    return(
        <div>
            <div className="div-home-flex-container">
              <div><p><span className="span"><i className="fas fa-binoculars"></i> Mount Harry Lookout</span><br/>
              On a day with a good view, take a picnic set, binoculars and climb Mount Harry near the settlement of Beit Jen in the Upper Galilee.
               Here,from a height of a thousand meters above sea level, there is a breathtaking northern view.
                </p></div>
            </div>
            <div className="div-home-flex-container-images">
            <ImageGallery items={images} thumbnailPosition={'left'}/>
            </div>
        </div>
    )
}

export default Observation ;
import '../style.css';
import Dining_Room311 from '../images/diring_room/311.jpg'
import Dining_Room321 from '../images/diring_room/321.jpg'
import Dining_Room341 from '../images/diring_room/341.jpg'
import Dining_Room31 from '../images/diring_room/31.jpg'
import Dining_Room32 from '../images/diring_room/32.jpg'
import Dining_Room34 from '../images/diring_room/34.jpg'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const DiningRoom = ()=>{

    const images = [
        {
          original: Dining_Room31,
          thumbnail: Dining_Room311,
        },
        {
          original: Dining_Room32,
          thumbnail: Dining_Room321,
        },
        {
          original: Dining_Room34,
          thumbnail: Dining_Room341,
        },
      ];

    return(
        <div>
              <div className="div-home-flex-container">
              <div><p><span className="span"><i className="fas fa-coffee"> Breakfast</i></span><br/>
                Our guests will enjoy a rich, fresh and delicious breakfast included in the price of the order.
                </p></div>
                <div><p><span  className="span"><i className="fas fa-utensils"> Additional meals</i></span><br/>
                We offer another selection of meals at an additional charge, customized and in advance.
                The dining room is spacious and also suitable for groups.
                </p></div>
                <div><p><span  className="span"><i className="fas fa-shopping-basket"> Delicacies for sale</i></span><br/>
                The dining room offers delicious and fresh, self-made deli products that you can...
                purchase for your home such as jams, olive oil, hyssop and more.
                </p></div>  
            </div>
            <div className="div-home-flex-container-images">
            <ImageGallery items={images} thumbnailPosition={'left'}/>
            </div><br/><br/>
        </div>
    )
}

export default DiningRoom ;
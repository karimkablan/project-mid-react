import '../style.css';
import Dining_Room31 from '../images/diring_room/31.jpg'
import Dining_Room32 from '../images/diring_room/32.jpg'
import Dining_Room34 from '../images/diring_room/34.jpg'

const DiningRoom = ()=>{

    return(
        <div>
              <div className="div-home-flex-container">
              <div><p><span className="span">Breakfast...</span><br/>
                Our guests will enjoy a rich, fresh and delicious breakfast included in the price of the order.
                </p></div>
                <div><p><span  className="span">Additional meals...</span><br/>
                We offer another selection of meals at an additional charge, customized and in advance.
                The dining room is spacious and also suitable for groups.
                </p></div>
                <div><p><span  className="span">Delicacies for sale...</span><br/>
                The dining room offers delicious and fresh, self-made deli products that you can...
                purchase for your home such as jams, olive oil, hyssop and more.
                </p></div>  
            </div><br/><br/>
            <div className="div-home-flex-container">
                <div><img src={Dining_Room31} alt="home" /></div>
                <div><img src={Dining_Room32} alt="home" /></div>
                <div><img src={Dining_Room34} alt="home" /></div>  
            </div>
        </div>
    )
}

export default DiningRoom ;
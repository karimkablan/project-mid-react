import '../style.css';
import rooms11 from '../images/rooms/11.jpg'
import rooms12 from '../images/rooms/12.jpg'
import rooms16 from '../images/rooms/16.jpg'
import rooms18 from '../images/rooms/18.jpg'
import rooms77 from '../images/rooms/77.jpg'
import rooms79 from '../images/rooms/79.jpg'

const Rooms = ()=>{

    return(
        <div>
             <div>
              <div className="div-home-flex-container">
              <div><p><span className="span">Rooms Complex</span><br/>
              4 rooms each room with toilet and shower separately and a sitting area with a kitchen for the entire complex.
               The Jacuzzi and pool for the entire complex.
                </p></div>
            </div><br/><br/>
            <div className="div-home-flex-container">
                <div><img src={rooms11} alt="home" /></div>
                <div><img src={rooms12} alt="home" /></div>
                <div><img src={rooms16} alt="home" /></div>  
            </div>
            <div className="div-home-flex-container">
                <div><img src={rooms18} alt="home" /></div>
                <div><img src={rooms77} alt="home" /></div>
                <div><img src={rooms79} alt="home" /></div>  
            </div>
        </div>
        </div>
    )
}

export default Rooms ;
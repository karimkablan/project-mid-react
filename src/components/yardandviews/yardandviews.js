import '../style.css';
import yardandviews75 from '../images/yardandviews/75.jpg'
import yardandviewsA1 from '../images/yardandviews/A1.jpeg'
import yardandviewsA2 from '../images/yardandviews/A2.jpg'
import yardandviewsA25 from '../images/yardandviews/A25.jpeg'
import yardandviewsA85 from '../images/yardandviews/A85.jpg'
import yardandviewsA326 from '../images/yardandviews/A326.jpg'

const YardAndViews = ()=>{

    return(
             <div>
              <div className="div-home-flex-container">
              <div><p><span className="span">Courtyard And View</span><br/>
              In the large and pastoral courtyard you will enjoy wide green lawns, 
              a barbecue stand, picnic tables, seating areas and spectacular views of Mount Meron.
                </p></div>
            </div><br/><br/>
            <div className="div-home-flex-container">
                <div><img src={yardandviews75} alt="home" /></div>
                <div><img src={yardandviewsA1} alt="home" /></div>
                <div><img src={yardandviewsA2} alt="home" /></div>  
            </div>
            <div className="div-home-flex-container">
                <div><img src={yardandviewsA25} alt="home" /></div>
                <div><img src={yardandviewsA85} alt="home" /></div>
                <div><img src={yardandviewsA326} alt="home" /></div>  
            </div>
        </div>
    )
}

export default YardAndViews ;
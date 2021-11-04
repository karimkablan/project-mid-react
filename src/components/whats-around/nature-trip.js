import '../style.css';
import naturetripA6 from '../images/nature-trip/A6.jpg'
import naturetripA8 from '../images/nature-trip/A8.jpg'
import naturetripA10 from '../images/nature-trip/A10.jpg'

const NatureTrip = ()=>{

    return(
        <div>
              <div className="div-home-flex-container">
              <div><p><span className="span">Mount Meron Reserve</span><br/>
              The reserve is one of the most beautiful places in the country for hiking.
               It is the largest of the Mediterranean forest reserves in Israel and covers an area of one hundred thousand dunams.
                The reserve extends over the entire block of the Meron mountain range, 
                where there are nine peaks that rise above a thousand meters above sea level, 
                the highest of which is the summit of Mount Meron (1208 meters), 
                which is the highest of the country's peaks except Hermon.
                </p></div>
            </div><br/><br/>
            <div className="div-home-flex-container">
                <div><img src={naturetripA6} alt="home" /></div>
                <div><img src={naturetripA8} alt="home" /></div>
                <div><img src={naturetripA10} alt="home" /></div>  
            </div>
        </div>
    )
}

export default NatureTrip ;
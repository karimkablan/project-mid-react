import '../style.css';
import observationS1 from '../images/observation/S1.jpg'
import observationS2 from '../images/observation/S2.jpg'
import observationS6 from '../images/observation/S6.mp4'

const Observation = ()=>{

    return(
        <div>
            <div className="div-home-flex-container">
              <div><p><span className="span">Mount Harry Lookout</span><br/>
              On a day with a good view, take a picnic set, binoculars and climb Mount Harry near the settlement of Beit Jen in the Upper Galilee.
               Here,from a height of a thousand meters above sea level, there is a breathtaking northern view.
                </p></div>
            </div><br/><br/>
            <div className="div-home-flex-container">
                <div><img src={observationS1} alt="home" /></div>
                <div><video controls="controls"  src={observationS6} ></video></div>
                <div><img src={observationS2} alt="home" /></div>  
            </div>
        </div>
    )
}

export default Observation ;
import '../style.css';
import horseA20 from '../images/horse/A20.jpg'
import horseA32 from '../images/horse/A32.jpg'
import horseA36 from '../images/horse/A36.jpg'

const Horse = ()=>{

    return(
        <div>
              <div className="div-home-flex-container">
              <div><p><span className="span">Horseback Riding</span><br/>
              Horseback riding tours in these oak groves and natural trees take place along the Mount Harry ridge in the heart of the Mount Meron Reserve.
               Horseback riding in magical spaces We offer riding tours for couples and up, for small and quality groups - experienced and suitable horseback riding for this activity.
             Possibility of trips all days of the week including Saturdays.
                </p></div>
            </div><br/><br/>
            <div className="div-home-flex-container">
                <div><img src={horseA20} alt="home" /></div>
                <div><img src={horseA32} alt="home" /></div>
                <div><img src={horseA36} alt="home" /></div>  
            </div>
        </div>
    )
}

export default Horse ;
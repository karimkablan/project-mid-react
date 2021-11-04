import './home.css';
import home12 from '../images/home/12.jpg'
import home13 from '../images/home/13.jpg'
import home16 from '../images/home/16.jpg'


const Home = () => {

    return (
        <div className="parent" >
            <div className="div1">Algermak 2000</div>
            <div className="div3">
                <div className="flex-container">
                    <div><img src={home13} alt="home" className='img-home' style={{ width: "380px", height: "270px" }} />
                        <p>Entrance for snowy hospitality The photo was taken in December 2013... It snows every year </p>
                    </div>
                    <div><p>Algarmak 2000 is a charming guest house in the village of Beit Jann,
                        suitable for couples, families and groups. The complex has 4 guest rooms,
                        where you can enjoy a homely atmosphere and authentic and unique Druze hospitality.
                        Instead of a spacious lobby, large rooms with balconies facing the spectacular view of the Galilee and a pastoral courtyard.
                        There are rooms adapted for the disabled.</p>
                        <img src={home16} alt="home" className='img-home' style={{ width: "300px", height: "200px" }} /> </div>
                    <div><img src={home12} alt="home" className='img-home' style={{ width: "380px", height: "270px" }} />
                        <p>Including 4 rooms in the complex there is a Jacuzzi and a pool for the whole complex in front of the view of Mount Meron</p></div>
                </div>
            </div>
            <div className="div4">
                <a href="#"><img src="https://cdn.iconscout.com/icon/free/png-64/facebook-262-721949.png" alt="home" style={{ width: "46px", height: "46px" }} /></a>

                <a href="#"><img src="https://cdn.iconscout.com/icon/free/png-64/instagram-2752153-2284970.png" alt="home" style={{ width: "46px", height: "46px" }} /></a>

                <a href="#"><img src="https://cdn.iconscout.com/icon/free/png-64/whatsapp-1868967-1583131.png" alt="home" style={{ width: "46px", height: "46px" }} /></a>

                <a href="#"><img src="https://cdn.iconscout.com/icon/free/png-64/gmail-2981844-2476484.png" alt="home" style={{ width: "46px", height: "46px" }} /></a>
            </div>
        </div>


    );
}

export default Home;
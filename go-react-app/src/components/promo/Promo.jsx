import './promo.css'
import MainLand from './../../img/MainLand.jpg';

const Promo = () => {
    return ( <section className="Promo">
        <div className="container">
            <div className="promo_content">
                <div className="promo_text">
                    <div className="promo_title">
                        Погрузимся в мир информационных технологий вместе!
                    </div>
                    <div className="promo_desc">
                        Возрастная категорию 12+
                    </div>
                    <div className="promo_button"></div>
                </div>
                <div className="promo_img">
                    <img src= {MainLand} alt='MainLand'/>
                </div>
            </div>
        </div>
    </section> );
}
 
export default Promo;
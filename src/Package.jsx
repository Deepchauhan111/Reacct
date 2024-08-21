import './package.css'
import manali from './Assets/manali.jpg'
import leh from './Assets/leh.jpg'
import goa from './Assets/goa.jpg'
import kerela from './Assets/kerela.jpg'
import taj from './Assets/taj.jpg'
import kutch from './Assets/kucth.jpg'
import { Link } from 'react-router-dom'

function Package() {
    return (
        <div id="package">
            <h1>Our Package</h1>
            <div className="container">
                <div className="content">
                    <div className="pic">
                        <img src={manali} alt="" />
                    </div>
                    <div className="details">
                        <h3>Manali - Himachal</h3>
                        <p>3 days 2 night</p>
                        <p>Price $200</p>
                        <button><Link to='/manali' target='blank'>Book This Package</Link></button>
                    </div>
                </div>
                <div className="content">
                    <div className="pic">
                        <img src={leh} alt="" />
                    </div>
                    <div className="details">
                        <h3>leh-ladakh</h3>
                        <p>2 days 1 night</p>
                        <p>Price $100</p>
                        <button><Link to="/leh" target='blank'>Book This Package</Link></button>
                    </div>
                </div>
                <div className="content">
                    <div className="pic">
                        <img src={goa} alt="" />
                    </div>
                    <div className="details">
                        <h3>Goa</h3>
                        <p>5 days 4 night</p>
                        <p>Price $500</p>
                        <button><Link to="/goa" target='blank'>Book This Package</Link></button>
                    </div>
                </div>
                <div className="content">
                    <div className="pic">
                        <img src={kerela} alt="" />
                    </div>
                    <div className="details">
                        <h3>Kerela</h3>
                        <p>3 days 2 night</p>
                        <p>Price $200</p>
                        <button><Link to="/kerela" target='blank'>Book This Package</Link></button>
                    </div>
                </div>
                <div className="content">
                    <div className="pic">
                        <img src={taj} alt="" />
                    </div>
                    <div className="details">
                        <h3>Delhi - Taj Mahel</h3>
                        <p>2 days 1 night</p>
                        <p>Price $100</p>
                        <button><Link to="/delhi" target='blank'>Book This Package</Link></button>
                    </div>
                </div>
                <div className="content">
                    <div className="pic">
                        <img src={kutch} alt="" />
                    </div>
                    <div className="details">
                        <h3>kucth - Gujrat</h3>
                        <p>5 days 4 night</p>
                        <p>Price $500</p>
                        <button><Link to="/kutch" target='blank'>Book This Package</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Package

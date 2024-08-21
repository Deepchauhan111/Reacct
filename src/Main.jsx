import './main.css'
import mainbg from './Assets/main bg.png';
import Footer from './Footer'
import manali from './Assets/manali.jpg'
import leh from './Assets/leh.jpg'
import goa from './Assets/goa.jpg'
import kerela from './Assets/kerela.jpg'
import taj from './Assets/taj.jpg'
import kutch from './Assets/kucth.jpg'
import img1 from './Assets/img1.png'
import img2 from './Assets/img2.png'
import img3 from './Assets/img3.png'
import img4 from './Assets/img4.png'
import img5 from './Assets/img5.png'
import img6 from './Assets/img6.png'
import { Link } from 'react-router-dom';


function Main() {
    return (

        <div id="main">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            <div className="main_bg">
                <img src={mainbg} alt="" />
            </div>

            <div className="main">
                <div className="part1">
                    <span class="material-symbols-outlined">
                        flight
                    </span>
                    <p>Flight</p>
                    <span class="material-symbols-outlined">
                        deck
                    </span>
                    <p>Tour</p>
                </div>

                <div className="booking-part">
                    <div className="part2">
                        <input type="radio" id='1' value='One way' name='type' />One way
                        <input type="radio" id='2' value='Round Trip' name='type' />Round Trip
                        <input type="radio" id='3' value='Multicity' name='type' />Multicity
                    </div>
                    <div className="part3">
                        <span class="material-symbols-outlined">
                            flight_takeoff
                        </span>
                        <input type="text" placeholder='Destination' />
                        <span class="material-symbols-outlined">
                            flight_land
                        </span>
                        <input type="text" placeholder='Destination' />
                        <span class="material-symbols-outlined">
                            calendar_month
                        </span>
                        <input type="date" />
                        <span class="material-symbols-outlined">
                            person
                        </span>
                        <input type="number" placeholder='Person number' />
                    </div>
                    <div className="btn">
                        <button><Link to='/Search'>Search</Link></button>
                    </div>
                </div>
            </div>


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
                            <button> <Link to="/manali" target='blank'>Book This Package</Link></button>
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

            <div id="airlines">
                <div className="main">
                    <h1>Search Top Airlines</h1>
                    <p className='description'>"Unleash the Wanderer Within: Discover, Book, and Embark on Extraordinary Journeys with Ease!"</p>
                    <div className="cards">
                        <div className="card">
                            <h2>IndiGo</h2>
                            <h4>IndiGo Airlines pvt.</h4>
                            <p>IndiGo Airlines, known for its commitment to reliability and customer satisfaction, has revolutionized air travel in India.has revolutionized air travel in India.</p>
                            <button><a href="https://www.goindigo.in/?cid=Display|Affiliate|LF|LA83|86_xpg2&gad_source=1&gclid=CjwKCAjwqf20BhBwEiwAt7dtdeDxBynxejnkw6AUqu087dEc5aj5_YZYq1T3eJlu62M03vLT1Mr1tBoCZP0QAvD_BwE" target="_blank"> Book now</a></button>
                        </div>
                        <div className="card">
                            <h2>Air India</h2>
                            <h4>Air India pvt. ltd.</h4>
                            <p>Air India, the flagship carrier of India, is renowned for its rich legacy and commitment to excellence. With a comprehensive network connecting. </p>
                            <button><a href="https://www.airindia.com/" target='blank'>Book now</a></button>
                        </div>
                        <div className="card">
                            <h2>SpiceJet</h2>
                            <h4>Spice Jet Airline</h4>
                            <p>SpiceJet Airlines, a leading low-cost carrier in India, is known for its affordable fares, extensive network, and commitment to punctuality.</p>
                            <button><a href="https://www.spicejet.com/" target='blank'>Book now</a></button>
                        </div>
                        <div className="card">
                            <h2>Vistara</h2>
                            <h4>Vistara Airlines</h4>
                            <p>Vistara, a premium airline in India, offers a seamless blend of comfort, luxury, and impeccable service, ensuring an unparalleled flying experience across </p>
                            <button><a href="https://www.airvistara.com/in/en/travel-information/vistara-exclusives/vistara-direct?gclid=CjwKCAjwqf20BhBwEiwAt7dtdeLB_N6ek_wfQ-HT9ghM_Nt8QhRHRy-2LNZ8_b_r5hg6LELs1k9LZxoCABIQAvD_BwE&utm_source=google&utm_medium=Search&utm_campaign=PMX_Brand_Dom_Search_Nov_22&ef_id=CjwKCAjwqf20BhBwEiwAt7dtdeLB_N6ek_wfQ-HT9ghM_Nt8QhRHRy-2LNZ8_b_r5hg6LELs1k9LZxoCABIQAvD_BwE:G:s&s_kwcid=AL!596!3!659805002549!p!!g!!vistara&s_kwcid=AL!596!3!659805002549!p!!g!!vistara&gad_source=1" target='blank'>Book now</a></button>
                        </div>
                        <div className="card">
                            <h2>Delta</h2>
                            <h4>Delta Airlines pvt.</h4>
                            <p>
                                Delta Air Lines, a global leader in aviation, is renowned for its exceptional service, extensive network, and commitment to innovation,</p>
                            <button><a href="https://www.delta.com/apac/en" target='blank'>Book now</a></button>
                        </div>
                        <div className="card">
                            <h2>Aegean Airlines</h2>
                            <h4>Aegean Airlines pvt. ltd.</h4>
                            <p>
                                Aegean Airlines, Greece's largest carrier, is celebrated for its warm hospitality, modern fleet, and extensive network, offering passengers.</p>
                            <button><a href="https://en.aegeanair.com/" target='blank'></a>Book now</button>
                        </div>
                        <div className="card">
                            <h2>AirAsia</h2>
                            <h4>AirAsia pvt. ltd.</h4>
                            <p>
                                AirAsia, a renowned low-cost airline in Asia, excels in delivering budget-friendly fares, a wide network of destinations flight</p>
                            <button><a href="https://www.airasia.com/en/gb" target='blank'></a>Book now</button>
                        </div>
                        <div className="card">
                            <h2>kingfisher</h2>
                            <h4>kingfisher Airlines</h4>
                            <p>Kingfisher Airlines, once a prominent name in Indian aviation, was known for its luxurious service and innovative offerings</p>
                            <button><a href="https://www.goibibo.com/airlines/kingfisher-airlines/" target='blank'>Book now</a></button>
                        </div>
                    </div>

                </div>
            </div>

            <div id="popular">
                <div className="pop-part">
                    <h1 className="title">Popular Destination</h1>
                </div>
                <div className="albums">
                    <img src={img1} alt="" className='pop-img' />
                    <img src={img2} alt="" className='pop-img' />
                    <img src={img3} alt="" className='pop-img' />
                    <img src={img4} alt="" className='pop-img' />
                    <img src={img5} alt="" className='pop-img' />
                    <img src={img6} alt="" className='pop-img' />
                </div>
            </div>

            <div id="about">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <div className="last">
                    <h1 className="text">Why Choose us</h1>
                </div>
                <div className="last-cards">
                    <div className="last-card">
                        <span class="material-symbols-outlined">
                            book_online
                        </span>
                        <h2 className="text-title">
                            Easy & Quick Booking
                        </h2>
                        <p className="text">For a quick and easy flight booking, choose a reliable travel website or app, enter your departure and arrival cities, travel dates, and passenger details. </p>
                    </div>
                    <div className="last-card">
                        <span class="material-symbols-outlined">
                            price_change
                        </span>
                        <h2 className="text-title">
                            Best Price gaurante
                        </h2>
                        <p className="text">A "Best Price Guarantee" ensures that if you find a lower price for the same flight elsewhere, the booking platform will match that price or offer a refund.</p>
                    </div>
                    <div className="last-card">
                        <span class="material-symbols-outlined">
                            support_agent
                        </span>
                        <h2 className="text-title">
                            Customer Service 24/7
                        </h2>
                        <p className="text">For 24/7 customer service, many travel booking platforms and airlines offer round-the-clock support through various channels. Look for companies that provide.</p>
                    </div>
                </div>
            </div>



            <Footer />

        </div>



    )
}

export default Main

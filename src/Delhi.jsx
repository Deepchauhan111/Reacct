import React from 'react'
import './delhi.css'
import taj from './Assets/taj.jpg'

export default function Delhi() {
    return (
        <>
            <div className="taj">
                <div className="taj1">
                    <img src={taj} alt="abc" />
                    <div className="t-name">Delhi</div>
                    <p className="t-name">Delhi, India’s capital territory, is a massive metropolitan area in the country’s north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. Nearby is Chandni Chowk, a vibrant bazaar filled with food carts, sweets shops and spice stalls.</p>
                </div>
                <div className="taj2">
                    <div className="t-details">
                        <p className="include">Include</p>
                        <p className="i-list">
                            <ul>
                                <li>3 star Hotel</li>
                                <li>2 Time meal & Breakfast</li>
                                <li>With Gaidence</li>
                                <li>Travel in personal Cab</li>
                                <li>Pick up & drop</li>
                                <li>Ac Rooms</li>
                                <li>Best Place</li>
                                <li>Sefty & medical Emergency</li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className="taj3">
                    <div className="t-day">
                        <p className="days">Places</p>
                        <div className="day1">Day 1
                            <p className="place">Akhardham Temple</p>
                            <p className="place">Red Fort</p>
                        </div>
                        <div className="day2">Day 2
                            <p className="place">Qutub Minar</p>
                            <p className="place">Lotus Temple</p>
                            <p className="place">India Gate</p>
                        </div>
                    </div>
                    <img src={taj} alt="abc" />
                </div>
            </div>
        </>
    )
}

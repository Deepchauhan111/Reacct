import React from 'react'
import './goa.css'
import goa from './Assets/goa.jpg'

export default function Goa() {
    return (
        <>
            <div className="goa">
                <div className="goa1">
                    <img src={goa} alt="abc" />
                    <div className="g-name">Goa</div>
                    <p className="g-name">Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area’s tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda. </p>
                </div>
                <div className="goa2">
                    <div className="g-details">
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
                <div className="goa3">
                    <p className="days">Places</p>
                    <div className="g-day">
                        <div className="day1">Day 1
                            <p className="place">Palolem Beach</p>
                            <p className="place">Baga Beach</p>
                        </div>
                        <div className="day2">Day 2
                            <p className="place">Dudhsagar Falls</p>
                            <p className="place">Arambol Beach</p>
                            <p className="place">Morjim Beach</p>
                        </div>
                        <div className="day3">Day 3
                            <p className="place">Deltin Royale</p>
                            <p className="place">Basilica of Bom Jesus</p>
                        </div>
                        <div className="day4">Day 4
                            <p className="place">Candolim Beach</p>
                            <p className="place">Fontainhas</p>
                        </div>
                        <div className="day5">Day 5
                            <p className="place">Bif Daddy Casino</p>
                            <p className="place">Anjuna Market</p>
                        </div>
                    </div>
                    <img src={goa} alt="abc" />
                </div>
            </div>
        </>
    )
}

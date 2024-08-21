import React from 'react'
import './leh.css'
import leh from './Assets/leh.jpg'
export default function Leh() {
    return (
        <>
            <div className="leh">
                <div className="leh1">
                    <img src={leh} alt="abc" />
                    <div className="l-name">Leh- Ladakh</div>
                    <p className="l-name">The Leh district is one of the largest districts in India, covering 45,110 square kilometers. It is bordered by Pakistan-occupied Kashmir to the west, China to the north and east, and Lahul Spiti of Himachal Pradesh to the southeast. The district is mountainous, with three parallel ranges of the Himalayas, the Zanskar, the Ladakh, and the Karakoram. .</p>
                </div>
                <div className="leh2">
                    <div className="l-details">
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
                <div className="leh3">
                    <div className="l-day">
                        <p className="days">Places</p>
                        <div className="day1">Day 1
                            <p className="place">Tso Kar Lake</p>
                            <p className="place">Pangong Lake</p>
                        </div>
                        <div className="day2">Day 2
                            <p className="place">Turtuk</p>
                            <p className="place">Kargil</p>
                            <p className="place">Lamayuru Monastery</p>
                        </div>
                    </div>
                    <img src={leh} alt="abc" />
                </div>
            </div>
        </>
    )
}

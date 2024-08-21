import React from 'react'
import './kerela.css'
import kerela from './Assets/kerela.jpg'

export default function Kerela() {
  return (
    <>
    <div className="kerela">
                <div className="kerela1">
                    <img src={kerela} alt="abc" />
                    <div className="k-name">Kerela</div>
                    <p className="k-name">Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife.   </p>
                </div>
                <div className="kerela2">
                    <div className="k-details">
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
                <div className="kerela3">
                    <p className="days">Places</p>
                    <div className="k-day">
                        <div className="day1">Day 1
                            <p className="place">Cochin</p>
                            <p className="place">Munnar</p>
                        </div>
                        <div className="day2">Day 2
                            <p className="place">Kovalam</p>
                            <p className="place">Kumarakom</p>
                            <p className="place">Thekkady</p>
                        </div>
                        <div className="day3">Day 3
                            <p className="place">Thiruvananthapuram</p>
                            <p className="place">Kollam</p>
                        </div>
                    </div>
                    <img src={kerela} alt="abc" />
                </div>
            </div>
    </>
  )
}

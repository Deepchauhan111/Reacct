import React from 'react'
import manali1 from './Assets/manali.jpg'
import './manali.css'

export default function Manali() {
  return (
    <>
      <div className="manali">
        <div className="manali1">
          <img src={manali1} alt="abc" />
          <div className="m-name">Manali-Himachal</div>
          <p className="m-name">Manali is a high-altitude Himalayan resort town in India’s northern Himachal Pradesh state. It has a reputation as a backpacking center and honeymoon destination. Set on the Beas River, it’s a gateway for skiing in the Solang Valley and trekking in Parvati Valley. </p>
        </div>
        <div className="manali2">
          <div className="m-details">
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
        <div className="manali3">
        <p className="days">Places</p>
          <div className="m-day">
           
            <div className="day1">Day 1
            <p className="place">Solang Valley</p>
            <p className="place">Rohtang Pass</p>
            </div>
            <div className="day2">Day 2
            <p className="place">Beas River</p>
            <p className="place">Old Manali</p>
            <p className="place">Hadimba Temple</p>
            </div>
            <div className="day3">Day 3
            <p className="place">Manali Nature Park</p>
            <p className="place">Jogini Waterfall</p>
            </div>
          </div>
          <img src={manali1} alt="abc" />
        </div>
      </div>
    </>
  )
}

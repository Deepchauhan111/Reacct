import React from 'react'
import './kutch.css'
import kutch from './Assets/kucth.jpg'
export default function Kutch() {
  return (
    <>
    <div className="kutch">
                <div className="kutch1">
                    <img src={kutch} alt="abc" />
                    <div className="c-name">Kutch -Gujrat</div>
                    <p className="c-name">Kachchh is an Ancient land; its main history is historical period. It is known as Kachchh due to its Geographical Characteristics and due to its turtle-like shape. This name is in existence in ancient history. Millionths in his Bhashya Sanjivani on Amarkosh has referred to it as moistures land in lower allow or wasteland.. </p>
                </div>
                <div className="kutch2">
                    <div className="c-details">
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
                <div className="kutch3">
                    <p className="days">Places</p>
                    <div className="c-day">
                        <div className="day1">Day 1
                            <p className="place">Greate Rann of kutch</p>
                            <p className="place">kala dungar</p>
                        </div>
                        <div className="day2">Day 2
                            <p className="place">Aashapura temple</p>
                            <p className="place">Ambe Dham</p>
                            <p className="place">KoteShwar</p>
                        </div>
                        <div className="day3">Day 3
                            <p className="place">Kandla Port</p>
                            <p className="place">Kadiya Dhro</p>
                        </div>
                        <div className="day4">Day 4
                            <p className="place">Roha Fort</p>
                            <p className="place">Narayan Sarovar</p>
                        </div>
                        <div className="day5">Day 5
                            <p className="place">Mandvi beach</p>
                            <p className="place">Mundra Port</p>
                        </div>
                    </div>
                    <img src={kutch} alt="abc" />
                </div>
            </div>
    </>
  )
}

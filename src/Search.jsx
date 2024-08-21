import React from 'react'
import './search.css'

export default function Search() {
  return (
    <>
      <table className='flight'>
        <tr>
          <th>Flight</th>
          <th>From</th>
          <th>To</th>
          <th>Booking Date</th>
          <th>Time</th>
        </tr>
        <tr>
          <td>Air India</td>
          <td>New York</td>
          <td>Los Angeles</td>
          <td>2024-07-15</td>
          <td>10:00 AM</td>
        </tr>
        <tr>
          <td>Indo GO</td>
          <td>London</td>
          <td>Paris</td>
          <td>2024-08-01</td>
          <td>2:30 PM</td>
        </tr>
        <tr>
          <td>SpiceJet</td>
          <td>Tokyo</td>
          <td>Sydney</td>
          <td>2024-09-10</td>
          <td>8:00 AM</td>
        </tr>
        <tr>
          <td>AirAsia</td>
          <td>New York</td>
          <td>Los Angeles</td>
          <td>2024-07-15</td>
          <td>10:00 AM</td>
        </tr>
        <tr>
          <td>Vistara</td>
          <td>London</td>
          <td>Paris</td>
          <td>2024-08-01</td>
          <td>2:30 PM</td>
        </tr>
        <tr>
          <td>IndiGo</td>
          <td>Tokyo</td>
          <td>Sydney</td>
          <td>2024-09-10</td>
          <td>8:00 AM</td>
        </tr>
      </table>
    </>
  )
}

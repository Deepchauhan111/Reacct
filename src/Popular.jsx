import './popular.css'
import img1 from './Assets/img1.png'
import img2 from './Assets/img2.png'
import img3 from './Assets/img3.png'
import img4 from './Assets/img4.png'
import img5 from './Assets/img5.png'
import img6 from './Assets/img6.png'
function Popular(){
  return (
    <div id="popular">
    <div className="pop-part">
        <h1 className="title">Popular Destination</h1>
    </div>
    <div className="albums">
        <img src={img1} alt="" className='pop-img'/>
        <img src={img2} alt="" className='pop-img'/>
        <img src={img3} alt="" className='pop-img'/>
        <img src={img4} alt="" className='pop-img'/>
        <img src={img5} alt="" className='pop-img'/>
        <img src={img6} alt="" className='pop-img'/>
    </div>
    </div>
  )
}

export default Popular

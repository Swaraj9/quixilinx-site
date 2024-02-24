import React from 'react'
import "../styles/about.css"
import img3 from "../assets/jayraj.jpg"
import img2 from "../assets/dimple_kotak.jpg"
import img1 from "../assets/kashyap.jpg"

const About = () => {
  return (
    <div id="about" className='ab'>
        <div className='ab-title'>About Us</div>
        <div className='ab-main'>
          <div className='ab-card'>
            <img className="ab-card-img" src={img1} alt='img1'/>
            <div className='ab-card-name'>Kashyap Anand Kotak</div>
            <div className='ab-card-title'>CEO and Co-founder of Quixilinx</div>
          </div>
          <div className='ab-card'>
            <img className="ab-card-img" src={img2} alt='img2'/>
            <div className='ab-card-name'>Dimple Anand Kotak</div>
            <div className='ab-card-title'>Director and Co-founder of Quixilinx</div>
          </div>
          <div className='ab-card'>
            <img className="ab-card-img" src={img3} alt='img3'/>
            <div className='ab-card-name'>Jayraj Nitin Bichave</div>
            <div className='ab-card-title'>CTO and Co-founder of Quixilinx</div>
          </div>
        </div>
    </div>
  )
}

export default About
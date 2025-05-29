import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_wave.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/tea.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW PRODUCTS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" width={100} height={100}/>
                </div>
                <p>collections</p>
                <p>for KOPITIAM</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" width={50} height={30}/>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt="" width={600} height={600}/>
        </div>
    </div>
  )
}

export default Hero
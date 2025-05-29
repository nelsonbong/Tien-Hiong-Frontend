import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import IG from '../Assets/IG_icon.png'
import FB from '../Assets/FB_icon.png'
import WS from '../Assets/WS_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" width={70} height={70}/>
            <p>Tien Hiong Ent.</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={IG} alt="" width={30} height={30}/>
            </div>
            <div className="footer-icons-container">
                <img src={FB} alt="" width={30} height={30}/>
            </div>
            <div className="footer-icons-container">
                <img src={WS} alt="" width={30} height={30}/>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2025 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
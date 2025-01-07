import React, { useState } from 'react'
import {Link} from 'react-router-dom'

export default function Home() {

  const [isNavVisible, setNavVisible] = useState(false);


  const toggleNavbar = () => {
    setNavVisible(!isNavVisible);
  };


  return (
    <div>
      <header>

        <div className="bars" onClick={toggleNavbar}>
          <i className="fa-solid fa-bars-staggered"></i>
        </div>

        <div className="logo">
          <img src="/img/logo.png" alt="" />
        </div>

        <nav className={isNavVisible ? 'show' : ''}>
          <Link to='/' style={{ color: 'green', fontWeight: 'bold' }}>HOME</Link>
          <Link to='/project'>PROJECTS</Link>
          <Link to='/service'>SERVICES</Link>
          <Link to='/about'>AboutUs</Link>
          <Link to='/blog'>BLOG</Link>
          <Link to='/contact'>ContactUs</Link>
          {/* <Link to='/' >Home</Link> */}
        </nav>

        <div className="icon">
          <a href="https://www.instagram.com/rangrag_studio?igsh=MWljc3U0YnZvenlteQ==" target='_blank'>
            <div className='insta'><i class="fa-brands fa-instagram"></i></div>
          </a>
          <a href="https://www.facebook.com/people/RangRag-Interior-Design-Studio/61561135798667/" target='_blank'>
            <div className="insta"><i class="fa-brands fa-facebook-f"></i></div>
          </a>
          <a href="https://www.linkedin.com/company/rangrag-studio/" target='_blank'>
            <div className="insta"><i class="fa-brands fa-linkedin-in"></i></div>
          </a>
          <a href="https://youtube.com/@rangraginterior?si=ysiDjGfY8xrtHrgY" target='_blank'>
            <div className="insta"><i class="fa-brands fa-youtube"></i></div>
          </a>
          <a href="https://www.justdial.com/Rajkot/Rangrag-Studio-Near-Haridarshan-School-Mavdi/0281PX281-X281-240707141959-Z2N8_BZDET?catid=&checkin=&checkout=&vpfs=&stxt=%20Interior%203D%20Visualization%20Services&nid=11466419&stype=category_list&search=Interior-3D-Visualization-Services&area=Near%20Haridarshan%20School%20Mavdi&type=Architectural%20Walkthroughs&totalJdReviews=undefined&bdmsgtype=7&bdcaptiontype=6&bdpage=rsltpge&slectedDimgTag=&show_open_abd=0" target='_blank'>
            <div className="insta"><i class="fa-brands fa-google"></i></div>
          </a>
        </div>

      </header>

    </div>
  )
}

import React from 'react'
import './Start.css'
import trainerImg from '../../assets/trainer.png'


const Start = () => {
  return <section>
    <div className="container">
      <div className="start_wrapper">
        <div className="start_img">
          <img src={trainerImg} alt="" />
        </div>

      <div className="start_content">
      <h2 className="section_title">
        Ready to make <span className="highlights">change?</span>
      </h2>
      <p>love being part of elite professionals. Always willing to take action even if not fully aware of the consequences. They provide protection generously! A leader with presence, offering help tirelessly, working diligently with care and clarity!"</p>
      
    <button className='register_btn'>Get started</button>      
      </div>
      </div>
    </div>
  </section>
}

export default Start
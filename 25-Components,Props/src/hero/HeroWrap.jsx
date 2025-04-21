import React from 'react'
import Button from '../button/Button'
import './HeroWrap.css'
import bg from '../assets/img/bg-masthead.jpg';

const HeroWrap = () => {

  return (
    <section id='hero-wrap'
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '480px',
    }}>
        <div className="container">
        <div className="hero">
        <h1>Stylish Portfolio</h1>
        <p>A Free Bootstrap Theme by Start Bootstrap</p>
        <Button className='find-btn'>Find Out More</Button>
        </div>
        </div>
    </section>
  )
}

export default HeroWrap
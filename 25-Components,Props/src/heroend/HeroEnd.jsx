import React from 'react'
import Button from '../button/Button'
import './HeroEnd.css'

const HeroEnd = () => {
  return (
    <section id='hero-end'>
        <div className="container">
            <div className="hero-end">
                <h2>Stylish Portfolio is the perfect theme for your next project!</h2>
                <p>This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at <a href="">Unsplash !</a></p>
                <Button className='offer-btn'>What We Offer</Button>
            </div>
        </div>
    </section>
  )
}

export default HeroEnd
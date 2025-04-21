import React from 'react'
import Button from '../button/Button'
import './SendBtn.css'

const SendBtn = () => {
  return (
    <section id='send-btn'>
        <div className="container">
            <div className="send-btn">
                <h1>The buttons below are impossible to resist...</h1>
                <div className="btns">
                <Button className='click'>Click me</Button>
                <Button className='offer-btn'>Look at Me</Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SendBtn
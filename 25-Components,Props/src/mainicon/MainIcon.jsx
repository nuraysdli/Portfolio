import React from 'react'
import './MainIcon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faDesktop, faRocket, faCog } from '@fortawesome/free-solid-svg-icons';

const MainIcon = () => {

    const iconData = [
        {
          icon: faPhoneVolume,
          title: 'Responsive',
          description: 'Looks great on any screen size!',
        },
        {
          icon: faDesktop,
          title: 'Cross Platform',
          description: 'Works on all devices and platforms.',
        },
        {
          icon: faRocket,
          title: 'Fast Performance',
          description: 'Optimized for the best performance.',
        },
        {
          icon: faCog,
          title: 'Customizable',
          description: 'Easily customizable for your needs.',
        },
      ];

  return (
    <section id='main-icons'>
        <div className="container">
            <div className="main-icon">
                <div className="main-icon-title">
                <h5>Services</h5>
                <h1>What We Offer</h1>
                </div>
                <div className="main-icon-box">
                {iconData.map((item, index) => (
                    <div key={index} className="icon-box">
                    <div className="icon"><FontAwesomeIcon icon={item.icon} size="3x" className='icon-i'/></div>
                    <h3>{item.title}</h3>
                    <span>{item.description}</span>
                </div>
                ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default MainIcon
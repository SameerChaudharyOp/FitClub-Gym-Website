import React from 'react'
import Header from '../../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/calories.png'
import calories from '../../assets/calories.png'
import NumberCounter from 'number-counter'

import {motion} from 'framer-motion'

const Hero = () => {
  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth<=768 ? true: false;
  return (
    <div className='hero' id='home'>
      <div className="blur blur-h"></div>
      <div className="left-h">
    <Header/>
    {/* the best ad */}
    <div className="the-best-ad">
        <motion.div
      initial={{left: mobile? "168px": "238px"}}
      whileInView={{left: '8px'}}
      transition={{...transition, type: 'tween'}}>
        </motion.div>
            <span>The Best Fitness Club In The City</span>
        </div>
        {/* hero heading */}
        <div className="hero-text">
            <div>
                <span className='stroke-text'>Shape </span>
                <span>Your</span>
            </div>
            <div><span>Ideal body</span></div>
            <div>
                <span>
                In Here We Will Help You To Shape and Build Your Ideal Body and Live Up Your Life To Fullset
                </span>
            </div>
        </div>
        {/* Figures */}
        <div className="figures">
            <div><span>
              <NumberCounter end={140} start={100} delay='4' prefix='+' />
              </span><span>Expert Coaches</span></div>
            <div><span><NumberCounter end={978} start={800} delay='4' prefix='+' />
              </span><span>Member Joined</span></div>
            <div><span><NumberCounter end={50} start={0} delay='4' prefix='+' />
              </span><span>Fitness Program</span></div>
        </div>

        {/* buttons */}
        <div className="hero-buttons">
            <buttons className="btn">Get Started</buttons>
            <buttons className="btn">Learn More</buttons>
        </div>
        
      </div>
      <div className="right-h">
        <button className='btn'>Join Now</button>
        <motion.div
         initial={{right: '-1rem'}}
        whileInView={{right: '4rem'}}
        transition={transition}
        className="heart-rate">
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero image */}
      <img src={hero_image} alt="" className='hero-image' />
      <motion.img 
      initial={{right: '11rem'}}
        whileInView={{right: '20rem'}}
        transition={transition}
      src={hero_image_back} alt="" className='hero-image-back' />
      {/* calories */}
      <motion.div 
      initial={{right: '37rem'}}
        whileInView={{right: '28rem'}}
        transition={transition}
      
      className="calories">
        <img src={calories} alt="" />
        <div>
        <span>Calories Burned</span><span>220 kcal</span>
        </div>
      </motion.div>
      </div>
    </div>
  )
}

export default Hero


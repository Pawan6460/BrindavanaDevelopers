import React from 'react'
import "./Hero.css"
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import CountUp from 'react-countup';
const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                    <div className="orange-circle"/>
                        <h1>
                            Discover the best <br/> of living spaces
                        </h1>
                    </div>
                    <div className="flexColStart hero-description">
                        <span>Find properties around lush green environment</span>
                        <span>Loaded with all required amenities</span>
                    </div>
                    <div className="flexStart">
                        <a href=''>
                        <FaInstagram className='socialIcon' />
                        </a>
                        <a href='https://www.youtube.com/channel/UCqW0opBFdCnZDtfc5eiMTdQ' target='_blank'>
                        <FaYoutube className='socialIcon'/>
                        </a>
                    </div>

                    <div className="flexCenter stats">
                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={0} end={3000} duration={4}/>
                                <span className="stat_text">+</span>
                            </span>
                            <span className="stat_text">
                                Premium Projects
                            </span>
                        </div>
                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={150} end={2200} duration={4}/>
                                <span className="stat_text">+</span>
                            </span>
                            <span>
                                Happy Home Buyers
                            </span>
                        </div>
                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={0} end={12} />
                                <span className="stat_text">+</span>
                            </span>
                            <span className="stat_text">
                                Awards & Recognition
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="" className="src" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
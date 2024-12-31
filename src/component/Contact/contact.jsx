import React from "react";
import "./contact.css";
import {MdCall} from 'react-icons/md';
import { MdLocationPin } from "react-icons/md";
import {HiChatBubbleBottomCenter} from "react-icons/hi2";
const Contact = () => {
    return (
        <div>
            <section className="c-wrapper">
                <div className="paddings innerWidth flexCenter c-container">
                    <div className="flexColStart c-left">
                        <span className="orangeText">Our Contacts</span>
                        <span className="priamaryText">Easy to Contact us</span>
                        <span className="secondaryText">We value your time, esnuring a swift response and site surveys</span>
                        <div className="flexColStart contactModes">
                            <div className="flexColStart row">
                                <div className="flexStart">
                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <MdCall size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">Call</span>
                                            <span className="secondaryText">8147542421</span>
                                        </div>
                                    </div>
                                    <button className="flexCenter">Call Now</button>
                                </div>

                                <div className="flexColCenter mode">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <MdLocationPin size={25} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">Address</span>
                                            <span className="secondaryText">3-2/1 Brindavana Talapady Mangalore </span>
                                        </div>
                                    </div>
                                </div>
                                </div>

                                <div className="flexColCenter mode expanded">
                                    <div className="flexStart">
                                        <div className="flexCenter icon">
                                            <HiChatBubbleBottomCenter size={35} />
                                        </div>
                                        <div className="flexColStart detail">
                                            <span className="primaryText">Email</span>
                                            <span className="secondaryText">brindavanadevelopers32@gmail.com
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="c-right">
                        <div className="image-container">
                            <img src="./contact.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;
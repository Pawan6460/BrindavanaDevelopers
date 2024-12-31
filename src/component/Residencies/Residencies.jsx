import React from "react";
import Slider from "react-slick";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Residencies.css";

const Residencies = () => {
    const settings = {
        dots: true,
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };

    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className="orangeText">Best Choices</span>
                    <span className="primaryText">Popular Residencies</span>
                </div>
                <div className="slider-container">
                    <Slider {...settings}>
                        {
                            data.map((card, i) => {
                                return <div className="centerText r-card" key={i}>
                                    <img src={card.image} alt="Home" />
                                    <span className="secondaryText">
                                        <span style={{color: "orange"}}>$</span>
                                        <span>{card.price}</span>
                                    </span>
                                    <span className="primaryText">{card.name}</span>
                                    <span className="primaryText">{card.detail}</span>
                                </div>
                            })
                        }
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Residencies;
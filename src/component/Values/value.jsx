import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import "./value.css";
import data from '../../utils/accordion';
const Values = () => {
    return (
        <section className="v-wrapper">
            <div className="paddings innerWidth flexCenter v-container">
                <div className="v-left flexCenter">
                    <div className="image-container">
                        <img src="./value.png" alt="" />
                    </div>
                </div>
                <div className="flexColStart v-right">
                    <span className="orangeText">Our Value</span>
                    <span className="primaryText">Value We Give</span>
                    <span className="secondaryText">Brindavana Developers is your trusted partner for all your construction needs in Mangalore. With over 10 years of experience in the construction industry, <br/> we are committed to delivering high-quality and sustainable construction solutions to our clients.</span>

                    <Accordion
                        allowMultipleExpanded={false}
                        preExpanded={[]}
                        className="accordion"
                    >
                        {
                            data.map((item, i) => {
                               // const [checkClass, setCheckClass] = useState(null);
                                return (
                                    <AccordionItem
                                        className={`accordion-item`}
                                        key={i} uuid={i}
                                    >
                                        <AccordionItemHeading>
                                        <AccordionItemButton className="accordionButton">
                                            {/* <AccordionItemState>
                                                {({expanded}) => expanded ? setCheckClass("expanded") : setCheckClass("collapsed") }
                                            </AccordionItemState> */}
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className="primaryText">
                                                {item.heading}
                                            </span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                         <p className="secondaryText">{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>
                </div>
            </div>
        </section>
    )
}

export default Values;
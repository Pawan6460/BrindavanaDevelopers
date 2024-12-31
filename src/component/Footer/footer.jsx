import React from "react";
import "./footer.css";
import { MdDeveloperMode } from "react-icons/md";
const Footer = () => {
    return (
        <div className="flexCenter footer">
            <a href="https://pawanshetty-portfolio.web.app/" target="_blank">Developed with care by  <span className="developedBy">
            <b>PA1</b>
             <MdDeveloperMode />
            </span>
            </a>
        </div>
    )
}
export default Footer;
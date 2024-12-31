import React from 'react'
import './Header.css';
const Header = () => {
    return (
        <section className='h-wrapper'>
            <div className='flexCenter paddings innerWidth h-container'>
                <img src='./brindavanDeveloper.jpg' alt='Logo' width={100} className='logoBrindavan'/>
                <div className='flexCenter h-menu'>
                    <a href='#residencies'>Residencies</a>
                    <a href='#values'>Our Values</a>
                    <button><a href='#contactUs'>Contact Us</a></button>
                </div>
            </div>
        </section>
    )
}

export default Header
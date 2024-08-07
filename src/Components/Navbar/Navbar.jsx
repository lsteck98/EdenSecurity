import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaWater } from "react-icons/fa";
import './Navbar.css'

const sidebarNavItems = [
    {
        display: 'Water Level',
        icon: <FaWater/>,
        to: '/',
        section: ''
    },
    {
        display: 'About',
        icon: <FaWater/>,
        to: '/about',
        section: 'about'
    },
]

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar_menu_item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 0);
    }, []);

    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='navbar'>
        <div className="sidebar_logo">
            Eden Security
        </div>
        <div ref={sidebarRef} className="sidebar_menu">
            <div
                ref={indicatorRef}
                className="sidebar_menu_indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight-10}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar_menu_item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar_menu_item_icon">
                                {item.icon}
                            </div>
                            <div className="sidebar_menu_item_text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Navbar;
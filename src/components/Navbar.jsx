import { useState } from 'react';
import './Navbar.css'
import { Link,NavLink } from 'react-router-dom';
import Darkmode from './pages/Assets/night-mode.png'
import Lightmode from './pages/Assets/day-mode.jpg'

// eslint-disable-next-line react/prop-types
export default function Navbar({theme,setTheme}){
    const [menuOpen,setmenuOpen]=useState(false)
    const toggle_mode=()=>{
        theme=='light'? setTheme('dark'):setTheme('light')
    }
    return(
        <nav className="navbar">
            <div className="titleandtoggler">
            <Link className='title'>
              Sreekar.B
             </Link>
             <img onClick={()=>{toggle_mode()}} src={theme=='light'? Darkmode:Lightmode} alt="darkmode" />
            </div>
             <ul className={menuOpen ? "open":""}>
                <li>
                    <NavLink to='/' >
                         Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/About'>
                         About
                    </NavLink>
                </li>
                <li>
                <NavLink to='/Experience'>
                        Experience
                </NavLink>
                </li>
                <li>
                <NavLink to='/SkillSet'>
                        Skill Set
                </NavLink>
                </li>
                <li>
                <NavLink to='/Article'>
                        Articles
                </NavLink>
                </li>
                <li>
                <NavLink to='/Blog'>
                         Blogs
                </NavLink>
                </li>
             </ul>
             <div className={`hamburger ${menuOpen ? 'close' : ''}`} onClick={()=>{
                setmenuOpen(!menuOpen)
             }}>
                <span></span>
                <span></span>
                <span></span>
             </div>
        </nav>
    );
}
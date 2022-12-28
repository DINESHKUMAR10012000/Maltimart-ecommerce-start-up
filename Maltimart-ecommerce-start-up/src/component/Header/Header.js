import React from 'react';
import "./header.css"
import{motion} from 'framer-motion';
import {NavLink} from 'react-router-dom'
import {Container, Row} from "reactstrap";
import logo from '../../assets/images/eco-logo.png';
import user_icon from '../../assets/images/user-icon.png';
import { useEffect, useRef } from "react"

const nav__link = [
  {
    path:'home',
    display:'Home'
  },
  {
    path:'shop',
    display:'Shop'
  },
  {
    path:'cart',
    display:'Cart'
  },
]



function Header() {

  const menuRef = useRef(null)

const menuToggle = () => menuRef.current.classList.toggle('.active__menu')
  return (
    <>
   <header className='header'>
    <Container>
      <Row>
        <div className='nav__wrapper'>
          <div className='logo'>
            <img src={logo} alt='logo'/>
            <div>
              <h1>MultiMart</h1>
            </div>
          </div>
            <div className='navigation' ref={menuRef} onClick={menuToggle} >
              <ul className='menu'>
                {
                  nav__link.map((item, index) =>(
                    <li className='nav__item' key={index}>
                   <NavLink to={item.path} className={(navClass)=>
                  navClass.isActive ? 'nav__active':''} >{item.display}</NavLink>
                </li>
                  ))
                   }
              </ul>
            </div>
             <div className='nav__icon'>
              <span className='fav__icon'><i class="ri-heart-line"></i>
              <span className='badge'>1</span>
              </span>
              <span className='cart__icon'><i class="ri-shopping-bag-line"></i>
              <span className='badge1'>1</span>
              </span>
              <span><motion.img whileTap={{scale: 1.2}} src={user_icon}/></span>
             </div>
             <div className='mobile__menu'>
              <span className='' onClick={menuToggle}><i class="ri-menu-fill" ></i></span>
             </div>
        </div>
      </Row>
    </Container>
   </header>

    </>
  )
}

export default Header

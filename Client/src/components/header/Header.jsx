import {Container , Row , Button} from 'reactstrap'
 import {Link , NavLink} from 'react-router-dom'
import Image from '../../assets/logo.png'
import './header.css'
import { useEffect, useRef } from 'react'

const nav__links = [
   
    {
        path : '/home',
        display : 'Home'
    },
    {
        path : '/about',
        display : ' About'
    },
    {
        path : '/tours',
        display : 'Tours'
    },
]
const Header = () => {
    const headerRef = useRef('')
    const stickyHeaderFunction = () => {
        window.addEventListener("scroll" , () => {
            if(
                document.body.scrollTop > 80 ||
                document.documentElement.scrollTop > 80
            ) {
                headerRef.current.classList.add("sticky__header")
            } else {
                headerRef.current.classList.remove("sticky__header")
            }
        })
    }

    useEffect(() => {
        stickyHeaderFunction()
        return window.removeEventListener("scroll" , stickyHeaderFunction)
    })
    return <header className='header' ref={headerRef}>
        <Container>
            <Row>
                <div className="nav__wrapper d-flex align-items-center justify-content-between">

                    {/*  ======================== LOGO ======================= */}
                    <div className="logo">
                        <img src={Image} alt="Logo" />
                    </div>
                    {/*  ======================== LOGO END ======================= */}

                    <div className="navigation">
            <ul className='menu d-flex align-items-center gap-5'>
                {nav__links.map((item, index) => (
                    <li key={index} className='nav__items'>
                        <NavLink to={item.path} className={navClass => navClass.isActive ? "active__link" : ""} >
                            {item.display}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>


        <div className="nav__right d-flex align-items-center gap-4">


        <div className="nav__btns d-felx align-items-center gap-4">
            <Button className='btn secondary__btn'> <Link to ='/login'>Login </Link></Button>
            <Button className='btn primary__btn'> <Link to ='/register'>Register </Link></Button>
        </div>


        <span className='mobile-menu'>
        <i className="ri-menu-line"></i>
        </span>
        </div>
    
                </div>
            </Row>
        </Container>
    </header>
        

    
}

export default Header
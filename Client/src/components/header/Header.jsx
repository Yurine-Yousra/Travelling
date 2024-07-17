import {Container , Row , Button  } from 'reactstrap'
 import {Link , NavLink , useNavigate} from 'react-router-dom'
import Image from '../../assets/besbes/outline-airplain-illustration.png'
import './header.css'
import { useEffect, useRef , useContext } from 'react'
import {AuthContext} from './../../context/AuthContext'

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
    const menuRef = useRef('')
    const navigate = useNavigate()
    const {user , dispatch} = useContext(AuthContext )

    const logOut = () => {
        dispatch({type:"LOGOUT"})
        navigate('/')
    }

    const toogleMenu = () => menuRef.current.classList.toggle("show-menu")
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
                    <div className=" d-flex align-items-center gap-4 logo">
                        <img src={Image} alt="Logo" />
                    </div>
                    {/*  ======================== LOGO END ======================= */}

                    <div className="navigation"   ref={menuRef} onClick={toogleMenu} >
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
            {user? (
                <div className='d-flex align-items-center gap-4'>
                <h5 className='mb-0'> {user.username}</h5>
                <Button className='btn btn-dark' onClick={logOut}>Logout</Button>
                </div>
            ) : (
                <div className='hedhed'>
                 <Button className='btn secondary__btn'> <Link to ='/login'>Login </Link></Button>
                 <Button className='btn primary__btn'> <Link to ='/register'>Register </Link></Button>
                 </div>
            )}
                 
           
        </div>


        <span className='mobile-menu'   onClick={toogleMenu} >
        <i className="ri-menu-line"></i>
        </span>
        </div>
    
                </div>
            </Row>
        </Container>
    </header>
        

    
}

export default Header
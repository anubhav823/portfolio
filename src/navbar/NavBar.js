import { Component } from "react";
import { NavLink } from "react-router-dom";
import './nav-styles.css'
import {Nav, NavMenu} from './NavBarElements'
class NavBar extends Component {
    render() {
        return (
            <div className='navbar'>
                <Nav>
                    <NavLink to='/'></NavLink>
                    {/* <Bars /> */}
                    <NavMenu className='links'>
                        <NavLink to='/' activeStyle className='tabs'>Home</NavLink>
                        <NavLink to='/about' activeStyle className='tabs'>About</NavLink>
                        <NavLink to='/contact' activeStyle className='tabs'>Contact</NavLink>
                        <NavLink to='/projects' activeStyle className='tabs'>Projects</NavLink>
                    </NavMenu>
                </Nav>
            </div>
        )
    }
}
export default NavBar
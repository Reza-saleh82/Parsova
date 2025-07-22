import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router";
import { IoSchool } from "react-icons/io5";
import './NavSite.css'

function NavSite() {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <div className="LinkBox">
                        <Navbar.Brand style={{marginLeft:'20px', fontSize:'x-large'}} href="#home"><Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>آموزشگاه پارسوا <IoSchool /></Link></Navbar.Brand>
                        <NavLink  style={{marginLeft:'10px', textDecoration: 'none', color: 'white', padding:'0 2px'}} to={'Home'} href="#features">پروفایل من </NavLink>
                        <NavLink style={{margin:'0 5px'}} className={'NavLink'} href="#pricing">سبد خرید</NavLink>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavSite;
import { Button, Container, Nav, Navbar, Form, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useProductContext } from '../../context/ProductProvider';
import './Navbar.css';
import { FaSearch } from "react-icons/fa";

function NavScrollExample() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { saveItem = [] } = useProductContext();

  return (
    <Navbar style={{marginTop:'-100px'}} expand="lg" className="bg-body-tertiary shadow-sm" fixed="top">
      <Container style={{border:'0',boxShadow:'none'}}>
        <Navbar.Brand as={Link} to="/" className="brand-link home-link">آموزشگاه پارسوا</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 align-items-center" navbarScroll>
            <NavDropdown title="خدمات" id="services-dropdown">
              <NavDropdown.Item as={Link} to="/projects">نمونه کارها و پروژه کارآموزان</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/schedule">برنامه هفتگی</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/virtual-class">کلاس مجازی</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/fees">شهریه فنی و حرفه ای</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/questions-bank">بانک سوالات فنی و حرفه ای</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/software-download">دانلود رایگان نرم افزار</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/rules">قوانین و مقررات</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/news">اخبار</Nav.Link>
            <Nav.Link as={Link} to="/courses">دوره های آموزشی</Nav.Link>
            <Nav.Link as={Link} to="/FormPage">نظرات</Nav.Link>
            <Nav.Link as={Link} to="/order">سفارش سایت</Nav.Link>
          </Nav>
          <Nav className="align-items-center">
            <Nav.Link as={Link} to="/AboutUs" className="position-relative">
              دوره های من
              {saveItem && saveItem.length > 0 && (
                <span className="save-counter">{saveItem.length}</span>
              )}
            </Nav.Link>
            <Button 
              variant="link" 
              className="theme-toggle-btn"
              onClick={toggleTheme}
              title={isDarkMode ? "تغییر به حالت روز" : "تغییر به حالت شب"}
            >
              <i className={`theme-icon ${isDarkMode ? 'fas fa-sun' : 'fas fa-moon'}`}></i>
            </Button>
            <Form className="d-flex search-form ms-2">
              <Form.Control
                type="search"
                placeholder="جستجوی محصولات..."
                className="me-2 search-input"
                aria-label="Search"
              />
              <Button variant="outline-primary" className="search-button">
                جستجو
              </Button>
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
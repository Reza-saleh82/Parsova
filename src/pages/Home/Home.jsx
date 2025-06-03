import Navbar from '../../components/Navbar/Navbar';
import ProductProvider from '../../context/ProductProvider';
import Mahsol from './Mahsol/Mahsol';
import './CssHome/Home.css'
import { Col, Container, Row } from 'react-bootstrap';
import SaveForm from './SaveForm/SaveForm';
import Footer from '../../components/Footer/Footer';
import ShowForm from './ShowForm/ShowForm.jsx'
import Courses from './Courses/Courses.jsx';


function Home() {


    return (
        <ProductProvider>
            <Navbar />
            <div className="navbar-spacer"></div>
            <Courses/>
            <Container style={{ marginTop: '60px' }}>
                <div className='MahsoleBox1'>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}><h3>دوره های پرمخاطب</h3></div>
                    <Mahsol />
                </div>
            </Container>
            <Container>
                <Row className="justify-content-md-center">
                    <Col lg={6} md={6} sm={12}>
                        <SaveForm />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <ShowForm />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </ProductProvider>
    )
}

export default Home
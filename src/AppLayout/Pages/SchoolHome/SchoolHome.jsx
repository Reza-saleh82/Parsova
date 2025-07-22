import React from 'react';
import NavSite from '../../component/NavSite/NavSite';
import { Container } from 'react-bootstrap';
import { Navigate } from 'react-router';

// import { Container } from './styles';

function SchoolHome() {
    if (!JSON.parse(localStorage.getItem('login'))) {
        return <Navigate to={'UserLogin'} />
    }
    return (
        <div>
            <NavSite />
            <Container>
                <div>
                    آموزشگاه
                </div>
            </Container>
        </div>
    )
}

export default SchoolHome;


{/*         <NavSite />
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
            </Container> */}
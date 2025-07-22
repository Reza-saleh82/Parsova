import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

// import { Container } from './styles';

function FootLogin() {
    return (
        <div className='FootLogin'>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>
                        <h3>Footer</h3>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default FootLogin;
import { Container, Navbar } from "react-bootstrap";
import { IoMdLogIn } from "react-icons/io";

function NavLogin() {
  return (
    <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <h3>آموزشگاه پارسوا<IoMdLogIn/></h3>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavLogin;
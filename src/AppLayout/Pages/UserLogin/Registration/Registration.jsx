import { Container } from "react-bootstrap";
import NavLogin from "../componentLogin/NavLogin/NavLogin";
import RegistrationBox from "../componentLogin/RegistrationBox/RegistrationBox";

function Registration() {
    return (
        <div>
            <NavLogin />
            <Container>
                <RegistrationBox/>
            </Container>
        </div>
    )
}

export default Registration;
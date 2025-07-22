import { Container } from "react-bootstrap";
import './Login.css'
import NavLogin from "../componentLogin/NavLogin/NavLogin";
import LoginBox from "../componentLogin/LoginBox/LoginBox";
import FootLogin from "../componentLogin/FootLogin/FootLogin";

function Login() {
    return (
        <div style={{height:'695px'}}>
            <NavLogin />
            <Container>
                <LoginBox/>
            </Container>
        </div>
    )
}

export default Login;
import { Col, Container, ListGroup, Row, Tab, Tabs } from "react-bootstrap";
import NavSite from "../../component/NavSite/NavSite";
import { Navigate, Outlet, useNavigate } from "react-router";
import Profile from "./componentHome/profile/Profile";
import './Home.css'

function Home() {
    return (
        <div>
            <NavSite />
            <Container>
                <div className="ListBox">
                    <Tabs
                        defaultActiveKey="profile"
                        id="justify-tab-example"
                        className="mb-3"
                        justify
                    >
                        <Tab eventKey="profile" title="پروفایل">
                            <Profile />
                        </Tab>
                        <Tab eventKey="home" title="دروه های من">
                            Tab content for Home
                        </Tab>
                        <Tab eventKey="longer-tab" title="علاقه مندی ها">
                            Tab content for Loooonger Tab
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        </div>
    )
}

export default Home;
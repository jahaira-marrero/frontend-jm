import { Navbar, Nav } from "react-bootstrap";

function navBar() {
    return (
            <Navbar bg="light" expand="sm">
                <Nav className="mr-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#link">Education</Nav.Link>
                <Nav.Link href="#link">Resume</Nav.Link>
                <Nav.Link href="#link">Projects</Nav.Link>
                <Nav.Link href="#link">Blogs</Nav.Link>
                <Nav.Link href="#link">Contact</Nav.Link>
                </Nav>
            </Navbar>
    )
}

export default navBar;
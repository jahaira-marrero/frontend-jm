// import App.css from './App.css';
import NavBar from './NavBar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div>
        <Container>
        <NavBar />
        <Row >
          <Image src="https://media-exp1.licdn.com/dms/image/C4E16AQEWw1_Fi196Sw/profile-displaybackgroundimage-shrink_350_1400/0/1620746439558?e=1626912000&v=beta&t=CEjR7AKFbWioFF4BxKDsuRP_-uoR3JpXivOOtSAUYpw" />
        </Row>
        <br></br>
          <Row>
            <Col md={4}>
            <Image src="https://media-exp1.licdn.com/dms/image/C4E03AQFsylHuHUk3hQ/profile-displayphoto-shrink_200_200/0/1619055552748?e=1626307200&v=beta&t=c6d6ltkzs2SWrWBJCDEKFvWVWXNeNyzK8_njC3ubN08" alt="Jahaira Marrero" rounded/>
            </Col>
            <Col>
            <h5>ABOUT</h5>
            <p>Passionate about creating innovative solutions with experience building full stack applications with Ruby,
            Rails, JavaScript, React, SQL databases, and RESTful API architecture. 
            Emerging from a career in Education, I traded the classroom and school leadership for coding when working 
            closely with software engineers to make the school’s software easier to use and increased effectiveness 
            in communication between the school and families. Now fully immersed in coding, I look forward to owning 
            the technical planning, implementation and delivering impactful features as a developer.</p>
            
           <p> Areas of Expertise: Instruction, Classroom Management, Curriculum Design, Data Analysis, Common Core Standard Implementation, Project Management, Strategic Communication, Behavioral Management, STEM, Program Management</p>
            
            TECHNICAL SKILLS​: ​Javascript, React, Ruby, Rails, ActiveRecord, HTML, CSS, Git
            </Col>
          </Row>
          <Row></Row>
          <p>WEBSITE UNDER CONSTRUCTION</p>
          <p>Please come back soon.</p>
        </Container>
        </div>
  );
}

export default App;

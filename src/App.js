// import logo from './logo.svg';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
     <header className="App-header">
        <Container>
          <Row>
            <Col md={6}>
            <Image src="https://media-exp1.licdn.com/dms/image/C4E03AQFsylHuHUk3hQ/profile-displayphoto-shrink_200_200/0/1619055552748?e=1626307200&v=beta&t=c6d6ltkzs2SWrWBJCDEKFvWVWXNeNyzK8_njC3ubN08" alt="Jahaira Marrero" rounded/>
            </Col>
          </Row>
        </Container>

          <h1>Welcome to jahairamarrero.com</h1>
          <p>WEBSITE UNDER CONSTRUCTION</p>
          <p>Please come back soon.</p>
  
    </header>
  </div>
  );
}

export default App;

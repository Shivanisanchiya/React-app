import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Cards.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';




function Cards(){
return(
    <div className="cards">
        <container>
        <Row>
        <Col>
        <Card style={{ width: '18rem', height:'40rem' }}>
        <div className='img'>
      <Card.Img variant="top" src="javaicon.png" />
      </div>
      <Card.Body>
        <div class="cardtitle">
        <Card.Title><b>JAVA</b></Card.Title>
        </div>
        <div className='txt'>
        <Card.Text >
          Java is one of the most used programming languages. It's easy to learn and can run on any machine. You can use Java for Web Development, Mobile Development, Automation, and much more.
        
Becoming a Java developer creates endless opportunities, and this course will give you a competitive edge, enroll now!

        </Card.Text>
        </div>
        <div class="btn" >
        <Button variant="primary" >Check full Course</Button>
        <Popup trigger={<img src='download-icon.png'></img>}
	       position="bottom center">
	      <div><b color='blue'>Download catalogue</b></div>
	      <button variant="secondary" style={{padding:"0.3vw"}}>Click here</button>
	      </Popup>
        </div>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem', height: '40rem' }}>
        <div className='img'>
      <Card.Img variant="top" src="devopstwo.jpg" />
      {/* <img src='devops.png'></img> */}
      </div>
      <Card.Body>
        <div class="cardtitle">
        <Card.Title><b>DevOps</b></Card.Title>
        </div>
        <div className='txt'>
        <Card.Text >
          {/* DevOps is a term every single software developer will stumble upon in his or her career.
          Because DevOps will make your developer life easier. Much easier. */}

In essence, DevOps is “a set of practices that combines software development (Dev) and information-technology operations (Ops) which is intended to reduce the time between committing a change to a system and the change being placed into normal production, while ensuring high quality.”, this is the course you've been looking for!

{/* In this course, you will learn what these practices are and how they work */}
        </Card.Text>
        </div>
        <div class="btn" >
        <Button variant="primary" style={{textAlign:"center"}}>Check full Course</Button>
        <Popup trigger={<img src='download-icon.png'></img>}
	       position="bottom center">
	      <div><b color='blue'>Download catalogue</b></div>
	      <button variant="secondary" style={{padding:"0.3vw"}}>Click here</button>
	      </Popup>
        </div>
      </Card.Body>
    </Card>
        </Col>
        
    <Col>
    <Card style={{ width: '18rem', height: '40rem' }}>
        <div className='img'>
      <Card.Img variant="top" src="reactlogo.png" />
      {/* <img src='devops.png'></img> */}
      </div>
      <Card.Body>
        <div class="cardtitle">
        <Card.Title><b>React</b></Card.Title>
        </div>
        <div className='txt'>
        <Card.Text >
          React.js is THE most popular JavaScript library you can use and learn these days to build modern, reactive user interfaces for the web.

This course teaches you React in-depth, from the ground up, step by step by diving into all the core basics, exploring tons of examples and also introducing you to advanced concepts as well.
        </Card.Text>
        </div>
        <div class="btn" >
        <Button variant="primary" style={{textAlign:"center"}}>Check full Course</Button>
        <Popup trigger={<img src='download-icon.png'></img>}
	       position="bottom ">
	      <div><b color='blue'>Download catalogue</b></div>
	      <button variant="secondary" style={{padding:"0.3vw"}}>Click here</button>
	      </Popup>
        </div>
      </Card.Body>
    </Card>
        </Col>

        <Col>
         <Card style={{ width: '18rem', height: '40rem' }}>
        <div className='img'>
      <Card.Img variant="top" src="Pythonlogoone.jpg" />
      {/* <img src='devops.png'></img> */}
      </div>
      <Card.Body>
        <div class="cardtitle">
        <Card.Title><b>Python</b></Card.Title>
        </div>
        <div className='txt'>
        <Card.Text >
          You will learn Python basics, build GUIs, web apps, APIs, data science, OOP, web scraping, and more.
          You will easily learn programming concepts through real-world examples.
          Learn Python from a software developer. If you want to master Python and write efficient, elegant, and simple code, this is the course you've been looking for!
        </Card.Text>
        </div>
        <div class="btn" >
        <Button variant="primary" style={{textAlign:"center"}}>Check full Course</Button>
        <Popup trigger={<img src='download-icon.png'></img>}
	       position="bottom center">
	      <div><b color='blue'>Download catalogue</b></div>
	      <button variant="secondary" style={{padding:"0.3vw"}}>Click here</button>
	      </Popup>
        </div>
      </Card.Body>
    </Card>
        </Col>
      </Row>
        </container>

    </div>


);

}

export default Cards;
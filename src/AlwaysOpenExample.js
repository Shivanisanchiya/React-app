import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function AlwaysOpenExample() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Declarations and Access Control</Accordion.Header>
        <Accordion.Body>
         
            <ul>
Identifiers & JavaBeans <br/>
 Legal Identifiers  <br/>
Sun's Java Code Conventions <br/>
 JavaBeans Standards <br/>
 Declare Classes <br/>
 Source File Declaration Rules <br/>
 Class Declarations and Modifiers <br/>
 Concrete Subclass <br/>
 Declaring an Interface <br/>
 Declaring Interface Constants <br/>
 Declare Class Members <br/>
 Access Modifiers <br/>
 Nonaccess Member Modifiers <br/>
 Constructor Declarations <br/>
Variable Declarations <br/>
 Declaring Enums
            </ul>
         
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Object Orientation </Accordion.Header>
        <Accordion.Body>
          <ul>
            Encapsulation <br/>
Inheritance, Is-A, Has-A <br/>
Polymorphism <br/>
Overridden Methods <br/>
Overloaded Methods <br/>
Reference Variable Casting <br/>
Implementing an Interface <br/>
Legal Return Types <br/>
Return Type Declarations <br/>
Returning a Value <br/>
Constructors and Instantiation <br/>
Default Constructor <br/>
Overloaded Constructors <br/>
Statics <br/>
Static Variables and Methods <br/>
Coupling and Cohesion <br/>

          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AlwaysOpenExample;
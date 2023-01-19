import { Button } from "bootstrap";
import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import AlwaysOpenExample from "./AlwaysOpenExample";



function Newwindow(){
return(
 <div>
  
{/*         <Route path="/H&D/JAVA" 
            element={<AlwaysOpenExample/>}>
        </Route> */}

<Router>
<Routes>
        <Route path="/H&D/JAVA" 
            element={<AlwaysOpenExample/>}>
        </Route>
        <Route exact path="/H&D/JAVA" 
            element={<AlwaysOpenExample/>}>
        </Route>
  </Routes>
        <ul>
          <br />
          <li>
   
            {/* Link component uses the to prop 
            to describe the location where the 
            links should navigate to. */}
            <Link to="/H&D/JAVA" target="_blank">
              Open First Component
            </Link>
          </li>
          <br />
          <li>
            <Link to="/H&D/JAVA" target="_blank">
              Open Second Component
            </Link>
          </li>
        </ul>
    
 </Router>
       
      
           

</div>


);

}

export default Newwindow;
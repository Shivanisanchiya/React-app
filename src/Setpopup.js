import Popup from './PopUp';
import React, { useState } from 'react';
import './Popup.css';
import AlwaysOpenExample from './AlwaysOpenExample';
  

function Setpopup() {
const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
    <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    />
{/*     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
    {isOpen && <Popup
      content={<>
       <div className='title'>
        <b >Core Java</b>
</div>
{/*         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
<AlwaysOpenExample/>
{/* <div className='btn'>

        <button >Test button</button>
</div> */}
      </>}
      handleClose={togglePopup}
    />}

      
    </div>
  );
}

export default Setpopup;

// import React from 'react';
import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';
import Popup from './PopUp';
import React, { useState } from 'react';
import Setpopup from './Setpopup';
import PopupGfg from './PopupGfg';
import AlwaysOpenExample from './AlwaysOpenExample';
import Newwindow from './NewWindow';
import NewTab from './NewTab';

  

function App() {
// const [isOpen, setIsOpen] = useState(false);
//  
//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   }

// const openInNewTab = (url) => {
//     window.open(url, '_blank', 'noreferrer');
//   };

  return (
    <div className="App">
    
{/*             <Dropdown title="Java">
                <Dropdown.Item>Item 1</Dropdown.Item>
                <Dropdown.Menu title="Item 2">
                    <Dropdown.Item>Item 2A</Dropdown.Item>
                    <Dropdown.Item>Item 2B</Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Item>Item 3</Dropdown.Item>
                <Dropdown.Menu title="Item 4">
                    <Dropdown.Menu title="Item 4A">
                        <Dropdown.Item>Item 4A-A</Dropdown.Item>
                        <Dropdown.Item>Item 4A-B</Dropdown.Item>
                    </Dropdown.Menu>
                    <Dropdown.Item>Item 4B</Dropdown.Item>
                </Dropdown.Menu>
  
            </Dropdown> */}
{/* <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    /> */}
{/*     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
{/*     {isOpen && <Popup
      content={<>
        <b>Design your Popup</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>Test button</button>
      </>}
      handleClose={togglePopup}
    />} */}
    
    <Setpopup></Setpopup>
    <br></br>
    <PopupGfg></PopupGfg>
    <br></br>
    <Newwindow/>
    {/* <AlwaysOpenExample></AlwaysOpenExample> */}
    {/* <NewTab/> */}
    

    
  
    {/* <div>
      <p>Visit codingbeautydev.com in a new tab</p>      <button
        role="link"
        onClick={() => openInNewTab('https://codingbeautydev.com')}
      >
        Visit
      </button>
    </div> */}
   
    {/* <Newwindow></Newwindow> */}
    </div>
  );
}

export default App;

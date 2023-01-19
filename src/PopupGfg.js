import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function PopupGfg(){
return(
<div>
	
	<Popup trigger={<img src='download-icon.png'></img>}
	position="bottom center">
	<div>Download catalogue</div>
	<button>Click here</button>
	</Popup>
</div>
)
};

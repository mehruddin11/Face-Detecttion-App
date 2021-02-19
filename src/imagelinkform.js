import React from 'react';
import './imagelinkform.css';

const ImageLinkform = ({Oninputchange, OnButtonclick }) =>{
	return (
		<div className = 'f3 color white'>
			<p> 
			{'This Will Detect Face In Your Picture '}
			</p>
			<div className = 'center'>
				<div className = 'form pa4 center shadow-5 br3'>
				  <input 
				  className = 'w-70 center f4' type = 'text' placeholder = 'Url Of Image'
				  onChange = {Oninputchange} 
				   />
				  <button 
				  className = 'w-30  f4 grow bg-pink  pv2 ph3 dib  ' onClick = {OnButtonclick}> 
				  Detect 
				  </button>
				</div>
			</div>
		</div>
		)
		
	 
}
export default ImageLinkform;
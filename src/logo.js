import React from 'react';
import Tilt from 'react-tilt';
import Brain from './brain.png'


const Logo = () =>{
	return (
		<div className = 'ma3 mt0'>
			<Tilt className="Tilt br-2 shadow-5 " options={{ max : 50 }} style={{ height: 150, width: 150 }} >
			 	<div className="Tilt-inner mt "><img className = 'mt3' alt = '' src = {Brain} /> </div>
			</Tilt>

		</div>
		)
}
export default Logo;
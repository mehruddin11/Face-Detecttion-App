import React from 'react';
import './facerecognition.css';

const Facerecognition = ({ImageUrl ,box}) =>{
	return (
		<div className = 'center ma'>
			<div className = 'absolute mt2'>
				<img id = 'inputchange' alt = '' src = {ImageUrl}width = '500px' height = 'auto' />
				<div className = 'bounding_box'  style= {{top:box.topRow, right:box.rightCol , bottom:box.bottomRow , left:box.leftCol}} > 

				</div>
			</div>
		</div>
		)
}
export default Facerecognition;
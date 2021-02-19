import React from 'react';

const Navigation = ({Onroutechnage}) =>{
	return (
	 	<nav style ={{display:'flex', justifyContent:'flex-end'}} >
	 	<p onClick = {() => Onroutechnage('signin')} className = 'pa3 f3 ma pv2 grow link underline dim black pointer'> Sign out </p>
	 	</nav>
		)
}
export default Navigation;
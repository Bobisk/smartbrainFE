import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import mp from './mp.png'

const Logo = () => {
	return (
		<Tilt className="Tilt br2 shadow-4 ma5" options={{ max : 55 }} style={{ height: 300, width: 300 }} >
		 <div className="Tilt-inner"> <img alt='logo' src={mp}/> </div>
		</Tilt>
		);
}

export default Logo;
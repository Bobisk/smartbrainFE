import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div>
			<p className='f3'>
				{'This Magic Brain will detect faces in your pictures. Give it a try'}
			</p>
		
			<div className='form pa4 br3 shadow-5 w-40 center'>
				<input className='f4 pa2 w-80 center' type='text' onChange={onInputChange} />
				<button className='grow f4 link ph3 pv2 dib black bg-yellow br2' onClick={onButtonSubmit}>Detect</button>
			</div>
		</div>
		);
}

export default ImageLinkForm;
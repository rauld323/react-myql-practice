import React from 'react';
import './ReviewForm.css';

const ReviewForm = () => {
	return (
		<div className='reviews'>
			<label>Album Name</label>
			<input type='text' name='album-name' />
			<label>Review</label>
			<input type='text' name='album-review' />
			<label>Image</label>
			<input type='file' name='album-picture' />
			<button type='submit'>Submit!</button>
		</div>
	);
};

export default ReviewForm;

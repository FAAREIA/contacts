import React from 'react';
import filterLetter from '../../store/action/filterLetter';



const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

const ContactFilterLetter = ({currentLetter, dispatch}) => {
	const letters = alphabet.map(letter => {
		const classes = (currentLetter === letter) ? 'letter active' : 'letter';

		return (
			<li key={letter}>
				<button className={classes} onClick={() => dispatch(filterLetter(letter))} type="button">{letter}</button>
			</li>
		)
	});

	return <ol id="alphabet">{letters}</ol>;
}

export default ContactFilterLetter;
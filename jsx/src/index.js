// Import the React and ReactDOM liberaries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
	const labelText = 'Enter name';
	// const buttonText = 'Wyślij!';
	const buttonText = { text: 'Submit' };
	const styleButton = { backgroundColor: 'blue', color: 'white' };

	return (
		<div>
			<label className="label" htmlFor="name"> {labelText} </label>
			<input id="name" type="text" />
			<button style={styleButton}> {buttonText.text} </button>
		</div>
	);
};

// Take the react component and show to the screen
ReactDOM.render(
	<App />,
	document.querySelector("#root")
);

import React, { useState } from 'react';

const Calculator = () => {
	// State variables
	const [num1, setNum1] = useState('');
	const [num2, setNum2] = useState('');
	const [result, setResult] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	// Event handlers
	const handleNum1Change = (e) => {
		setNum1(e.target.value);
	};

	const handleNum2Change = (e) => {
		setNum2(e.target.value);
	};

	const handleAddition = () => {
		// Validate inputs
		if (!validateInputs()) return;

		// Perform addition
		const sum = parseFloat(num1) + parseFloat(num2);
		setResult(`Result of ${num1} + ${num2} = ${sum}`);
	};

	const handleSubtraction = () => {
		// Validate inputs
		if (!validateInputs()) return;

		// Perform subtraction
		const difference = parseFloat(num1) - parseFloat(num2);
		setResult(`Result of ${num1} - ${num2} = ${difference}`);
	};

	const handleMultiplication = () => {
		// Validate inputs
		if (!validateInputs()) return;

		// Perform multiplication
		const product = parseFloat(num1) * parseFloat(num2);
		setResult(`Result of ${num1} * ${num2} = ${product}`);
	};

	const handleDivision = () => {
		// Validate inputs
		if (!validateInputs() || parseFloat(num2) === 0) {
			setErrorMessage('Error!');
			return;
		}

		// Perform division
		const quotient = parseFloat(num1) / parseFloat(num2);
		setResult(`Result of ${num1} / ${num2} = ${quotient}`);
	};

	const validateInputs = () => {
		if (num1.trim() === '') {
			const error1='Error!';
			// const error2='Number 1 can not be empty!';
			setErrorMessage('Error!, Number 1 cannot be empty!');
			return false;
		}

		if (num2.trim() === '') {
			setErrorMessage('Error!, Number 2 can not be empty!');
			return false;
		}
		if (isNaN(num1) || isNaN(num2)) {
			setErrorMessage('Error!');
			return false;
		}
		
		return true;
	};

	return (
		<div className='calculator'>
			<h2>React Calculator</h2>

			{/* Input fields */}
			<input type="text" value={num1} onChange={handleNum1Change} placeholder='Num 1'/>
			<br />
			<input type="text" value={num2} onChange={handleNum2Change} placeholder='Num 2'/>

			{/* Buttons for arithmetic operations */}
			<div>
				<button onClick={handleAddition}>+</button>
				<button onClick={handleSubtraction}>-</button>
				<button onClick={handleMultiplication}>*</button>
				<button onClick={handleDivision}>/</button>
			</div>

			{/* Error message */}
			<div style={{ color: 'red' }}>{errorMessage}</div>

			{/* Result */}
			<div style={{ color: 'green' }}>{result}</div>
		</div>
	);
};

export default Calculator;

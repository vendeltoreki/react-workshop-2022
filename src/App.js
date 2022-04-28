import './App.css';
import React from 'react';

function Amount(props) {
	const [val, setVal] = React.useState('')

	function change(event) {
		setVal(event.target.value)
	}

    return (
	<div className={val < 0 ? 'negativeNumber' : ''}>
		<label htmlFor="amount">{props.name}: </label>
		{props.amountValue ? <span>{props.amountValue}</span> : <input id="amount" onChange={change} />}
	</div>
	);
}

function App() {
  return (
    <div className="App">
		<Amount name="Euros" />
		<Amount name="BTC" amountValue="0" />
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';

function Amount(props) {
	const [val, setVal] = React.useState('')

	function change(event) {
		setVal(event.target.value)
		props.onAmountChanged(event.target.value)
	}

    return (
	<div className={val < 0 ? 'negativeNumber' : ''}>
		<label htmlFor="amount">{props.name}: </label>
		{props.amountValue ? <span>{props.amountValue}</span> : <input id="amount" onChange={change} />}
	</div>
	);
}

function App() {
	const [eur, setEur] = React.useState('')

    function exchangeRate() {
		return Math.random() * 10000;
    }

	function changeEur(value) {
		setEur(value)
	}

  return (
    <div className="App">
		<Amount name="Euros" onAmountChanged={changeEur} />
		<Amount name="BTC" amountValue={eur * exchangeRate()} />
    </div>
  );
}

export default App;

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
		{props.amountValue != undefined ? <span>{props.amountValue}</span> : <input id="amount" onChange={change} />}
	</div>
	);
}

var lastActiveTime = Date.now();

function App() {
	const [eur, setEur] = React.useState(0)
	const [crashCoefficient, setCrashCoefficient] = React.useState(1)

    function exchangeRate() {
		return Math.random() * 10000 * crashCoefficient;
    }

	function changeEur(value) {
		setEur(value)
		console.log('Date.now()=' + Date.now())
		lastActiveTime = Date.now();
		setTimeout(crash, 5000)
	}

	function crash() {
		const inactivityTime = Date.now() - lastActiveTime
		console.log('inactivityTime=' + inactivityTime)
		if (inactivityTime >= 5000) {
			setCrashCoefficient(0)
		}
	}

  return (
    <div className="App">
		<Amount name="Euros" onAmountChanged={changeEur} />
		<Amount name="BTC" amountValue={eur * exchangeRate()} />
    </div>
  );
}

export default App;

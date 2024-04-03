import { Form } from './Form'
import { useState } from 'react'
import './index.css'
import './App.css'
import './currencyData'

function App() {
    const [result, setResult] = useState()

    const findCurrencyFrom = (currencyFrom) => {
        currencyData.find(({ short }) => short === currencyFrom)
    }

    const findCurrencyTo = (currencyTo) => {
        currencyData.find(({ short }) => short === currencyTo)
    }

    const calculateResult = (amount, currencyFrom, currencyTo) => {
        const rateFrom = findCurrencyFrom()
        const rateTo = findCurrencyTo()

        setResult({
            sourceAmount: +amount,
            currencyFrom,
            targetAmount: amount * (rateFrom / rateTo),
            currencyTo,
        })
    }

    return (
            <Form result={result} calculateResult={calculateResult} />
    )
}

export default App

import { Form } from './Form';
import { useState } from 'react';
import './index.css';
import { currencies } from './currencies';

export default function App() {
    const [result, setResult] = useState()

    const findCurrencyFrom = (currencyFrom) => {
        currencies.find(({ short }) => short === currencyFrom)
    }

    const findCurrencyTo = (currencyTo) => {
        currencies.find(({ short }) => short === currencyTo)
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
            <>
            <Form result={result} calculateResult={calculateResult} />
            </>
    )
}


import { Form } from './Form';
import { useState } from 'react';
import './index.css';
import { currencies } from './currencies';

export default function App() {
    const [result, setResult] = useState();

    const calculateResult = (currencyFrom, currencyTo, amount) => {
        const rateFrom = currencies.find(
            ({ short }) => short === currencyFrom,
        ).rate;
        const rateTo = currencies.find(
            ({ short }) => short === currencyTo,
        ).rate;

        setResult({
            sourceAmount: +amount,
            currencyFrom,
            targetAmount: amount * (rateFrom / rateTo),
            currencyTo,
        });
    };

    return (
        <>
            <Form result={result} calculateResult={calculateResult} />
        </>
    );
}

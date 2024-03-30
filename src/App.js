import { Form } from './Container/Form'
import { currencyData } from './Container/CurrencyData'
import { useState } from 'react'
import { Container } from './Container'

import './index.css'

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
        <Container>
            <Form result={result} calculateResult={calculateResult} />
        </Container>
    )
}

export default App

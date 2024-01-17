import { Footer } from './Footer'
import { currencyData } from '../CurrencyData'
import { Select } from './Select'
import { Header } from './Header'
import { Amount } from './Amount'
import { useState } from 'react'

export const Form = () => {
    const [currencyFrom, setCurrencyFrom] = useState(currencyData[0].short)
    const [currencyTo, setCurrencyTo] = useState(currencyData[1].short)
    const [amount, setAmount] = useState(0)

    const onSelectChange1 = ({ target }) =>
        setCurrencyFrom(
            currencyData.find((currency) => currency.short === target.value)
        )

    const onSelectChange2 = ({ target }) =>
        setCurrencyTo(
            currencyData.find((currency) => currency.short === target.value)
        )

    const onInputChange = ({ target }) => {
        setAmount(target.value)
    }

    const onFormSubmit = (event, calculateResult) => {
        event.preventDefault()
        calculateResult()
    }

    <form onSubmit={onFormSubmit}>
        <Header title={'Kalkulator walutowy'} />
        <Select
            value={currencyFrom.short}
            onChange={onSelectChange1}
            selectName={'Przelicz z '}
            currencyData={currencyData}
        />
        <Select
            value={currencyTo.short}
            onChange={onSelectChange2}
            selectName={'Przelicz na'}
            currencyData={currencyData}
        />
        <Amount amount={amount} onChange={onInputChange} />
        <button className="button">Przelicz</button>
        <Result result={result} />
        <Footer
            text={'Kurs średni walut Santander Bank Polska z dnia 28.03.2023'}
        />
    </form>
}

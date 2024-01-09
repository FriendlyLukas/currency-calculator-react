import Container from './Container'
import { Footer } from './Footer'
import { currencyData } from './CurrencyData'
import { Select } from './Select'
import { Header } from './Header'
import { Amount } from './Amount'
import { useState } from 'react'
import { ShowResult } from './Result'

function App() {
    const [currencyFrom, setCurrencyFrom] = useState(currencyData[0].currency)
    const [currencyTo, setCurrencyTo] = useState(currencyData[1].currency)
    const [result, setResult] = useState(0)
    const [amount, setAmount] = useState(0)
    const [showAllObject, setShowAllObject] = useState({
        showCurrencyFrom: '',
        showCurrencyTo: '',
        showAmount: null,
        showResult: null,
    })

    const onCLickShowResult = ({ currencyFrom, currencyTo, amount, result }) =>
        setShowAllObject({
            showCurrencyFrom: currencyFrom,
            showCurrencyTo: currencyTo,
            showAmount: amount,
            showResult: result,
        })

    const onSelectChange1 = ({ target }) =>
        setCurrencyFrom(
            currencyData.find((currency) => currency.currency === target.value)
        )

    const onSelectChange2 = ({ target }) =>
        setCurrencyTo(
            currencyData.find((currency) => currency.currency === target.value)
        )

    const onInputChange = ({ target }) => {
        setAmount(target.value)
    }

    const calculateResult = () => {
        if (currencyFrom && currencyTo) {
            const result = amount * (currencyFrom.rate / currencyTo.rate)
            setResult(result)
        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault()
        calculateResult()
    }

    return (
        <Container>
            <form onSubmit={onFormSubmit}>
                <Header title={'Kalkulator walutowy'} />
                <Select
                    value={currencyFrom.currency}
                    onChange={onSelectChange1}
                    selectName={'Przelicz z '}
                    currencyData={currencyData}
                />
                <Select
                    value={currencyTo.currency}
                    onChange={onSelectChange2}
                    selectName={'Przelicz na'}
                    currencyData={currencyData}
                />
                <Amount amount={amount} onChange={onInputChange} />
                <button
                    className="button"
                    result={result}
                    onClick={calculateResult}
                    onCLick={onCLickShowResult}
                >
                    Przelicz
                </button>
                <ShowResult showAllObject={showAllObject} />
                <Footer
                    text={
                        'Kurs średni walut Santander Bank Polska z dnia 28.03.2023'
                    }
                />
            </form>
        </Container>
    )
}

export default App

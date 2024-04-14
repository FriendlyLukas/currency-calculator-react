import { currencies } from '../currencies';
import { useState } from 'react';
import { Result } from './Result';
import "./styles.css"

export const Form = ({calculateResult, result}) => {
    const [currencyFrom, setCurrencyFrom] = useState(currencies[0].short)
    const [currencyTo, setCurrencyTo] = useState(currencies[1].short)
    const [amount, setAmount] = useState(0)  

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currencyFrom, currencyTo, amount);
    }
    
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <header className="form__header">Kalkulator walutowy</header>
            <span className="form__amount__header">Kwota</span>
                <input
                    className="form__amount__input"
                    type="number"
                    min="1"
                    step="any"
                    data-bm="52"
                    pattern="/^[0-9]([.,][0-9]+)?$/"
                    value={amount}
                    onChange={({ target }) => {setAmount(target.value)}}
                />
            <span className="form__select__selectName">Konwersja z</span>
            <select title="currency" className="form__select" onChange={({target}) => setCurrencyFrom(target.value)}
            value={currencyFrom}>
                {currencies.map((currency) => (
                <option
                    className="form__select__option"
                    value={currency.short}
                    key={currency.short}
                >
                    {currency.short}
                </option>
                ))}
            </select>
            <span className="form__select__selectName">Konwersja do</span>
            <select title="currency" className="form__select" onChange={({target}) => setCurrencyTo(target.value)}
            value={currencyTo}>
                {currencies.map((currency) => (
                <option
                    className="form__select__option"
                    value={currency.short}
                    key={currency.short}
                >
                    {currency.short}
                </option>
                ))}
            </select>
            <button className="form__button">Przelicz!</button>
            <Result result={result}/>
            <footer className="form__footer">Dane kursów walut pochodzą z Tabeli nr 073/A/NBP/2024 z dnia 2024-04-12</footer>
    </form>
    );
}

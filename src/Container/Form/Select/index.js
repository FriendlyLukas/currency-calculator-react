import { currencyData } from '../../CurrencyData'
import './styles.css'

export const Select = ({ selectName, onChange, select }) => {
    return (
        <div className="select__selectContainer">
            <span className="select__selectName">{selectName}</span>
            <select title="currency" className="select" onChange={onChange}>
                {currencyData.map((currencyName, index) => {
                    return (
                        <option
                            className="select__option"
                            value={select}
                            key={index}
                        >
                            {currencyName.currency}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

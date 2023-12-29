import { currencyData } from "../CurrencyData";

const  Select = ({selectName})=> {    
    
    return (
        <div>{selectName}
            <select>
            {currencyData.map((currencyName, index) => {
                return (
                    <option key = {index}>
                        {currencyName.currency}
                    </option>
                )
            })}
        </select>
        </div>
    );
};

export {Select};
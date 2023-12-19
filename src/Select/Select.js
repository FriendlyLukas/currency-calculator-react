const Select = ({props})=> {
    
    const dataArray = props.CurrencyDate;
    
    return (
        <select>
            {dataArray.map((currency, index) => {
                return (
                    <option key = {index}>
                        {currency.abreviation}
                    </option>
                )
            })}
            <option></option>
        </select>
    );
};

export {Select};
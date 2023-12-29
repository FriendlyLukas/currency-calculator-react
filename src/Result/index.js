import { currencyData } from "../CurrencyData";
    
const showResult = ({amount, result, currency1Index, currency2Index}) => {
    calculateResult({amount,currency1Index, currency2Index});
    return <div>({currencyData.abreviation[currency1Index]}{amount}={currencyData.abreviation[currency2Index]}{result})</div>
    };
       
    const calculateResult = (currency1Index,currency2Index) => {
      let result = currencyData.rate[currency1Index]/currencyData.rate[currency2Index];
      return result
    }

export {showResult}
 
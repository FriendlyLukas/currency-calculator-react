import { currencyData } from "../CurrencyData";

export const ShowResult = ({result,amount, currencyIndex1, currencyIndex2}) => (
        <>
        `${amount}${currencyData.abreviation[currencyIndex1]} 
        = ${result}${currencyData.abreviation[currencyIndex2]}`
        </>
        
);
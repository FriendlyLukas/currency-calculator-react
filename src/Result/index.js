import "./styles.css";


export const ShowResult = ({result,amount, select1, select2}) => (
        <div className="showResult">{amount} {select1.abreviation} 
        = {Number(result).toFixed(2)} {select2.abreviation}</div>
);
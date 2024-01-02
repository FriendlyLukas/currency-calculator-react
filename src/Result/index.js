import "./styles.css";


export const ShowResult = ({result,amount, select1, select2}) => (
        <div className="showResult">
        {Number(amount).toFixed(2)} {select1.abreviation} = 
        <strong> {Number(result).toFixed(2)} {select2.abreviation}</strong>
        </div>
);
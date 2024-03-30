import './styles.css'
export const Result = (props) => {
    const sourceAmount = props.result ? props.result.sourceAmount ?? "N/A" : "N/A";
    const CurrencyFrom = props.result ? props.result.CurrencyFrom ?? "N/A" : "N/A";
    const targetAmount = props.result ? props.result.targetAmount ?? "N/A" : "N/A";
    const CurrencyTo = props.result ? props.result.CurrencyTo ?? "N/A" : "N/A";
      <div className="result">
            {Number(sourceAmount).toFixed(2)}{' '}
            {CurrencyFrom} =
            <strong>
                {' '}
                {Number(targetAmount).toFixed(2)}{' '}
                {CurrencyTo}
            </strong>
        </div>
}

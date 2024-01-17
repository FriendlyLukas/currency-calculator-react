import './styles.css'

export const Result = ({ result }) => (
    <div className="result">
        {Number(result.sourceAmount).toFixed(2)}{' '}
        {result.CurrencyFrom} =
        <strong>
            {' '}
            {Number(result.targetAmount).toFixed(2)}{' '}
            {result.CurrencyTo}
        </strong>
    </div>
)

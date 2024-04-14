import './styles.css';
export const Result = ({ result }) => {
    return (
        <p className="result">
            {result !== undefined && (
                <>
                    <span className="result__amount">
                        {result.sourceAmount.toFixed(2)}&nbsp;
                        {result.currencyFrom}&nbsp;={' '}
                        <strong>
                            {result.targetAmount.toFixed(2)}&nbsp;
                            {result.currencyTo}
                        </strong>
                    </span>
                </>
            )}
        </p>
    );
};

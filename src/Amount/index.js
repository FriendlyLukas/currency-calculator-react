import './styles.css'

export const Amount = ({ amount, onChange }) => {
    return (
        <div className="amount">
            <span className="amount__header">Kwota</span>
            <input
                className="amount__input"
                type="number"
                min="1"
                step="any"
                required
                data-bm="52"
                pattern="^[0-9]*$"
                value={amount}
                onChange={onChange}
                placeholder="0.00"
            />
        </div>
    )
}

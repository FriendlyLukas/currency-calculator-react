export const Amount = () => {
    return (
    <div> 
        <span>Kwota</span>
        <input
        type="number"
        min="1"
        step="any"
        required
        data-bm="52"
        pattern="^[0-9]*$"
        />
    </div>
    );
};
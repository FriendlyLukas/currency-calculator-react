import"./styles.css"

export const formInput = () => (
    <p>
    <label>
      <strong className="form__text">Kwota</strong>
      <input
        className="form__field"
        name="EUR"
        type="number"
        min="1"
        step="any"
        required
        value="0"
        data-bm="52"
        pattern="((?:[0-9]{1,3}[ \.,]?)*[ \.,]?[0-9]+)"
      />
    </label>
  </p>
);
import { currencyTable } from "../currencyTable"

export const formSelect = () => {
   <p>
   <label>
    <strong class="form__text">Przelicz na:</strong>
    <select
      className="form__select form__select--center"
      name="currency2"
    >
      <option value="EUR">{currencyTable.abreviation[0]}</option>
      <option value="PLN">{currencyTable.abreviation[1]}</option>
      <option value="USD">{currencyTable.abreviation[2]}</option>
      <option value="GBP">{currencyTable.abreviation[3]}</option>
      <option value="NOK">{currencyTable.abreviation[4]}</option>
    </select>
  </label>
</p>
} 
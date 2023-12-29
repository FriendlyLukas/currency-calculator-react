import Container from "./Container";
import { Footer } from "./Footer";
import { currencyData } from "./CurrencyData";
import { Select } from "./Select";
import { Header } from "./Header";
import { Amount } from "./Amount";
import { showResult as Result } from "./Result";
import { useState } from "react";

function App() {

  const [currency, setCurrency] = useState();
  const [amout, setAmount] = useState();
  const [selectedIndex, setSelectedIndex] = useState(null);
      
  const onSelectChange = ({target}) => {
    const selectedValue = setCurrency(target.value);
    const selectedIndex = currencyData.indexOf(selectedValue)

    setSelectedIndex(selectedIndex);
  };

  const onInputChange = ({target}) => setAmount(target.value);
  


  return (
    <Container>
      <Header title={"Kalkulator walutowy"}/>
      <Select currency1Index = {selectedIndex} currency1 ={currency} onChange={onSelectChange} selectName={"Przelicz z"} currencyData={currencyData}/>
      <Select currency2Index = {selectedIndex} currency2 ={currency} onChange={onSelectChange} selectName={"Przelicz na"} currencyData={currencyData}/>
      <Amount amount={amout} onChange = {onInputChange}/>
      <Result />
      <Footer text={"Kursy średni walut Santander Bank Polska z dnia 28.03.2023"}/>
    </Container>
  );
}

export default App;

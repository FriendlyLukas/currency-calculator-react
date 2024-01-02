import Container from "./Container";
import { Footer } from "./Footer";
import { currencyData } from "./CurrencyData";
import { Select } from "./Select";
import { Header } from "./Header";
import { Amount } from "./Amount";  
import { useState } from "react";
import {ShowResult} from "./Result";

function App() {

  const [select1, setSelect1] = useState(currencyData[0].currency);
  const [select2, setSelect2] = useState(currencyData[1].currency);
  const [result, setResult] = useState(0);
  
  const onSelectChange1 = ({ target }) => setSelect1
  (currencyData.find(currency => currency.currency === target.value));
  const onSelectChange2 = ({ target }) => setSelect2
  (currencyData.find(currency => currency.currency === target.value));

  const calculateResult = (amount) => {
    if (select1 && select2) {
      const result = amount * (select1.rate / select2.rate);
      setResult(result);
    };
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult();
  }
       
  return (
    <Container>
      <form onSubmit={onFormSubmit}>
      <Header title={"Kalkulator walutowy"}/>
      <Select value = {select1.currency} onChange = {onSelectChange1} 
      selectName={"Przelicz z "} currencyData={currencyData}/>
      <Select value = {select2.currency} onChange = {onSelectChange2} 
      selectName={"Przelicz na"} currencyData={currencyData}/>
      <Amount />
      <button className="button" onClick={calculateResult}>Przelicz</button>
      <ShowResult result={result} select1={select1} select2={select2}/>
      <Footer text={"Kurs średni walut Santander Bank Polska z dnia 28.03.2023"}/>
      </form>
    </Container>
  );
}

export default App;
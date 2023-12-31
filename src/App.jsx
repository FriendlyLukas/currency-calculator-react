import Container from "./Container";
import { Footer } from "./Footer";
import { currencyData } from "./CurrencyData";
import { Select } from "./Select";
import { Header } from "./Header";
import { Amount } from "./Amount";  
import { useState } from "react";
import {ShowResult} from "./ShowResult";

function App() {

  const [select1, setSelect1] = useState(currencyData[0]);
  const [select2, setSelect2] = useState(currencyData[1]);
  const [currencyIndex1, setCurrencyIndex1] = useState();
  const [currencyIndex2, setCurrencyIndex2] = useState();
  const [amount, setAmount] = useState(0);
  const [result, calculateResult] = useState();
  
  const onSelectChange1 = ({target}) => setSelect1(target.value);
  const onSelectChange2 = ({target}) => setSelect2(target.value);
  const onSelectChangeIndex1 = () => setCurrencyIndex1(currencyData.findIndex(select1)); 
  const onSelectChangeIndex2 = () => setCurrencyIndex2(currencyData.findIndex(select2));
  const onInputChange = ({target}) => setAmount(target.value);
  const onClickChange = () => calculateResult(
    result => result = amount*(currencyData.rate[currencyIndex1]/currencyData.rate[currencyIndex2])
    );
  const onFormSubmit = (event) => {
    event.preventDefault();
  }
       
  return (
    <Container>
      <form onSubmit={onFormSubmit}>
      <Header title={"Kalkulator walutowy"}/>
      <Select value = {select1} onChange = {onSelectChange1} onChangeIndex ={onSelectChangeIndex1}
      selectName={"Przelicz z"} currencyData={currencyData}
      />
      <Select value = {select2} onChange = {onSelectChange2} onChangeIndex={onSelectChangeIndex2}
      selectName={"Przelicz na"} currencyData={currencyData}
      />
      <Amount amount={amount} onChange = {onInputChange}/>
      <button onClick={onClickChange}>Przelicz</button>
      <ShowResult result = {result} amount={amount} currencyIndex1={currencyIndex1} currencyIndex2={currencyIndex2}/>
      <Footer text={"Kocham cie kursy średni walut Santander Bank Polska z dnia 28.03.2023"}/>
      </form>
    </Container>
  );
}

export default App;

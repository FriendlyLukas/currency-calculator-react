import Container from "./Container";
import {Footer} from "./Footer";
import {Select} from "./Select/Select";
import { CurrencyData } from "./CurrencyData/CurrencyData";


function App() {
  return (
    <Container>
      <Select CurrencyData={CurrencyData}/>
      <Select CurrencyData={CurrencyData}/>
      <Footer text={"Kursy średni walut Santander Bank Polska z dnia 28.03.2023"}/>
    </Container>
  );
}

export default App;

import Container from "./Container";
import {Footer} from "./Footer";
import { currencyTable } from "./currencyTable";
import {currencyForm} from "./currencyForm"; 
import { formSelect } from "./formSelect";
import { formInput } from "./formInput";
import { formResult } from "./formResult";

function App() {
  return (
    <Container>
      <currencyForm title={"Kalkulator walutowy"}>
      <formSelect/>
      <formSelect/>
      <formInput/>
      <formResult/>
      <Footer text={"Kursy średni walut Santander Bank Polska z dnia 28.03.2023"}/>
      </currencyForm>
    </Container>
  );
}

export default App;

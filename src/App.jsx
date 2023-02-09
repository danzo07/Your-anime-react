import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import { Body } from "./style.styled";


function App() {
  return (
    <BrowserRouter basename="/">
      <Body>
        <Pages/>
      </Body>
    </BrowserRouter>
  );
}

export default App;

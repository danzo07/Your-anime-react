import { BrowserRouter } from "react-router-dom";
import { CardContextProvider } from "./CardContext";
import NavBar from "./components/NavBar";

import Pages from "./pages/Pages";
import { Body } from "./style.styled";



function App() {
  return (
    <CardContextProvider>
      <BrowserRouter basename="/">
        <Body>
          <NavBar/>
          <Pages />
        </Body>
      </BrowserRouter>
    </CardContextProvider>
  );
}

export default App;

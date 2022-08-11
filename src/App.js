import React from "react";
import CurrencyForm from "./components/currencyForm/CurrencyInputForm";
import styled from "styled-components";

function App() {
  return (
    <div>
      <div>Kripto Takip Uygulaması | Enocta | Halil İbrahim </div>
      <AppContainer>
        <CurrencyForm />
      </AppContainer>
  </div>
    
  );
}

export default App;

const AppContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
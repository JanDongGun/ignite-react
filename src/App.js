import React from "react";
// Import Page and component
import Home from "./pages/home";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <h1>Ignite</h1>
      <Home />
    </div>
  );
}

export default App;

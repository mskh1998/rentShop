import { useState, useEffect } from "react";
import { storeContext } from "./context/storeContext";

import "./App.css";

import RoutePage from "./Routes";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <storeContext.Provider value={{}}>
      <RoutePage />
    </storeContext.Provider>
  );
}

export default App;

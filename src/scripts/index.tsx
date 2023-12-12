import React from "react";
import { createRoot } from "react-dom/client";

import chessImg from "./../assets/chess.jpg";

const getMessage = (str: string) => str

function App() {
  return (
    <div>
      <img src={chessImg} alt="chess" width="500" />
      <h1>{getMessage('Hiiii!')}</h1>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);

import { useState } from "react";

let Hyptoneuse = () => {
  let [inp, setInp] = useState("");
  let [outp, setOutp] = useState();
  let [a, b] = inp.split(",");
  // console.log(a,b);
  let calculateHypotaneuse = () => {
    let h = Math.sqrt(a * a + b * b);
    setOutp(h);
  };
  return (
    <div>
      <h1>Hypotaneuse of Triangle</h1>
      <input
        type="text"
        onChange={(e) => setInp(e.target.value)}
        placeholder="Format: side1,side2"
      />
      <button onClick={calculateHypotaneuse}>Check</button>
      <h2>{outp}</h2>
    </div>
  );
};

export default Hyptoneuse;

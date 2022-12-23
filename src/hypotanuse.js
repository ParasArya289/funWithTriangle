import { useState } from "react";

let Hyptoneuse = () => {
  let [inp, setInp] = useState("");
  let [outp, setOutp] = useState();
  let [a, b] = inp.split(",");
  let calculateHypotaneuse = () => {
    let h = Math.sqrt(a * a + b * b);
    setOutp(h);
  };
  return (
    <div>
      <h1 className="heading">Hypotanuse of<span> Triangle</span></h1>
      <input className="input-angle"
        type="text"
        onChange={(e) => setInp(e.target.value)}
        placeholder="Format: side1,side2"
      />
      <button class="btn-istriangle" onClick={calculateHypotaneuse}>Check</button>
      <h2 className="heading">{outp}</h2>
    </div>
  );
};

export default Hyptoneuse;

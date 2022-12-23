import { useState } from "react";

let Hyptoneuse = () => {
  let [inp, setInp] = useState("");
  let [outp, setOutp] = useState();

  let [a, b] = inp.split(",");

  let calculateHypotaneuse = () => {
    if (a && b && a > 0 && b > 0) {
      let h = Math.sqrt(a * a + b * b);
      setOutp(h);
    } else {
      alert(
        "Please follow format (side1,side2) dont forget commas and provide positive angles"
      );
    }
  };

  return (
    <div>
      <h1 className="heading">
        Hypotanuse of<span> Triangle</span>
      </h1>
      <h3 className="heading">H² = A² + B²</h3>
      <input
        className="input-angle"
        type="text"
        onChange={(e) => setInp(e.target.value)}
        placeholder="Format: side1,side2"
      />
      <button class="btn-istriangle" onClick={calculateHypotaneuse}>
        Check
      </button>
      <h2 className="heading">{outp}</h2>
    </div>
  );
};

export default Hyptoneuse;

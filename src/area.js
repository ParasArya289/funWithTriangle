import { useState } from "react";

let Area = () => {
  let [inp, setInp] = useState("");
  let [area, setArea] = useState("");

  let [base, height] = inp.split(",");

  let calculateArea = () => {
    if (base && height && base > 0 && height > 0) {
      let a = (+base * +height) / 2;
      setArea(`Area formed by ${base} and ${height} is ${a} cm²`);
    } else {
      alert(
        "Please follow format (Base,Height) dont forget commas and provide positive values"
      );
    }
  };
  return (
    <div>
      <h1 className="heading">
        Area of <span>Triangle</span>
      </h1>
      <h3 className="heading">1/2 x Base x Height</h3>
      <input
        className="input-angle"
        type="text"
        onChange={(e) => setInp(e.target.value)}
        placeholder="Format: Base,Height"
      />
      <button className="btn-istriangle" onClick={calculateArea}>
        Check
      </button>
      <h2 className="heading">{area}</h2>
    </div>
  );
};
export default Area;

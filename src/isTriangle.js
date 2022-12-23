import { useState } from "react";

let IsTriangle = () => {
  let [angles, setAngles] = useState("");
  let [check, setCheck] = useState("");
  let [angle1, angle2, angle3] = angles.split(",");

  let sumOfAngles = (a1, a2, a3) => {
    return +a1 + +a2 + +a3;
  };

  let checkTriangle = () => {
    let sumOfAn = sumOfAngles(angle1, angle2, angle3);
    console.log(sumOfAn);
    if (sumOfAn === 180) {
      setCheck("Yes it is a triangle");
    } else {
      setCheck(`No, it is not a triangle because sum of angle is ${sumOfAn}`);
    }
  };

  return (
    <div>
      <h1>isTriangle</h1>
      <input
        type="text"
        placeholder="angle1,angle2,angle3"
        onChange={(e) => setAngles(e.target.value)}
      />
      <button onClick={checkTriangle}>Submit</button>
      <h2>{check}</h2>
    </div>
  );
};

export default IsTriangle;
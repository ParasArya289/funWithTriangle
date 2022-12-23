import { useState } from "react";
import './isTriangle.css';

let IsTriangle = () => {
  let [angles, setAngles] = useState("");
  let [check, setCheck] = useState("");
  let [angle1, angle2, angle3] = angles.split(",");

  let sumOfAngles = (a1, a2, a3) => {
    return +a1 + +a2 + +a3;
  };

  let checkTriangle = () => {
    let sumOfAn = sumOfAngles(+angle1, +angle2, +angle3);
    console.log(sumOfAn);
    if(angle1,angle2,angle3 && angle1,angle2,angle3 > 0){
        if (sumOfAn === 180) {
          setCheck(`Yes it is a triangle, sum of angle is ${sumOfAn}`);
        } else {
          setCheck(`No, it is not a triangle because sum of angle is ${sumOfAn}`);
        }
    }
    else{
        alert("Please follow format (angle1,angle2,angle3) dont forget commas and provide positive angles")
    }
  };

  return (
    <div className="container-istriangle">
      <h1 className="heading">Is<span>Triangle</span></h1>
      <input className="input-angle"
        type="text"
        placeholder="Format: angle1,angle2,angle3"
        onChange={(e) => setAngles(e.target.value)}
      />
      <button className="btn-istriangle" onClick={checkTriangle}>Submit</button>
      <h2 className="heading">{check}</h2>
    </div>
  );
};

export default IsTriangle;
import { useState } from "react";

let Area = () =>{
    let [inp,setInp] = useState('');
    let [area,setArea] = useState();
    let [base,height] = inp.split(',');

    // console.log(+base,+height)

    let calculateArea = () =>{
        let a = ((+base) * (+height))/2
        setArea(a);
    }
    return(
        <div>
            <h1>Area of Triangle</h1>
            <h3>1/2xbasexheight</h3>
            <input type="text" onChange={e=>setInp(e.target.value)} placeholder="Format: Base,Height" />
            <button onClick={calculateArea}>Check</button>
            <h2>Area formed by {base} and {height} is {area} cm2</h2>
        </div>
    )
}
export default Area;
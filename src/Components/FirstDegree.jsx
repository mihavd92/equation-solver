import {useState} from "react";


let FirstDegree = (props) => {
    const [A, setA] = useState("")
    const [B, setB] = useState("")
    const [C, setC] = useState("")
    const [result, setResult] = useState("")

    let AChange = (event) => {
        setA(event.target.value)
    }
    let BChange = (event) => {
        setB(event.target.value)
    }
    let CChange = (event) => {
        setC(event.target.value)
    }

    let calculate = () => {
        if (A !== "" && B !== "" && C !== "") {
            setResult("  x = " + Math.floor((Number(C) - Number(B)) / Number(A) * 100) / 100)
        }
        else {
            setResult("Please enter valid value")
        }
    }

    return (
        <div>
            <h2>First Order Equation Solver</h2>
            <p>Enter the A, B and C coefficients for the equation</p>
            <p>Sample: "2<em>x</em> + 5 = 7" for -{'>'} <em>A</em> = 2 , <em>B</em> = 5 , <em>C</em> = 7 </p>

            <div className="input-group">
                <input type="number" className="form-control" placeholder="Enter A" onChange={AChange}/>
                <span className="fs-3"> + </span>
                <input type="number" className="form-control" placeholder="Enter B" onChange={BChange}/>
                <span className="fs-3"> = </span>
                <input type="number" className="form-control" placeholder="Enter C" onChange={CChange}/>
            </div>

            <button className="btn btn-primary" onClick={calculate}>Calculate <i className="fas fa-check-circle"></i></button>
            <div className="alert-result">
                <em><span>{result}</span></em>
            </div>
        </div>
    )
}

export default FirstDegree;

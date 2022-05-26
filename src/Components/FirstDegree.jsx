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
            setResult("  X = " + (Number(C) - Number(B)) / Number(A))
        }
        else {
            setResult("Please enter valid value")
        }
    }

    return (
        <div>
            <h2>First Order Equation Solver</h2>
            <p>Enter the A, B and C coefficients for the equation</p>
            <p>Sample: "2x + 5 = 7" for -{'>'} A = 2 , B = 5 , C = 7 </p>

            <div className="input-group">
                <input type="number" className="form-control me-2" placeholder="Enter the value of A" onChange={AChange}/>
                <span className="fs-3"> + </span>
                <input type="number" className="form-control ms-2 me-2" placeholder="Enter the value of B" onChange={BChange}/>
                <span className="fs-3"> = </span>
                <input type="number" className="form-control ms-2" placeholder="Enter the value of C" onChange={CChange}/>
            </div>

            <button className="btn btn-primary btn-lg mt-3 mb-3" onClick={calculate}>Calculate <i className="fas fa-check-circle"></i></button>
            <div className="alert alert-success w-50">
                Result <span className="fw-bold">{result}</span>
            </div>
        </div>
    )
}

export default FirstDegree;

import {useState} from "react";


let SecondDegree = (props) => {
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
            let descriminant = Math.pow(Number(B), 2) - (4 * Number(A) * Number(C));
            console.log(descriminant);
            if (descriminant < 0) {
                setResult("Equation has not valid values")
            } else if (descriminant === 0) {
                let x = (-B / (2 * A))
                setResult("Equation has 1 root, x = " + x)
            } else if (descriminant > 0) {
                let x1 = (-Number(B) + Math.sqrt(descriminant)) / (2 * Number(A))
                let x2 = (-Number(B) - Math.sqrt(descriminant)) / (2 * Number(A))
                setResult( "x1 = " + x1 + ", x2 = " + x2)
            } else {
                setResult("Please enter valid value")
            }
        }
    }

    return (
        <div>
            <h2 className="mt-5">Quadratic Equation Solver</h2>
            <p>Enter the A, B and C coefficients for the equation</p>
            <p>Sample : "3x^2 + 9x + 6 = 0" for -{'>'} A = 3 , B = 9 , C = 6</p>

            <div className="input-group">
                <input type="number" className="form-control me-2" placeholder="Enter the value of A" onChange={AChange}/>
                <span className="fs-3"> + </span>
                <input type="number" className="form-control ms-2 me-2" placeholder="Enter the value of B" onChange={BChange}/>
                <span className="fs-3"> + </span>
                <input type="number" className="form-control ms-2 me-2" placeholder="Enter the value of C" onChange={CChange}/>
                <span className="fs-3"> = 0 </span>
            </div>

            <button className="btn btn-primary btn-lg mt-3 mb-3" onClick={calculate}>Calculate
                <i className="fas fa-check-circle"></i></button>
            <div className="alert alert-success w-50">
                Result : <span className="fw-bold">{result}</span>
            </div>
        </div>
    )
}

export default SecondDegree;

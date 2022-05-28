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
                setResult("D < 0, equation has no roots")
            } else if (descriminant === 0) {
                let x = (-B / (2 * A))
                setResult("Equation has 1 root, x = " + x)
            } else if (descriminant > 0) {
                let x1 = Math.floor((-Number(B) + Math.sqrt(descriminant)) / (2 * Number(A)) * 100) / 100
                let x2 = Math.floor((-Number(B) - Math.sqrt(descriminant)) / (2 * Number(A)) * 100) / 100
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
            <p>Sample : "3<em>x</em><sup>2</sup> + 9<em>x</em> + 6 = 0" for -{'>'} <em>A</em> = 3 , <em>B</em> = 9 , <em>C</em> = 6</p>

            <div className="input-group">
                <input type="number" className="form-control" placeholder="Enter A" onChange={AChange}/>
                <span className="fs-3"> + </span>
                <input type="number" className="form-control" placeholder="Enter B" onChange={BChange}/>
                <span className="fs-3"> + </span>
                <input type="number" className="form-control" placeholder="Enter C" onChange={CChange}/>
                <span className="fs-3"> = 0 </span>
            </div>

            <button className="btn btn-primary btn-lg mt-3 mb-3" onClick={calculate}>Calculate
                <i className="fas fa-check-circle"></i></button>
            <div className="alert-result">
                <em><span>{result}</span></em>
            </div>
        </div>
    )
}

export default SecondDegree;

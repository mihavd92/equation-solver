import './App.css';
import About from "./Components/About";
import FirstDegree from "./Components/FirstDegree";
import SecondDegree from "./Components/SecondDegree";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="text-center mt-3">
          <h1>Equation Solver with an Unknown</h1>
          <p className="fs-5">
            To solve equations with one unknown of the first and second degree, write the coefficients in the appropriate places and calculate
          </p>
          <div className="calc-container">
            <div className="first-degree">
              <FirstDegree />
            </div>
            <div className="second-degree">
              <SecondDegree />
            </div>
          </div>
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;

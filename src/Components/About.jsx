

let About = props => {

    let currentYear = new Date().getFullYear()

    return (
        <div className="text-center fs-5">
            <p>WebDev - Misha Vdovichenko, {currentYear}</p>
        </div>
    )
}

export default About;

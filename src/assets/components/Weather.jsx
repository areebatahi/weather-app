import { useEffect, useState } from "react"
// import React from 'react'

const Weather = () => {

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const body = document.body
        const toggle = document.querySelector('.toggle-inner')
        if (darkMode === true) {
            body.classList.add('dark-mode')
            toggle.classList.add('toggle-active')
        } else {
            body.classList.remove('dark-mode')
            toggle.classList.remove('toggle-active')
        }
    }, [darkMode])

    return (
        <>
            <nav className="navbar pt-3 pb-3">
                <div className="container">
                    <div className="col-3" id="toggle" onClick={() => darkMode === false ? setDarkMode(true) : setDarkMode(false)} >
                        <div className="toggle-inner" />
                    </div>
                    <div className="col-5">
                        <input type="text" className="searchBar" ></input>
                    </div>
                    <div className="col-3">
                        <button className="btn p-1">
                            <img src="./src/assets/current location icon.png" width={30} />
                            <b className="ps-2">Current Location</b>
                        </button>
                    </div>
                </div>
            </nav>

            <div className="container mt-4">
                <div className="p-5 col-4 shadow customCard">
                    <h3>Athens</h3>
                    <div className="large">09:03</div><p className="small">Thursday, 31 Aug</p>
                </div>
                <div className="col"></div>
                <div className="p-2 mt-3 col-4 shadow customCard2">
                    <h3 className="center">5 Days Forecast:</h3>
                    <div className="d-flex">
                        <img src="./src/assets/clouds 1.png" className="imgFuild" />
                        <p><b>20°C</b></p>
                        <p><b>Friday, 1 Sep</b></p>
                    </div>
                    <div className="d-flex">
                        <img src="./src/assets/mist 1.png" className="imgFuild" />
                        <p><b>22°C</b></p>
                        <p><b>Saturday, 2 Sep</b></p>
                    </div>
                    <div className="d-flex">
                        <img src="./src/assets/clear 2.png" className="imgFuild" />
                        <p><b>27°C</b></p>
                        <p><b>Saturday, 2 Sep</b></p>
                    </div>
                    <div className="d-flex">
                        <img src="./src/assets/drizzle 1.png" className="imgFuild" />
                        <p><b>18°C</b></p>
                        <p><b>Monday, 4 Sep</b></p>
                    </div>
                    <div className="d-flex">
                        <img src="./src/assets/rain 1.png" className="imgFuild" />
                        <p><b>16°C</b></p>
                        <p><b>Tuesday, 5 Sep</b></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Weather
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
                        <input type="text" className="searchBar" placeholder="Search for your preffered city..."></input>
                    </div>
                    <div className="col-3">
                        <button className="btn p-1">
                            <img src="./src/assets/current location icon.png" width={30} />
                            <b className="ps-2">Current Location</b>
                        </button>
                    </div>
                </div>
            </nav>

            <div className="container-fluid m-4">
                <div className="row g-0">
                    <div className="col-4">
                        <div className="p-5 shadow customCard">
                            <h3>Athens</h3>
                            <div className="large">09:03</div><p className="small">Thursday, 31 Aug</p>
                        </div>

                        <div className="p-2 mt-3 shadow customCard2">
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

                    <div className="col-7 ms-4 shadow customCard2">
                        <div className="row p-3 center">
                            <div className="col-3">
                                <h1>24°C</h1>
                                <div className="letterSpacing">
                                    <span className="heading">Feels like:</span>
                                    <span className="mediumSize"> 22°C</span>
                                </div><br />
                                <div className=" mt-5 pt-5"></div>
                                <div className=" mt-5 pt-5"></div>
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <img src="./src/assets/sunrise-white 1.png"></img>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Sunrise</h5>
                                            <p className="heading">06:37 AM</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-0 mt-3">
                                    <div className="col-md-3">
                                        <img src="./src/assets/sunset-white 1.png"></img>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Sunrise</h5>
                                            <p className="heading">06:37 AM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 center">
                                <img src="./src/assets/clear 1.png" className="largeImg mt-5 pt-5" />
                                <h4>Sunny</h4>
                            </div>
                            <div className="col-4 ">
                                <div className="row mt-5">
                                    <div className="col mt-3 center">
                                        <img src="./src/assets/humidity 1.png" className="card-img-top"></img>
                                        <div className="card-body">
                                            <h5 className="card-title"><b>41%</b></h5>
                                            <p className="lineHeight">Humidity</p>
                                        </div>
                                    </div>
                                    <div className="col m-3 center">
                                        <img src="./src/assets/wind 1.png" className="card-img-top"></img>
                                        <div className="card-body">
                                            <h5 className="card-title"><b>2km/h</b></h5>
                                            <p className="lineHeight">Wind Speed</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col m-3 center">
                                        <img src="./src/assets/pressure-white 1.png" className="card-img-top"></img>
                                        <div className="card-body">
                                            <h5 className="card-title"><b>997hPa</b></h5>
                                            <p className="lineHeight">Pressure</p>
                                        </div>
                                    </div>
                                    <div className="col m-3 center">
                                        <img src="./src/assets/uv-white 1.png" className="card-img-top"></img>
                                        <div className="card-body">
                                            <h5 className="card-title"><b>8</b></h5>
                                            <p className="lineHeight">UV</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}

export default Weather
import React from 'react'
import './assets/style.css'

export default function MakeRent() {
    return (
        <section style={{ height: '500px' }}>
            <div className="d-flex justify-content-center flex-column">
                <div className="justify-content-center vertical-align-center text-center">
                    <h4 className="rent-work">Make your Rent Work for You</h4><br />
                </div>
                <div className="justify-content-center vertical-align-center text-center">
                    Real Estate is the guaranteed way to grow  yoour net worth. Why not  make your rent work for
                    <br />
                    you with our lease  to own offer  where you increase your equity  as you make your  monthly
                   <br /> payment?
                </div>
            </div>

            <div className="d-flex p-2 bd-highlight justify-content-center align-items-center" style={{
                height: "45vh", background: "#DDF5E2", marginTop: "60px"
            }}>
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="48.5" stroke="#174A41" stroke-width="3" />
                </svg>
                <i className="fa fa-play" aria-hidden="true" style={faPlay}></i>
            </div>


        </section>
    )
}


const faPlay = {
    fontSize: "45px",
    transform: "translateX(-60px)",
    color: "#174A41"
}
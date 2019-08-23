import React from 'react'
import './assets/style.css'
import Touch from '../layouts//assets/touch.png'

export default function HowWork() {
    return (



        <section style={sectionStyle}>
            <div class="container">
                <div className="justify-content-center vertical-align-center text-center">
                    <h4 className="rent-work">How it works.</h4><br />
                </div>
                <div class="row d-flex text-center work-row">

                    <div class="col-sm">
                        <div className="work-container card" style={cardStyle}>
                            <div className="touch-img" >
                                <img src={Touch} class="img-fluid img-thumbnail" alt="..." style={imgStyle} />
                            </div><br />
                            <h6>
                                Choose your<br /> preferences
                            </h6><br />
                            <h6 style={h6Style}>Apartment type, City,<br /> Neighbourhood & budget</h6>

                        </div>

                    </div>

                    <div class="col-sm">
                        <div className="work-container card" style={cardStyle}>
                            <div className="touch-img" >
                                <img src={Touch} class="img-fluid img-thumbnail" alt="..." style={imgStyle} />
                            </div><br />
                            <h6>
                                Start to save
                            </h6><br />
                            <h6 style={h6Style}>Apartment type, City,<br /> Neighbourhood & budget</h6>

                        </div>

                    </div>
                    <div class="col-sm">
                        <div className="work-container card" style={cardStyle}>
                            <div className="touch-img" >
                                <img src={Touch} class="img-fluid img-thumbnail" alt="..." style={imgStyle} />
                            </div><br />
                            <h6>
                                Build your credit <br /> worthiness
                            </h6><br />
                            <h6 style={h6Style}>Apartment type, City,<br /> Neighbourhood & budget</h6>

                        </div>

                    </div>
                    <div class="col-sm">
                        <div className="work-container card" style={cardStyle}>
                            <div className="touch-img" >
                                <img src={Touch} class="img-fluid img-thumbnail" alt="..." style={imgStyle} />
                            </div><br />
                            <h6>
                                Qualify
                            </h6><br />
                            <h6 style={h6Style}>Apartment type, City,<br /> Neighbourhood & budget</h6>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
const sectionStyle = { padding: "65px 0" }
const h6Style = { fontSize: "14px", fontWeight: "400" }
const cardStyle = { padding: "60px", boxShadow: "-2px 2px #eee, 2px 2px #eee", minHeight: "49vh" }
const imgStyle = { height: "50px" }
import React, { Component } from 'react'

export default class Carousel extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="d-flex bd-highlight mb-3 flex-column carousel-div text-white">
                    <br /><br /><br />
                    <div className="container header-text">
                        <div class="p-2 bd-highlight" style={{ fontSize: "2.5em", fontWeight: "700" }}>FirstHomes</div>
                        <div class="p-2 bd-highlight text-left" style={{ fontSize: "2.2em", fontWeight: "500" }}>The Future of home of ownership with <br /> unlimited possiblities</div>
                        <div class="p-2 bd-highlight">
                            <button type="button" class="btn btn-primary dark-green btn-learn ">LEARN MORE</button>
                            <button type="button" class="btn btn-outline ml-3 btn-started text-white">GET STARTED</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

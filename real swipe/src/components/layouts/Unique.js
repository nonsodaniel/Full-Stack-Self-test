import React from 'react'

const Unique = () => {
    return (
        <div className="d-flex p-2 bd-highlight justify-content-center align-items-center unique-body" >
            <div className="container make-rent-2-container" >
                <div className="row d-flex text-center make-rent-2-row">

                    <div className="col-sm unique align-items-center d-flex flex-column card">
                        <div className="">
                            <div className="col-sm unique align-items-center d-flex flex-column" style={{ height: "30vh" }}>
                                <div className="unique-img m-auto"></div>
                                <span className="unique-text">Unique</span>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm search align-items-center d-flex flex-column">
                        <div className="col-sm align-items-center d-flex flex-column" style={{ height: "30vh" }}>
                            <div className="search-img m-auto"></div>
                            <span className="search-text">Search</span>
                        </div>
                    </div>
                    <div className="col-sm xx align-items-center d-flex flex-column">
                        <div className="col-sm  align-items-center d-flex flex-column" style={{ height: "30vh" }}>
                            <div className="xx-img m-auto"></div>
                            <span className="xx-text">Flexible</span>
                        </div>
                    </div>
                    <div className="col-sm control align-items-center d-flex flex-column">
                        <div className="col-sm  align-items-center d-flex flex-column" style={{ height: "30vh" }}>
                            <div className="control-img m-auto"></div>
                            <span className="control-text">Control</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Unique

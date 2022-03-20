import React from 'react'

const Error404 = () => {
    return (
        <div className="bg-warning">
            <div className="row">
                <div
                    className="col-lg-12 col-md-12 col-sm-12 d-flex flex-column justify-content-center align-items-center"
                    style={{ height: "100vh" }}
                >
                    <h1 className="text-dark text-uppercase text-center fw-bold" style={{ fontSize: "37px", letterSpacing: "10px" }}>Pagina no encontrada</h1>
                    <h1 className="text-dark text-uppercase text-center fw-bold" style={{ fontSize: "120px", letterSpacing: "20px" }}>404</h1>
                    <br></br>
                    <h1 className="text-dark text-uppercase text-center fw-bold" style={{ fontSize: "65px", letterSpacing: "20px" }}>Error</h1>
                    <h1 className="text-dark text-uppercase text-center fw-bold" style={{ fontSize: "65px", letterSpacing: "20px" }}>:(</h1>
                </div>
            </div>
        </div>
    )
}

export default Error404
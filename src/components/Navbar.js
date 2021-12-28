import React, { Component } from 'react'
import { Link } from "react-router-dom"


export class Navbar extends Component {
    render() {
        return (
            <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/News-Kindle" style={{ color: "#d2d8e1" }}>News Kindle</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/News-Kindle" style={{ color: "#d2d8e1" }}>Home</Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link" to="/News-Kindle/technology" style={{ color: "#d2d8e1" }}>Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/News-Kindle/entertainment" style={{ color: "#d2d8e1" }}>Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/News-Kindle/science" style={{ color: "#d2d8e1" }}>Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/News-Kindle/health" style={{ color: "#d2d8e1" }}>Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/News-Kindle/business" style={{ color: "#d2d8e1" }}>Business</Link>
                            </li>
                            
                            

                        </ul>

                        

                    </div>
                </div>
                
            </nav>
            </>
        )
    }
}

export default Navbar

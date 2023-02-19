import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import './Header.css'

const Header = () => {
    const [othersDrop, setOthersDrop] = useState(false);
    const toggleOthersDrop = () => setOthersDrop(!othersDrop);

    const otherLinks = [
        {
            id: 1,
            title: "Test",
            url: "/"
        },
        {
            id: 2,
            title: "Test 2",
            url: "/"
        },
        {
            id: 3,
            title: "Test 3",
            url: "/"
        }
    ]
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/about' className="nav-link active" aria-current="page"> About Us</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>

                            <li className="nav-item dropdown">
                                <Dropdown
                                    isOpen={othersDrop}
                                    toggle={toggleOthersDrop}
                                    direction={"down"}    
                                >
                                    <DropdownToggle className="dropdown-toggle active">
                                        Dropdown
                                        {othersDrop ? (
                                            <span className="drop-arrow open"></span>
                                        ) : (
                                            <span className="drop-arrow"></span>
                                        )}
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        {otherLinks.map((link) => {
                                            return (
                                            <li key={link.id}> 
                                                <a href={link.url} className="dropdown-item">
                                                {link.title}
                                            </a>
                                        </li>)                                        
                                        })}  
                                    </DropdownMenu>
                                </Dropdown>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
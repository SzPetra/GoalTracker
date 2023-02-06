import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FaClipboardList } from "react-icons/fa";

const Header = () => {

    return (
        <>
            <nav className="nav-container">
                <Link to="/my-goals">
                    <FaClipboardList />
                    My Goals
                </Link>
            </nav>
            <Outlet />
        </>
    )
}

export default Header;
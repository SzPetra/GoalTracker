import React from "react";
import { Outlet } from "react-router-dom";

const Header = () => {

    return (
        <>
            <nav>this is the header</nav>
            <Outlet />
        </>
    )
}

export default Header;
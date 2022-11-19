import React from "react";

import logoImage from "../assets/images/logo.png";

const Header = () => {

    return (
        <header className="header">
            <img src={logoImage} alt="Todo react App" />
        </header>
    )
}

export default Header;
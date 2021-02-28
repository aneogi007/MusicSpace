import React from "react";
import "./Header.css";
import { useDataLayerValue } from "../DataLayer";

function Header() {

    const [{user}, dispatch] = useDataLayerValue();

    return (
        <div className = "header">
            <div className = "header_left">
                <input placeholder = "Search for stuff" type = "text" />
            </div>

            <div className="header_right">
                <h4> {user?.display_name} </h4>
             </div>
        </div>

        
    )
}

export default Header
import React from "react";
import { withRouter } from "react-router-dom";
import "./header.styles.css";


const Header = ({history,match})=>(
    <div>
        <div className="container header_styling">
            <p>Coenses Assignment</p>
        </div>
        <div className="plusButton" onClick={()=>{history.push("/form")}}>
            <i className="fas fa-plus-circle"></i>
        </div>
    </div>
)

export default withRouter(Header);
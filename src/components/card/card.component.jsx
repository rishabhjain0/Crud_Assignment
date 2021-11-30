import React from "react";
import CustomButton from "../custom-button/custom-button.component";

import "./card.styles.css";

const Card = ({name,email,phone}) => (
    <div className="col-lg-4 col-sm-6 col-12 colClass">
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text"><i className="fas fa-envelope-square"></i> {email}</p>
                <p className="card-text"><i className="fas fa-phone-square-alt"></i> +91{phone}</p>
                <div className="buttonClass">
                    <CustomButton text="Edit" color="btn-primary" />
                    <CustomButton text="Delete" color="btn-outline-danger" />
                </div>
            </div>
        </div>
    </div>
)
export default Card;
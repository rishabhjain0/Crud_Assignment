import React from "react";
import { withRouter } from "react-router";
import CustomButton from "../../components/custom-button/custom-button.component";
import FormInput from "../../components/form-input/form-input.component";


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            city: "",
            state: "",
            country: "",
            area: ""
        }
    }
    handleSubmit = () => {
        console.log("chaling apnu ko");
        const { name, email, phone, city, state, country, area } = this.state;
        fetch("http://localhost:4000/api/users",
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name, email: email, phone: phone, city: city, state: state, area: area, country: country })
            })
            .then(res => res.json())
            .then((res) => {
                this.setState({
                    name: '',
                    email: '',
                    phone: '',
                    city: '',
                    state: '',
                    country: '',
                    area: ''
                });
                if (res) {
                    console.log(res);
                }
            })
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value }, () => {
            console.log(this.state);
        });
    };

    render() {
        let { history } = this.props;
        return <div className="container formpage">
            <FormInput label="Name" type="text" name="name" placeholder="Enter your name" handleChange={this.handleChange} />
            <FormInput label="Email" type="email" name="email" placeholder="Enter your email" handleChange={this.handleChange} />
            <FormInput label="Phone" type="text" name="phone" placeholder="Enter your phone" handleChange={this.handleChange} />
            <FormInput label="City" type="text" name="city" placeholder="Enter your City" handleChange={this.handleChange} />
            <FormInput label="State" type="text" name="state" placeholder="Enter your State" handleChange={this.handleChange} />
            <FormInput label="Country" type="text" name="country" placeholder="Enter your Country" handleChange={this.handleChange} />
            <FormInput label="Area" type="text" name="area" placeholder="Enter your Area" handleChange={this.handleChange} />
            <CustomButton text="Submit" color="btn-primary" handleSubmit={this.handleSubmit} />
            <button className="btn btn-outline-danger ml-2" onClick={() => { history.push("/") }}> Cancel</button>
        </div>

    }
}

export default withRouter(Form);
import React from "react";
import Card from "../card/card.component";

import "./card-list.styles.css";

class CardList extends React.Component{
    constructor(){
        super();
        this.state = {
            contacts:[]
        }

    }
    componentDidMount() {
        fetch("http://localhost:4000/api/users")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({ contacts: data });    
            })
    }
    render(){
        return <div className="row rowClass">
            {
                this.state.contacts.map((contact)=><Card key={contact._id} name={contact.name} email = {contact.email} phone ={contact.phone}/>)
            }
           
        </div>
    }
  
}

export default CardList;
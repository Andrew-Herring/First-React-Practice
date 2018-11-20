import React, { Component } from "react"
import "./OwnerDetails.css"
import rebel from "./rebel.jpeg"


export default class OwnerDetail extends Component {
    render() {
        
        const owner = this.props.owners.find(a => a.id === parseInt(this.props.match.params.ownerId)) || {}

        return (
            <section className="owners list">
                <div key={owner.id} className="detailsCard">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={rebel} className="icon--rebel" alt="Owner Details" />
                            <p className="card-name">{owner.name}</p>
                        </h4>
                        <p className="card-title">{owner.about}</p>
                        <a href=" "
                            onClick={() => this.props.deleteOwner(owner.id)
                            .then(() => this.props.history.push("/owners"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}
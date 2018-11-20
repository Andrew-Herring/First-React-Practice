import React, { Component } from 'react'
import { Link } from "react-router-dom";
import rebel from "./rebel.jpeg"
import "./Owner.css"

export default class OwnerList extends Component {
  render () {
    return (
        <section className="owner list">
        {
            this.props.owners.map(owner =>
                <div key={owner.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={rebel} className="icon--owner" alt="owner pic" />
                            <p className="card-name">{owner.name}</p>
                            <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                            <a href=" "
                                onClick={() => this.props.deleteOwner(owner.id)}
                                className="card-link">Remove Owner</a>
                        </h5>
                    </div>
                </div>
            )
        }
        </section>
    )
}
}


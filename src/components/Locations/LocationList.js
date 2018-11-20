import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "./Location.css"

export default class LocationList extends Component {
  render () {
    return (
        <section className="locations list">
        {
            this.props.locations.map(location =>
                <div key={location.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{location.name}</h5>
                            <p className="card-address">{location.address}</p>
                            <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                            {/* <a href=" "
                                onClick={() => this.props.deleteOwner(location.id)}
                                className="card-link">Remove Location</a> */}
                    </div>
                </div>
            )
        }
        </section>
    )
}
}

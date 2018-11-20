import React, { Component } from "react"
import "./Location.css"


export default class LocationDetail extends Component {
    render() {
        
        const location = this.props.locations.find(a => a.id === parseInt(this.props.match.params.locationId)) || {}

        return (
            <section className="locations list">
                <div key={location.id} className="detailsCard">
                    <div className="card-body">
                        <h4 className="card-title">
                            <p className="card-name">{location.name}</p>
                        </h4>
                        <p className="card-title">{location.info}</p>
                        {/* <a href=" "
                            onClick={() => this.props.deleteLocation(location.id)
                            .then(() => this.props.history.push("/locations"))}
                            className="card-link">Remove Location</a> */}
                    </div>
                </div>
            </section>
        )
    }
}
import React, { Component } from "react"
import "./Animal.css"
import dogmeat from "./dogmeat.jpg"


export default class AnimalDetail extends Component {
    render() {
        
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId)) || {}

        return (
            <section className="animals list">
                <div key={animal.id} className="detailsCard">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={dogmeat} className="icon--dog" alt="Pet Details" />
                            <p className="card-name">{animal.name}</p>
                        </h4>
                        <p className="card-title">{animal.breed}</p>
                        <a href=" "
                            onClick={() => this.props.deleteAnimal(animal.id)
                            .then(() => this.props.history.push("/animals"))}
                            className="card-link">Adopt</a>
                    </div>
                </div>
            </section>
        )
    }
}
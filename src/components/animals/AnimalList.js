import React, { Component } from 'react'
import dog from "./DogIcon.png"
import "./Animal.css"

export default class AnimalList extends Component {
    render () {
        return (
            <section className="animals list">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={dog} className="icon--dog" alt="dog pic" />
                                <p className="card-name">{animal.name}</p>
                                <a href=" "
                                    onClick={() => this.props.deleteAnimal(animal.id)}
                                    className="card-link">Adopt</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}


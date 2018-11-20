import React, { Component } from 'react'
import { Link } from "react-router-dom";
import dogmeat from "./dogmeat.jpg"
import "./Animal.css"

export default class AnimalList extends Component {
    render () {
        return (
          <React.Fragment>
            <section className="animals list">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <h4 className="card-title">
                                <img src={dogmeat} className="icon--dog" alt="dog pic" />
                                <p className="card-name">{animal.name}</p></h4>
                                <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                                <a href=" "
                                    onClick={() => this.props.deleteAnimal(animal.id)}
                                    className="card-link">Adopt</a>
                            
                        </div>
                    </div>
                )
            }
            </section>
            <div className="animalButton">
                  <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/animals/new")}
                        }>Admit New Animal</button>
            </div>
           </React.Fragment>
        )
    }
}


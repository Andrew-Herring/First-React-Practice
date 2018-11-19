import React, { Component } from 'react'


export default class AnimalList extends Component {
    render() {
        return (
            <section className="animals list">
            <h2>Pets</h2>
            {
                this.props.animals.map(animal =>
                    <div key={animal.id}>
                        <li>{animal.name}</li>
                    </div>
                )
            }
            </section>
        )
    }
}


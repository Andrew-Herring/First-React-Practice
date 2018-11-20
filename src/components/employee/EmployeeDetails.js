import React, { Component } from "react"
import "./employee.css"
import peon from "./peon.jpg"


export default class EmployeeDetail extends Component {
    render() {
        
        const employee = this.props.employees.find(a => a.id === parseInt(this.props.match.params.employeeId)) || {}

        return (
            <section className="employees list">
                <div key={employee.id} className="detailsCard">
                    <div className="card-body">
                        <h4 className="card-title">
                            <img src={peon} className="icon--employee" alt="Peon Details" />
                            <p className="card-name">{employee.name}</p>
                        </h4>
                        <p className="card-title">{employee.details}</p>
                        <a href=" "
                            onClick={() => this.props.deleteAnimal(employee.id)
                            .then(() => this.props.history.push("/employees"))}
                            className="card-link">Fire Employee</a>
                    </div>
                </div>
            </section>
        )
    }
}
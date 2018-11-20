import React, { Component } from 'react'
import { Link } from "react-router-dom";
import peon from "./peon.jpg"
import "./employee.css"


export default class EmployeeList extends Component {
  render () {
    return (
        <section className="employees list">
        {
            this.props.employees.map(employee =>
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={peon} className="icon--employee" alt="peon pic" />
                            <p className="card-name">{employee.name}</p>
                            <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                            <a href=" "
                                onClick={() => this.props.deleteEmployee(employee.id)}
                                className="card-link">Fire Employee</a>
                        </h5>
                    </div>
                </div>
            )
        }
        </section>
    )
}
}
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import AnimalCard from "../animals/AnimalCard"
import peon from "./peon.jpg"
import "./employee.css"


export default class EmployeeList extends Component {
  render () {
      return (
          <section className="employees">
          {
              this.props.employees.map(employee =>
                  <div key={employee.id} className="card card--employee">
                      <div className="card-body">
                          <h5 className="card-title">
                              <img src={peon} className="icon--employee" alt="employee pic" />
                              {employee.name}
                          <a href=" "
                              onClick={() => this.props.deleteEmployee(employee.id)}
                              className="card-link">Delete</a>
                          </h5>

                          <h6 className="card-subtitle mb-2 text-muted">Caretaker For</h6>
                          <div className="animals--caretaker">
                          {
                              this.props.animals
                                  .filter(anml => anml.employeeId === employee.id)
                                  .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
                          }
                          </div>

                      </div>
                  </div>
              )
          }
          </section>
      )
  }
}





// export default class EmployeeList extends Component {
//   render () {
//     return (
//         <section className="employees list">
//         {
//             this.props.employees.map(employee =>
//                 <div key={employee.id} className="card">
//                     <div className="card-body">
//                         <h4 className="card-title">
//                             <img src={peon} className="icon--employee" alt="employee pic" />
//                             <p className="card-name">{employee.name}</p></h4>
//                             <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
//                             <a href=" "
//                                 onClick={() => this.props.deleteEmployee(employee.id)}
//                                 className="card-link">Fire Employee</a>
                        
//                     </div>
//                 </div>
//             )
//         }
//         </section>
//     )
// }
// }
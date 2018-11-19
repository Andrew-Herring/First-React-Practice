import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './Locations/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owners/OwnerList'


class ApplicationViews extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Gus" },
        { id: 2, name: "Finn" },
        { id: 3, name: "Sadie" },
        { id: 4, name: "Amos" },
        { id: 5, name: "Dooley" },
        { id: 6, name: "Kiwi" },
        { id: 7, name: "Olive" },
        { id: 8, name: "Daisy" }
    ]

    ownersFromAPI = [
      { id: 1, name: "Andy" },
      { id: 2, name: "Kevin" },
      { id: 3, name: "Lacey" },
      { id: 4, name: "Matt" },
      { id: 5, name: "Daniel" },
      { id: 6, name: "Brenden" },
      { id: 7, name: "Ousama" },
      { id: 8, name: "Richard" }
  ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        owners: this.ownersFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />    
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews
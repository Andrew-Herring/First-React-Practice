import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './Locations/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owners/OwnerList'
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import LocationManager from "../modules/LocationManager"
import OwnerManager from "../modules/OwnerManager"
import AnimalDetail from './animals/AnimalDetails'
import EmployeeDetail from './employee/EmployeeDetails'
import OwnerDetail from './owners/OwnerDetails'
import LocationDetail from './Locations/LocationDetails'
import AnimalForm from './animals/AnimalForm'

class ApplicationViews extends Component {
  state = {
    locations: [],
    employees: [],
    animals: [],
    owners: []
}

componentDidMount() {
  const newState = {}

  AnimalManager.getAll().then(allAnimals => {
      newState.animals = allAnimals
  })
  EmployeeManager.getAll().then(allEmployees => {
      newState.employees = allEmployees
    })
  LocationManager.getAll().then(allLocations => {
      newState.locations = allLocations
    })
  OwnerManager.getAll().then(allOwners => {
    newState.owners = allOwners
  })
  .then(() => this.setState(newState))
}

deleteAnimal = id => {
  return fetch(`http://localhost:5002/animals/${id}`, {
      method: "DELETE"
  })
  .then(e => e.json())
  .then(() => fetch(`http://localhost:5002/animals`))
  .then(e => e.json())
  .then(animals => this.setState({
      animals: animals
  })
)
}

deleteEmployee = id => {
  return fetch(`http://localhost:5002/employees/${id}`, {
      method: "DELETE"
  })
  .then(e => e.json())
  .then(() => fetch(`http://localhost:5002/employees`))
  .then(e => e.json())
  .then(employees => this.setState({
      employees: employees
  })
)
}

deleteOwner = id => {
  return fetch(`http://localhost:5002/owners/${id}`, {
      method: "DELETE"
  })
  .then(e => e.json())
  .then(() => fetch(`http://localhost:5002/owners`))
  .then(e => e.json())
  .then(owners => this.setState({
      owners: owners
  })
)
}
addAnimal = (animal) => AnimalManager.post(animal)
  .then(() => AnimalManager.getAll())
  .then(animals => this.setState({
      animals: animals
    })
  )


    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList 
                    locations={this.state.locations} />
                }} />
                <Route path="/locations/:locationId(\d+)" render={(props) => {
                    return <LocationDetail {...props} 
                    deleteLocation={this.deleteLocation} 
                    locations={this.state.locations} />
                }} />



                <Route exact path="/animals" render={(props) => {
                        return <AnimalList {...props}
                       deleteAnimal={this.deleteAnimal}
                       animals={this.state.animals} />
                }} />
                <Route path="/animals/new" render={(props) => {
                       return <AnimalForm {...props}
                       addAnimal={this.addAnimal}
                       employees={this.state.employees} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                      return <AnimalDetail {...props} 
                      deleteAnimal={this.deleteAnimal} 
                      animals={this.state.animals} />
                }} />



                <Route exact path="/employees" render={(props) => {
                     return <EmployeeList 
                     employees={this.state.employees} />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} 
                    deleteEmployee={this.deleteEmployee} 
                    employees={this.state.employees} />
                }} />



                <Route exact path="/owners" render={(props) => {
                     return <OwnerList 
                     owners={this.state.owners} />
                }} />
                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props} 
                    deleteOwner={this.deleteOwner} 
                    owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
  }

export default ApplicationViews
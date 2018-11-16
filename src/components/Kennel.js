import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationList from "./Locations/LocationList"

export default class Kennel extends Component {
    render() {
        return (
            <div>
                <h2>Woof</h2>
                <LocationList />
                <EmployeeList />
            </div>
        );
    }
}
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ViewEmployee() {
    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        emailId: ""
    })
    const { id } = useParams();
    useEffect(() => {
        loadEmployees()
    }, [])
    const loadEmployees = async () => {
        const result = await axios.get(`http://localhost:8080/api/v1/employees/${id}`)
        setEmployee(result.data)
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>View Employee</h2>
                    <div className='card'>
                        <div className='card-header'>
                            View Employee Id :{employee.id}
                            <ul className='list-group list-group-flush' >
                                <li className='list-group-item'>
                                    <b>First Name:</b>
                                    {employee.firstName}
                                </li>
                                <li className='list-group-item'>
                                    <b>Last Name:</b>
                                    {employee.lastName}
                                </li>
                                <li className='list-group-item'>
                                    <b>Email:</b>
                                    {employee.emailId}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Link className='btn btn-dark mx-2 ' to={"/"}>Back</Link>
                </div>
            </div>
        </div>
    )
}

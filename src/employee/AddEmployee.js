import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddEmployee() {
    let navigate = useNavigate()
    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        emailId: "",
    })
    const { firstName, lastName, emailId } = employee
    const onInputChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value })
    }
    const onSubmit = async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/api/v1/employees",employee);
        navigate("/");
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>New Employee</h2>
                    <form onSubmit={(e)=> onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='Name' className='form-label'>
                                First Name
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Your First Name'
                                name='firstName'
                                value={firstName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Name' className='form-label'>
                                Last Name
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Your Last Name'
                                name='lastName'
                                value={lastName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Email' className='form-label'>
                                Email
                            </label>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Your Email'
                                name='emailId'
                                value={emailId}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type='submit' className='btn btn-outline-primary'> Confirm</button>
                        <Link type='submit' className='btn btn-outline-dark mx-2' to="/"> Back</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

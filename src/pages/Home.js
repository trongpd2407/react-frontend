import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
export default function Home() {
    const [employee, setEmployee] = useState([])
    const{id} = useParams()
    useEffect(() => {
        loadEmployees();

    }, []);
    const loadEmployees = async () => {
        const result = await axios.get("http://localhost:8080/api/v1/employees");
        setEmployee(result.data);
    }
    const deleteEmployee = async(id)=>{
        await axios.delete(`http://localhost:8080/api/v1/employees/${id}`)
        loadEmployees()
    }
    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employee.map((employee) => (
                                <tr>
                                    <th scope="row" key={employee.id}>{employee.id}</th>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                        <Link className='btn btn-primary mx-2'
                                        to = {`/view-employee/${employee.id}`}>View</Link>
                                        <Link className='btn btn-outline-primary mx-2'
                                        to ={`/edit-employee/${employee.id}`}>Edit</Link>
                                        <button
                                            className='btn btn-danger mx-2'
                                            onClick={()=>deleteEmployee(employee.id)}
                                        >Delete</button>
                                    </td>
                                </tr>

                            ))

                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}

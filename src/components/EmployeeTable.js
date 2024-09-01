import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/UserService'; // Correct path

const EmployeeTable = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUsers()
            .then(response => {
                setEmployees(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Employee List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Branch name</th>
                        <th>Experience</th>
                        {/* Add more columns as needed */}
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.lectid}>
                            <td>{employee.lectid}</td>
                            <td>{employee.lectName}</td>
                            <td>{employee.lectBranch}</td>
                            <td>{employee.lectExperience}</td>
                           <td>{new Date(employee.lectHireDate).toISOString().split('T')[0]}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeTable;

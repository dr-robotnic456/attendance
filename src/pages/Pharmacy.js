import Layout from '@/components/Layout'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';

const Pharmacy = () => {
    const [data, setData] = useState([]); // State to store the fetched data

    const heads = ['id', 'staff_name', 'department', 'address','telephone','fingerprint ID', 'attendance',  'actions' ];

    // Function to fetch employees from the API
    const fetchEmployees = async () => {
        try {
            const response = await axios.get('/api/employee?department=pharmacy'); 
            setData(response.data); // Update the state with the fetched data
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchEmployees();
    }, []);
    return (
        <Layout>
            <div className='w-full py-10 px-10 bg-[#f1f1f1] h-screen'>
                <div className='flex w-full items-center justify-between mb-10'>
                <Link href={'Signup'}><button className="bg-[#fecb06] items-center py-1 px-2">Add New Staff</button></Link>
                    <div>
                        <input type="search" name="search" id="search" className='py-1 px-3 items-center rounded-lg' placeholder='Search' />
                    </div>
                </div>

                <div>
                    <table className='table-auto w-full'>
                        <thead>
                            <tr>
                                {heads.map((head, index) => (
                                    <th key={index}
                                        className="px-4 py-2 bg-[#119D56] text-white font-semibold capitalize"
                                    >{head}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className='max-h-[500px] overflow-y-auto text-black text-center'>
                            {data.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.employeeId}</td>
                                    <td>{row.name}</td>
                                    <td>{row.department}</td>
                                    <td>{row.address}</td>
                                    <td>{row.telephone}</td>
                                    <td>{row.fingerprint}</td>
                                    <td>{row.attendance}</td>
                                    <td>Actions</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
  )
}

export default Pharmacy
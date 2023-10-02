import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const Signup = () => {
    const [user, setUser] = useState({
        employeeId: "",
        name: "",
        department: "",
        fingerprint: "",
        address: "",
        telephone: "",
        // password: "",
        email: ""
    })

    const [show, setShow] = useState(false)

    const handleInputChange = e => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }

    const addUser = async () => {
        try {
            const res = await axios.post("/api/employee", user);
            if (!user) {
                toast.error(res.data.message)
            }
            toast.success("Employee successfully created")
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        addUser();
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <ToastContainer />
            <div className='flex w-[35%] rounded-lg' style={{ backgroundImage: "url(/images/ghs.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className='w-full bg-opacity-90 bg-white py-2'>
                    <div className='w-full flex items-center space-x-5 text-[#000] border-b-2 border-[#119d56]'>
                        <div className='relative w-10 h-10'>
                            <Image src={"/images/ghs.jpg"} fill alt='logo'/>
                        </div>
                        <div className='text-xl font-bold'>
                            <h1>HMS Registration Form</h1>
                        </div>
                    </div>
                    <div className='w-full'>
                        <form className='w-full h-[90%] items-center flex flex-col space-y-5 py-5 text-[#000]' onSubmit={handleSubmit}>
                            <div className='shadow-lg w-[70%]'>
                                <input type="id" name="employeeId" id="id" value={user.employeeId} placeholder='ID' className='w-full py-2 px-3' onChange={handleInputChange} />
                            </div>

                            <div className='shadow-lg w-[70%]'>
                                <input type="text" name="name" id="name" value={user.name} placeholder='Full Name' className='w-full py-2 px-3' onChange={handleInputChange} />
                            </div>

                            <div className='shadow-lg w-[70%]'>
                                <input type="email" name="email" id="email" value={user.email} placeholder='Email' className='w-full py-2 px-3' onChange={handleInputChange} />
                            </div>
                            <div className='shadow-lg w-[70%]'>
                                {/* <input type="text" name="department" id="department" value={user.department} placeholder='Department' className='w-full py-2 px-3' onChange={handleInputChange} /> */}
                                <select name='department' className='w-full py-2 px-3' value={user.department} onChange={handleInputChange}>
                                    <option value="" className='text-gray-300'>Please select a department</option>
                                    <option value="accident">Accident Ward</option>
                                    <option value="maternity">Maternity Ward</option>
                                    <option value="medical">Medical Ward</option>
                                    <option value="opd">OPD</option>
                                    <option value="pediatric">Pediatric Ward</option>
                                    <option value="pharmacy">Pharmacy</option>
                                    <option value="surgical">Surgical Ward</option>
                                    {/* <option value="accident">Accident Ward</option> */}
                                </select>
                            </div>
                            <div className='shadow-lg w-[70%]'>
                                <input type="text" name="fingerprint" id="fingerprint" value={user.fingerprint} placeholder='Fingerprint' className='w-full py-2 px-3' onChange={handleInputChange} />
                            </div>
                            <div className='shadow-lg w-[70%]'>
                                <input type="text" name="address" id="address" value={user.address} placeholder='Address' className='w-full py-2 px-3' onChange={handleInputChange} />
                            </div>
                            <div className='shadow-lg w-[70%]'>
                                <input type="text" name="telephone" id="telephone" value={user.telephone} placeholder='Telephone' className='w-full py-2 px-3' onChange={handleInputChange} />
                            </div>

                            {/* <div className='flex items-center w-[70%] justify-end text-[#6b6e72] space-x-5'>
                                <input type="checkbox" name="show" id="show" onClick={() => setShow(!show)} />
                                <label htmlFor="show">Show Password</label>
                            </div> */}

                            <div className='w-[70%]'>
                                <button type="submit" className='text-center w-full py-2 bg-[#119D56] font-semibold text-[#fff]'>Register</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup
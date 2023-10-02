import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [user, setUser] = useState({
        email:"",
        password:""
    })

    const router = useRouter()
    const fetchUser = async() => {
        const res = await axios.post("/api/login");
        if(res.status === 200){
            toast.success("Successfully logged in")
            router.push("/Dashboard")
        }else{
            toast.error("Invalid credentials")
        }
    }

    const handleLogin = e => {
        e.preventDefault();

        fetchUser();
    }

    const handleInputChange = e => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]:value
        }))
    }
    
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex w-[50%] h-[60%] rounded-lg bg-[#f1f1f1]'>
                <div className='flex w-full justify-between'>
                    <div className='w-full h-full items-center flex justify-center'>
                        <div className='relative flex items-center w-[80%] h-[80%]'>
                            <Image src="/images/ghs.jpg" fill />
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='w-full h-full'>
                            <form className='w-full h-[90%] text-black' onSubmit={handleLogin}>
                                <div className='shadow-lg w-[90%] my-10'>
                                    <input type="email" name="email" id="email" placeholder='Email' className='w-full py-3 px-3' onChange={handleInputChange}/>
                                </div>
                                <div className='shadow-lg w-[90%] my-10'>
                                    <input type="password" name="password" id="password" placeholder='Password' className='w-full py-3 px-3' onChange={handleInputChange}/>
                                </div>

                                <div className='flex justify-between w-[90%] py-5 text-[#6b6e72]'>
                                <p>Need Help ?</p>
                                <p>Forgotten password</p>
                                </div>

                                <div className='w-[90%]'>
                                    <button type="submit" className='text-center text-white w-full py-3 bg-[#119D56]'>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
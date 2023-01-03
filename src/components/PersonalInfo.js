import React from 'react';
import { useState } from 'react';

export default function PersonalInfo() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",

    });

    function handleChange(event) {
        setFormData(prevState => {
            return {
                ...prevState,
                [event.target.name] : event.target.value,
            }
        })
    }

    
    return (
        <div className='grid h-100 border border-solid border-yellow-200  border border-solid border-black'>
            
            <div className='bg-white p-4 -mt-5 w-11/12 m-auto rounded'>
            <h1 className='text-3xl text-blue-800 font-bold'>Personal Info</h1>
            <p className='text-slate-300'>Please provide your name, email address, and phone number.</p>

            <form className='pt-8 grid'>
                <label className='pb-1 text-blue-800'>Name</label>
                <input 
                type="text"
                placeholder='e.g. Stephen King'
                name="name"
                onChange={handleChange}
                value={formData.name}
                className="border-2 border-solid rounded py-1 pl-3 mb-4"
                />

                <label className='pb-1 text-blue-800'>Email Address</label>
                <input 
                type="email"
                placeholder='e.g. stephenking@lorem.com'
                name="email"
                onChange={handleChange}
                value={formData.email}
                className="border-2 border-solid rounded py-1 pl-3 mb-4"
                />

                <label className='pb-1 text-blue-800'>Phone Number</label>
                <input 
                type="text"
                placeholder='e.g. +1 234 567 890'
                name="phone"
                onChange={handleChange}
                value={formData.phone}
                className="border-2 border-solid rounded py-1 pl-3 mb-3"
                />
                
            </form>

            
            </div>
           
           <div className='bg-white p-4 absolute inset-x-0 bottom-0'>
            <div className='w-10/9 grid m-auto'>
            <button className='bg-blue-900 text-white py-2 px-6 rounded justify-self-end'>Next Step</button>
            </div>
           </div>
        </div>
    )
}
import React from "react";
import { useState } from "react";
import iconarcade from '../assets/images/iconarcade.svg';
import iconadvanced from '../assets/images/iconadvanced.svg';


export default function SelectYourPlan() {

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
        <div className='grid h-100'>
            
        <div className='bg-white p-4 -mt-5 w-11/12 m-auto rounded'>
        <h1 className='text-3xl text-blue-800 font-bold'>Select your plan</h1>
        <p className='text-slate-300'>You have the option of monthly or yearly billing.</p>

        <div className="p-2">

            <div className="flex py-4 px-2 gap-3 mt-4 border border-solid border-gray rounded">
                <div>
                    <img src={iconarcade}></img>
                </div>
                <div className="grid justify-items-center">
                    <p className="text-blue-800 font-bold text-left">Arcade</p>
                    <small className='text-slate-300 text-left'>$9/mo</small>
                </div>
            </div>
        </div>

        <div className="p-2">

<div className="flex py-4 px-2 gap-3 mt-4 border border-solid border-gray rounded">
    <div>
        <img src={iconadvanced}></img>
    </div>
    <div className="grid justify-items-center">
        <p className="text-blue-800 font-bold text-left">Advanced</p>
        <small className='text-slate-300 text-left'>$12/mo</small>
    </div>
</div>
</div>

        
        </div>
       
       <div className='bg-white absolute inset-x-0 bottom-0 p-4 w-full'>
        <div className='w-10/9 grid m-auto'>
        <button className='bg-blue-900 text-white py-2 px-6 rounded justify-self-end'>Next Step</button>
        </div>
       </div>
    </div>
    )
}
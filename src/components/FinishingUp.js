import React from "react";
import { useState } from "react";



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
            
        <div className='bg-white p-4 -mt-4 w-11/12 m-auto rounded'>
        <h1 className='text-3xl text-blue-800 font-bold'>Finishing up</h1>
        <p className='text-slate-300'>Double-check everything looks OK before confirming.</p>

        <div className="p-3 bg-slate-50 mt-4">
        <div className="flex justify-between px-2">
            <div className="grid">
                <p>Arcade(Monthly)</p>
                <small>Change</small>
            </div>
            <div>
                <small>$9/mo</small>
            </div>
        </div>

        <hr className="mx-4 mt-2"></hr>

           <div className="flex justify-between p-2">
            <div className="grid">
                <small>Online Service</small>
            </div>
            <div>
                <small>$1/mo</small>
            </div>
        </div>

        <div className="flex justify-between px-2">
            <div className="grid">
                <small>Larger storage</small>
            </div>
            <div>
                <small>$2/mo</small>
            </div>
        </div>
   


        </div>
        
        <div className="p-3 flex justify-between">
            <p className="px-1">Total (per month)</p>
            <small>$12/mo</small>
        </div>
        
        </div>
       
       <div className='bg-white absolute inset-x-0 bottom-0 p-4 w-full'>
        <div className='w-10/9 flex justify-between m-auto'>
            <span className="text-gray-300 self-center">Go Back</span>
        <button className='bg-indigo-500 text-white py-2 px-6 rounded justify-self-end'>Confirm</button>
        </div>
       </div>
    </div>
    )
}
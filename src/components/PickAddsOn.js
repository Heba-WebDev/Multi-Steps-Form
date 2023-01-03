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
        <h1 className='text-3xl text-blue-800 font-bold'>Pick add-ons</h1>
        <p className='text-slate-300'>Add-ons help enhance your gaming experience.</p>

        <div className="p-2">
        <div className="flex py-4 px-2 gap-3 mt-1 border border-solid border-gray rounded">
   
   <div className="flex justify-items-center items-center gap-3">
          <div>
          <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
           rounded focus:ring-blue-500 dark:focus:ring-blue-600
            dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700
             dark:border-gray-600" />
          </div>
           <div className="grid items-center">
            <p className="text-blue-800 font-bold">Online service</p>
            <small className='text-slate-300 -mt-1'>Access to multiplayer games</small>
           </div>
   
           <div>
               <small className="text-indigo-400">+$1/mo</small>
           </div>
   
       </div>
   </div>


   <div className="flex py-4 px-2 gap-3 mt-1 border border-solid border-gray rounded">
   
<div className="flex justify-items-center items-center gap-3">
       <div>
       <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
        rounded focus:ring-blue-500 dark:focus:ring-blue-600
         dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700
          dark:border-gray-600" />
       </div>
        <div className="grid items-center">
         <p className="text-blue-800 font-bold">Larger storage</p>
         <small className='text-slate-300 -mt-1'>Extra 1TB of cloud save</small>
        </div>

        <div>
            <small className="text-indigo-400">+$2/mo</small>
        </div>

    </div>
</div>


<div className="flex py-4 px-2 gap-3 mt-1 border border-solid border-gray rounded">
   
<div className="flex justify-items-center items-center gap-3">
       <div>
       <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 
        rounded focus:ring-blue-500 dark:focus:ring-blue-600
         dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700
          dark:border-gray-600" />
       </div>
        <div className="grid items-center">
         <p className="text-blue-800 font-bold">Customizable Profile</p>
         <small className='text-slate-300 -mt-1'>Custom theme on your profile</small>
        </div>

        <div>
            <small className="text-indigo-400">+$2/mo</small>
        </div>

    </div>
</div>


        </div>

        
        </div>
       
       <div className='bg-white absolute inset-x-0 bottom-0 p-4 w-full'>
        <div className='w-10/9 flex justify-between m-auto'>
            <span className="text-gray-300 self-center">Go Back</span>
        <button className='bg-blue-900 text-white py-2 px-6 rounded justify-self-end'>Next Step</button>
        </div>
       </div>
    </div>
    )
}
import React from "react";
import { useState } from "react";
import iconarcade from '../assets/images/iconarcade.svg';
import iconadvanced from '../assets/images/iconadvanced.svg';
import iconpro from '../assets/images/iconpro.svg'


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
        <h1 className='text-3xl text-blue-800 font-bold'>Select your plan</h1>
        <p className='text-slate-300'>You have the option of monthly or yearly billing.</p>

        <div className="p-2">

            <div className="flex py-4 px-2 gap-3 mt-1 border border-solid border-gray rounded">
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

        <div className="flex py-4 px-2 gap-3 mt-1 border border-solid border-gray rounded">
           <div>
          <img src={iconadvanced}></img>
          </div>
          <div className="grid justify-items-center">
         <p className="text-blue-800 font-bold text-left">Advanced</p>
         <small className='text-slate-300 text-left'>$12/mo</small>
           </div>
           </div>
      </div>


        <div className="p-2">

          <div className="flex py-4 px-2 gap-3 mt-1 border border-solid border-gray rounded">
             <div>
             <img src={iconpro}></img>
             </div>
             <div className="grid justify-items-center">
                <p className="text-blue-800 font-bold text-left">Pro</p>
                <small className='text-slate-300 text-left'>$15/mo</small>
             </div>
         </div>

         <div className="bg-slate-100 flex justify-center content-center py-2 px-2 gap-3 mt-4 rounded">
        <span class="text-sm font-medium text-gray-900 dark:text-gray-300 self-center">Monthly</span>
        <label class="relative inline-flex items-center cursor-pointer">
         <input type="checkbox" value="" class="sr-only peer" />
         <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 
         peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 
         rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full 
         peer-checked:after:border-white after:content-[''] 
         after:absolute after:top-[2px] after:left-[2px] after:bg-white
          after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
           dark:border-gray-600 "></div>

         </label>
         <span class="text-sm font-medium text-gray-900 dark:text-gray-300 self-center">Yearly</span>
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
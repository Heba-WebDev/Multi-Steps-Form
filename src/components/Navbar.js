import React from "react";


export default function Navbar(props) {

    return (
        <nav className="bg-navbar-mobile py-10 px-10">
           
        <div className="flex gap-3 justify-center">


        <button  className={ props.steps[1] ? 'bg-teal-50 w-3 h-3 rounded-full p-3 flex justify-center items-center border-solid border border-white ext-blue-800' : '' + "w-3 h-3 rounded-full p-3 flex justify-center items-center border-solid border border-white text-white"}> <small>1</small></button>
        
            <button className="w-3 h-3 rounded-full p-3 flex 
            justify-center items-center border-solid border 
             border-white text-white"> <small>2</small></button>    
             
             <button className="w-3 h-3 rounded-full p-3 flex 
            justify-center items-center border-solid border
             border-white text-white"> <small>3</small></button>    

            <button className="w-3 h-3 rounded-full p-3 flex 
            justify-center items-center border-solid border
             border-white text-white"> <small>4</small></button>    
        </div>   
            
        
         </nav>
    )
}
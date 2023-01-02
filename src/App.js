import SelectYourPlan from "./components/SelectYourPlan";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

function App() {

  let [steps, setSteps] = useState({
    '1': true,
    '2': false,
    '3': false,
    '4': false,
  });
  return (
    <div className="w-full h-screen bg-slate-100 relative">
      <Navbar steps={steps} setSteps={setSteps}/>
    <SelectYourPlan />
    </div>
  );
}

export default App;

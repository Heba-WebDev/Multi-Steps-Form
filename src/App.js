import FinishingUp from './components/FinishingUp'
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
    <div className="w-full bg-slate-100 h-full ">
      <Navbar steps={steps} setSteps={setSteps}/>
      <FinishingUp />
    </div>
  );
}

export default App;

import React, {useState} from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Step1 from "./Stepper/Step1";
import Step2 from "./Stepper/Step2";
import Step3 from "./Stepper/Step3";

export default function App() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    age: "",
    gender:"",
    phone:""
  })


  // handling form input data by taking onchange value and updating our previous form data state
  const handleInputData = input => e => {
    // input value from the form
    const {value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="step/1"/> } />
          <Route  path="step/1" element={<Step1 handleFormData={handleInputData} values={formData}/>} />
          <Route  path="step/2" element={<Step2 handleFormData={handleInputData} values={formData}/>} />
          <Route  path="step/3" element={<Step3 handleFormData={handleInputData} values={formData}/>} />
        </Routes>
      </BrowserRouter>
  );
}

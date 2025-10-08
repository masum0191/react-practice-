
import React, { useState } from 'react';

const App = () => {
 let [FormObject ,SetFormObject] = useState({Fname:"",Lname:"",City:"",Gender:""})
 const inputChange=(PropertyName,value)=>{
    SetFormObject(preObject=>({
      ...preObject,
      [PropertyName]:value}))
    
  }
  const FormSubmit=(e)=>{
    e.preventDefault();
    alert(JSON.stringify(FormObject));
    console.log(FormObject);
  }

  return (
    <div className='container'>
      <h1>Form</h1>
     <form onSubmit={FormSubmit}>
      <input onChange={(e)=>{inputChange("Fname",e.target.value)}} value={FormObject.Fname} type="text" placeholder='first name'/> <br />
      <input onChange={(e)=>{inputChange("Lname",e.target.value)}} value={FormObject.Lname}  type="text" placeholder='last name'/> <br />
      <select onChange={(e)=>{inputChange("City",e.target.value)}}
      value={FormObject.City} >
        <option value="">Select City</option>
        <option value="Dhaka">Dhaka</option>
        <option value="Rajshahi">Rajshahi</option>
       </select><br />
      <input onChange={()=>{inputChange("Gender",'male')}}  checked={FormObject.Gender==="male"} type="radio" name='gender' /> Male
      <input onChange={()=>{inputChange("Gender",'female')}} checked={FormObject.Gender==="female"} type="radio" name='gender' /> Female <br />
      <button type='submit'>submit</button>
     </form>
    </div>
  );
};

export default App;

  



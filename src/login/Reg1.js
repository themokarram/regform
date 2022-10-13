import React, { useState,useEffect } from 'react'

const Reg1 = () => {
   const data= {name:"",email:"",password:""}
  const[inputData,setInputData]= useState (data)
  const[flag,setFlag]=useState(false)
  useEffect(() => {
    console.log("registered")
  }, [flag])
  

   function handleData (e) {
   setInputData({...inputData, [e.target.name]:e.target.value});
   console.log(inputData)
   }
   function handleSubmit(e){
    e.preventDefault()
    if (!inputData.name|| !inputData.email|| !inputData.password){
        alert("All feilds are mandetory")
    } else{
        setFlag(true)
    }

   }

  return (
    <>
    <pre>{(flag)? <h2> Hello {inputData.name},You've registered Successsfully</h2>:""}</pre>
    <form action="" onSubmit={handleSubmit}>
 <h1>Registeration Form</h1>
 <div>
 <input type="text" name='name'placeholder='Add your name here' 
  value={inputData.name} onChange={handleData} />

 </div>
 <div>
 <input type="text" name='email'placeholder='Add your email here'
  value={inputData.email} onChange={handleData} />

 </div>
 <div>
 <input type="text" name='password'placeholder='Add your password here'
  value={inputData.password} onChange={handleData} />

 </div>
 <div>
 <button>Submit</button>

 </div>

    </form>
    
    </>
  )
}

export default Reg1
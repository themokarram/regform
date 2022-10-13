import React, { useEffect, useState } from 'react'

const Reg = () => {
 const data={name:"",number:"",password:""}
 const [inputData,setInputData]=useState (data)
 const [flag,setFlag] =useState (false)
 useEffect(()=>{
  console.log("registered")
 }, [flag])
  function handleData (e) {
    setInputData({...inputData,[e.target.name]:e.target.value})
    console.log(inputData)
  }
  function handleSubmit (e){
    e.preventDefault();
    if (!inputData.name || !inputData.number || !inputData.password) {
    alert("All feilds are mandetory") }
    else {
      setFlag(true)
    }

  }

  return (
    <>
    <pre>{(flag)? <h2> Hello {inputData.name},You've registered successfully.</h2> :""}</pre>
    <form action="" onSubmit={handleSubmit}>
  <div>
 <h1>Registration form</h1>
  </div>
  <div>
    <input type="text" placeholder='Enter your Name' name='name' value={inputData.name} onChange={handleData}/>
  </div>
  <div>
    <input type="text" placeholder='Enter your mobile Number' name='number'value={inputData.number} onChange={handleData} />
  </div>
  <div>
    <input type="text" placeholder='Enter your password' name='password'value={inputData.password} onChange={handleData}/>
  </div>
  <div>
    <button name='submit'>Submit</button>
  </div>
    </form>
    </>
  )
}

export default Reg
import React, { useState, useEffect } from 'react'

const Reg2 = () => {
    const data = { name: "", email: "", password: "" }
    const [inputData, setInputData] = useState(data)
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        console.log("registered")
    }, [flag])

    const handleData =(e)=> {

        setInputData({ ...inputData, [e.target.name]: e.target.value })
        console.log(inputData)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (!inputData.name || !inputData.email || !inputData.password) {
            alert("All feilds are mandetory")

        } else {
            setFlag(true)
        }

    }

    return (
        <>
            <pre> {(flag) ? <h1>Hello {inputData.name},You've registered Successfully</h1> : ""}</pre>
            <form action="" className='container' onSubmit={handleSubmit}>

                <h1>Registration form</h1>
                <div>
                    <h1>Name: <input type="text" name='name' placeholder='Add your name'
                        value={inputData.name} onChange={handleData} /> </h1>
                </div>
                <div>
                    <h1>Email: <input type="email" name='email' placeholder='Add your email'
                        value={inputData.email} onChange={handleData} /></h1>
                </div>
                <div>
                    <h1> Password <input type="password" name='password' placeholder='Add your password'
                        value={inputData.password} onChange={handleData} /></h1>
                </div> <br /><br />
                <div>
                    <button>Submit</button>
                </div>

            </form>
        </>
    )
}

export default Reg2
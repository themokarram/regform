import React from 'react'

const Reg3 = () => {
  return (
    <div>
        <h1>Registration form</h1>
        <form action="">

            <div>
            <input type="text" name="name" placeholder='Enter your name' />
            </div>
            <div>
            <input type="date" name="date" placeholder='Enter your Date of Birth' />
            </div><br /> <br />
            <div>
            <input type="radio" name="gender" value={Male} />
            <input type="radio" name='gender' value={Female} />
            
            </div>
            <div>
            <input type="email" name="email" placeholder='Enter your email' />
            </div>
            <div>
            <input type="password" name="password" placeholder='Enter your password' />
            </div><br />
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Reg3
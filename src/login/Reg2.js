import { useFormik } from "formik"
import { Formik } from "formik"

const initialValues={
    name:"",
    email:"",
    password:"",
    confirm_password:"",
}
const Reg2 = () => {
    
  const {values,handleBlur,handleChange,handleSubmit,errors,touched}=useFormik({
    initialValues,
    onSubmit:(values)=>{
        console.log(values);
    }

})

    return (
        <>
            
            <form action="" className='container' onSubmit={handleSubmit}>

                <h1>Registration form</h1>
                <div>
                    <input type="text" name='name' placeholder='Add your name'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    />
                </div>
                <div>
                    <input type="email" name='email' placeholder='Add your email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                </div>
                <div>
                    <input type="password" name='password' placeholder='Add your password'
                     value={values.password}
                     onChange={handleChange}
                     onBlur={handleBlur}
                    />
                </div>
                <div>
                    <input type="password" name='confirm_password' placeholder='confirm your password'
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur} />
                </div> <br /><br />
                <div>
                    <button>Submit</button>
                </div>

            </form>
        </>
    )
}

export default Reg2
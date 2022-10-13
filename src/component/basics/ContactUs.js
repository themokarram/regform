import React from 'react'

const ContactUs = ({contactus}) => {
  return (
<>

   <form action="">

Name: <input type="text" name="name"> </input> <br></br>
Mobile no: <input type="mobileNumber" name="mobileno"></input> <br></br>
Email Id <input type="email" name="emailid"></input> <br></br><br></br><br></br>
<button name="submit">Submit</button>
   </form>

   </>
  )
};

export default ContactUs
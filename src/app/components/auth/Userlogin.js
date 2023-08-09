import React, {auth} from 'react'
import{Formik,Form, Field , ErrorMessage } from "formik";
import * as  yup from "yup";
import "../auth/Login.css";


const Userlogin = () => {
    const defaultValue = {
        name: "",
        email: "",
        password: "",
      };
    
      // validation schema  for formik
    
      const validationSchema = yup.object().shape({
        name: yup.string().required("please enter name"),
        email: yup.string().required().email("please enter your email"),
        password: yup.string().required("please enter your password"),
      });
    
      // 3rd after handle submit validation
    
      const handleSubmit = (value) => {
        console.log("Value: ", value);
      };
      return (
        <>
         <div className='hp'>
            <h1>Welcome</h1>
             <p>Lorem ipsum dolor sit amet, consectetur 
             <br></br>adipiscing elit.</p>
             </div>
             
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQswhCJgvPeC4rwTSUuGFVgOxwK3lsDa063kwDpPbdayH1gC-Z" className='demo'
            ></img> 
     
     
     <div className='frm'>
            
         <Formik 
         initialValues={defaultValue}
         validationSchema={validationSchema}
         onSubmit={handleSubmit}>
           <Form>
           
             
           
            
             <img src ="https://us.v-cdn.net/6030983/uploads/3G2OU8DAYBBU/member-of-the-month-250x250.png" className='star'></img>
             
             <h2 className='h'>Login</h2>
               <p className='p'> Hello! Please Enter Your Details for Login</p>
               <div className="col-md-10 mt-6" style={{marginLeft:"35px"}}>
                <Field
                type="text"
                name="email"
                placeholder= " Email"
                className= "form-control"
                />
                <p className="text-danger">
                    <ErrorMessage name="email"/>
                </p>
            </div>
            
            <div className="col-md-10 mt-6"style={{marginLeft:"35px"}}>
                <Field
                type="password"
                name="password"
                placeholder= "Password"
                className= "form-control"
                />
                <p className="text-danger">
                    <ErrorMessage name="password"/>
                </p>
            </div>
            <p className='pa' > Forget password ?</p>
            <input type="submit" value="Login"></input>
                <hr className='hr'></hr>
                <p className='p'>I don't have an account on Review & Rate </p>
                <h3 className='h3' style={{fontSize:"15px"}}><strong> Register Now </strong></h3>
                
           
    
            
         </Form>
         </Formik>
         </div>
        </>
      );
}

export default Userlogin
import React from 'react'
import{Formik,Form, Field , ErrorMessage } from  "formik";
import * as  yup from "yup" ;
import "./Login.css";
// import desktop from "../src/app/components/asset/images-removebg-preview (1).png"
import star from "../src/app/components/asset/IMG-20230616-WA0003.jpg"
  




const UserLogin = () => {
  //intial schema of formik
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
         
        <img src="https://www.tekdone.com/Startup.svg" className='demo'
        ></img> 
 
 
 <div className='frm'>
        
     <Formik 
     initialValues={defaultValue}
     validationSchema={validationSchema}
     onSubmit={handleSubmit}>
       <Form>
       
         
       
        
         <img src ={star}  className='star'></img>
         
         <h2 className='h'>Login</h2>
           <p className='p'> Hello! Please Enter Your Details for Login</p>
           <div className="col-md-10 mt-6" style={{marginLeft:"40px",marginTop:"50px"}}>
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
        
        <div className="col-md-10 mt-6"style={{marginLeft:"40px"}}>
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
        <p className='pa' ><b> Forget password ?</b></p>
        <input type="submit" value="Login"></input>
            <hr className='hr'></hr>
            <p className='p'>I don't have an account on Review & Rate </p>
            <h3 className='h3' style={{fontSize:"15px"}}><strong> Register Now </strong></h3>
            
       

        
     </Form>
     </Formik>
     </div>
    </>
  );
};

export default UserLogin;
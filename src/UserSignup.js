import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "./Signup.css";
import { Link, Outlet } from "react-router-dom";
import UserLogin from "./UserLogin";
// import desktop from "../src/app/components/asset/images-removebg-preview (1).png"
import star from "../src/app/components/asset/IMG-20230616-WA0003.jpg";

const UserSignup = () => {
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
    Phone: yup.string().required("please enter your Phone number"),
    city: yup.string().required("please enter your city"),
    State: yup.string().required("please enter your State"),
  });

  // 3rd after handle submit validation

  const handleSubmit = (value) => {
    console.log("Value: ", value);
  };
  return (
    <>
      <div className="hp">
        <h1>Welcome</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur
          <br></br>adipiscing elit.
        </p>
      </div>

      <img src="https://www.tekdone.com/Startup.svg" className="demo"></img>

      <div className="frm2">
        <Formik
          initialValues={defaultValue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <img src={star} className="star"></img>

            <h2 className="h">Signup</h2>
            <p className="p"> Hello! Please Enter Your Details for Signup</p>
            <div
              className="col-md-10 mt-6"
              style={{ marginLeft: "42px", marginTop: "50px" }}
            >
              <Field
                type="text"
                name="email"
                placeholder=" Email"
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="email" />
              </p>
            </div>

            <div className="col-md-10 mt-6" style={{ marginLeft: "42px" }}>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="password" />
              </p>
            </div>
            <div className="col-md-10 mt-6" style={{ marginLeft: "42px" }}>
              <Field
                type="number"
                name="Phone number"
                placeholder="Phone"
                className="form-control"
              />
              <p className="text-danger">
                <ErrorMessage name="Phone number" />
              </p>
            </div>
            <div className="col-md-10 mt-6" style={{ marginLeft: "42px" }}>
              <select id ="city" name="city" class="form-select" aria-label="Default select example">
                <option selected> city</option>
                <option value="1">Bhopal</option>[]
                <option value="2">Indore</option>
                <option value="3">Harda</option>
              </select>
              <p className="text-danger">
                <ErrorMessage name="city" />
              </p>
            </div>

            <div class="col-md-10 mt-6" style={{ marginLeft: "42px" }}>
              <select  id="city"  name="city" class="form-select">
                <option selected disabled value="">Choose State...</option>
                <option>Madhya pradesh</option>
                <option>Uttar pradesh</option>
              </select>
              <p className="text-danger">
               <ErrorMessage name="State" />
              </p>
            </div>

            <input type="submit" value="Signup"></input>
            <hr className="hr"></hr>
            <p className="p">I don't have an account on Review & Rate </p>
            
            <h3 className="h3" style={{ fontSize: "15px" }}>
              <strong>Login</strong>
            </h3>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default UserSignup;

"use client";
import React, { useState } from "react"; 
import * as Yup from "yup";
import style from "./stype.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";

type Valuetype = {
  email: string;
  password1: string;
  password2: string;
  first_name: string;
  last_name: string;
};

const initialValues: Valuetype = {
  email: "",
  password1: "",
  password2: "",
  first_name: "",
  last_name: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter a valid email"),
  password1: Yup.string()
    .min(8, "Password is too short, at least 8 characters")
    .required("Please enter a password"),
  password2: Yup.string()
    .oneOf([Yup.ref("password1")], "Passwords must match")
    .required("Please confirm your password"),
  firstname: Yup.string().required("Please enter a first name"),
  lastname: Yup.string().required("Please enter a last name"),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const handlerShowPassword = () => {
    setShowPassword(!showPassword); 
  };

//   handle submit
    const handleSubmit = async (values: Valuetype) => {
        setLoading(true)
        
    }

  return (
    <main className={`${style.container}`}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(value, action) => {
          console.log(value);
        }}
      >
        <Form className="bg-gray-100 p-4 rounded-xl w-96">
          <h1 className={`${style.title}`}>Login</h1>
          {/* Firstname */}
          <div className="mb-5">
            <label htmlFor="firstname" className={`${style.label}`}>
              Firstname
            </label>
            <Field
              type="firstname"
              name="firstname"
              id="firstname"
              className={`${style.input}`}
            />
            <ErrorMessage
              name="firstname"
              component="div"
              className={`${style.error}`}
            />
          </div>
          {/* Lastname */}
          <div className="mb-5">
            <label htmlFor="lastname" className={`${style.label}`}>
              Lastname
            </label>
            <Field
              type="lastname"
              name="lastname"
              id="lastname"
              className={`${style.input}`}
            />
            <ErrorMessage
              name="lastname"
              component="div"
              className={`${style.error}`}
            />
          </div>
          {/* Email */}
          <div className="mb-5">
            <label htmlFor="email" className={`${style.label}`}>
              Email
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className={`${style.input}`}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={`${style.error}`}
            />
          </div>
          {/* Password1 */}
          <div className="mb-5">
            <label htmlFor="password1" className={`${style.label}`}>
              Password
            </label>
            <div className="relative">
              <Field
                type={showPassword ? "text" : "password"}
                name="password1"
                id="password1"
                className={`${style.input}`}
              />
              {showPassword ? (
                <IoIosEyeOff
                  onClick={handlerShowPassword}
                  className="cursor-pointer absolute right-2 w-5 h-auto top-[12px]"
                />
              ) : (
                <IoIosEye
                  onClick={handlerShowPassword}
                  className="cursor-pointer absolute right-2 w-5 h-auto top-[12px]"
                />
              )}
            </div>
            <ErrorMessage
              name="password1"
              component="div"
              className={`${style.error}`}
            />
          </div>
          {/* Password2 */}
          <div className="mb-5">
            <label htmlFor="password2" className={`${style.label}`}>
              Confirm Password
            </label>
            <div className="relative">
              <Field
                type={showPassword ? "text" : "password"}
                name="password2"
                id="password2"
                className={`${style.input}`}
              />
              {showPassword ? (
                <IoIosEyeOff
                  onClick={handlerShowPassword}
                  className="cursor-pointer absolute right-2 w-5 h-auto top-[12px]"
                />
              ) : (
                <IoIosEye
                  onClick={handlerShowPassword}
                  className="cursor-pointer absolute right-2 w-5 h-auto top-[12px]"
                />
              )}
            </div>
            <ErrorMessage
              name="password1"
              component="div"
              className={`${style.error}`}
            />
          </div>
          <button type="submit" className={`${style.botton}`}>
            Submit
          </button>
        </Form>
      </Formik>
    </main>
  );
};

export default Login;

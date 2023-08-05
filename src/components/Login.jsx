import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { styled } from "styled-components";
import { Link } from "react-router-dom";


const Master_container= styled.div `
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
${'' /* background-color: #cfc7d4; */}
position: absolute;
top:0;
justify-content: center;
align-items: center;
`

const Heading= styled.h1`
text-align: center;`


const SignInSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const Login = () => {
  const navigate = useNavigate();

  return (
    <Master_container>
    <div class="c10">
      <Heading>Welcome back to Blogger<br/><br/>Sign In</Heading>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={SignInSchema}
        onSubmit={(values, { setSubmitting }) => 
        {
          console.log({ values });
          // Add submit logic here
          localStorage.setItem("demo_user", true);
          setSubmitting(false);
          navigate("/");
        }}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          touched,
          errors,
          setValues,
        }) => (
          <form class="c12" noValidate onSubmit={handleSubmit}>
            <div className="c11">
              <input
                type="text"
                name="username"
                value={values.username}
                onChange={(e) => {
                  let value = e.target.value;
                  setValues({ ...values, username: value.toUpperCase() });
                }}
                onBlur={handleBlur}
                autoComplete="username"
                className={`title1 ${
                  touched.username &&
                  !!errors.username &&
                  "border-red-700"
                }`}
                placeholder="Username"
              />
              {touched.username && !!errors.username && (
                <span className="error">{errors.username}</span>
              )}
            </div>
            <div className="c11">
              <input
                type="text"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="password"
                className={`title1 ${
                  touched.password &&
                  !!errors.password &&
                  "border border-red-700"
                }`}
                placeholder="Password"
              />
              {touched.password && !!errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <button class= "submit" type="submit"><Link to={`/`} style={{ textDecoration: 'none', color: 'black' }}>Login</Link></button>
          </form>
        )}
      </Formik>
    </div>
    </Master_container>
  );
};
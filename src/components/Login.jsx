import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

// const Master_container= styled.div `
// display: flex;
// width: 100vw;
// height: 100vh;
// ${'' /* background-color: #cfc7d4; */}
// position: absolute;
// top:0;
// justify-content: center;
// align-items: center;
// `

const Master_container = styled.div`
  display: flex;
  gap: 40px;
  width: 75%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 20px;

  img {
    width: 550px;
  }

  .submit2 {
    width: 200px;
  }

  .submit {
    margin: 20px 0px;

    &:hover {
      background: #fafafa;
      border: 1px solid black;
    }
  }
`;

const Heading = styled.h1`
  text-align: center;
`;
const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
`;

const SignInSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const Login = ({ users, setCurrentuser }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  return (
    <Master_container>
      <img src="/assets/Login.jpg"></img>
      <div class="c10">
        <Heading>
          Welcome back to Blogger!
          <br />
          <br />
          Sign In
        </Heading>
        <ErrorMessage>{error}</ErrorMessage>
        <Formik
          initialValues={{ username: "", password: "" }}
          validationSchema={SignInSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log({ values });
            // Add submit logic here
            localStorage.setItem("demo_user", true);
            setSubmitting(false);

            const item = users.find((item) => values.username === item.name);
            if (item && item.password === values.password) {
              setCurrentuser(item);
              navigate("/blogs");
            } else setError("Username or password incorrect");
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
                    setValues({ ...values, username: value });
                  }}
                  onBlur={handleBlur}
                  autoComplete="username"
                  className={`title1 ${
                    touched.username && !!errors.username && "border-red-700"
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
              <button class="submit" type="submit">
                <Link style={{ textDecoration: "none", color: "black" }}>
                  Login
                </Link>
              </button>

              <span type="submit">
                <Link to={`/signup`} style={{ color: "black" }}>
                  Create a new account?
                </Link>
              </span>
            </form>
          )}
        </Formik>
      </div>
    </Master_container>
  );
};

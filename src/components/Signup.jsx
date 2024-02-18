import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

let atleast10YearsOld = new Date();
atleast10YearsOld.setFullYear(atleast10YearsOld.getFullYear() - 10);

const SignUpSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Enter valid email").required("Email is required"),
  password: yup.string().required("Password is required"),
  cPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm password is required"),
  dob: yup
    .date()
    .max(atleast10YearsOld, "You need to be at least 10 years of age")
    .required("Date of birth is required"),
});

export const SignUp = (props) => {
  const navigate = useNavigate();

  return (
    <Master_container>
      <img src="/assets/Login.jpg"></img>
      <div class="c10">
        <Heading>
          Welcome to Blogger!
          <br />
          <br />
          Sign Up
        </Heading>
        <Formik
          initialValues={{
            name: "",
            password: "",
            email: "",
            cPassword: "",
            dob: "",
          }}
          validationSchema={SignUpSchema}
          onSubmit={(values) => {
            var plan_id = 0;
            if (values.plan == "Free(1 blog a day)") plan_id = 1;
            else if (values.plan == "Premium(3 blogs a day) - $3")
              plan_id = 3; //i have put plan id same as number of views allowed for simplicity
            else if (values.plan == "Gold(5 blogs a day) - $5") plan_id = 5;
            else if (values.plan == "Diamond(10 blogs a day) - $10")
              plan_id = 10;

            //console.log(values);

            values = {
              ...values,
              id: Date.now(),
              number_followers: 0,
              number_following: 0,
              plan_id: plan_id,
              views: 0,
            };

            console.log(values);

            props.setUsers([...props.users, values]);
            props.setUseruid(props.user_uid + 1);
            props.setCurrentuser(values);
            navigate("/blogs");
          }}
        >
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <form class="c12" noValidate onSubmit={handleSubmit}>
              <div className="c11">
                <input
                  class="title1"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`title1 ${
                    touched.name && !!errors.name && "border border-red-700"
                  }`}
                  placeholder="Enter your username"
                />
                {touched.name && !!errors.name && (
                  <div className="error">{errors.name}</div>
                )}
              </div>
              <div className="c11">
                <input
                  class="title1"
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`title1 ${
                    touched.email && !!errors.email && "border border-red-700"
                  }`}
                  placeholder="Email"
                />
                {touched.email && !!errors.email && (
                  <span className="error">{errors.email}</span>
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
              <div className="c11">
                <input
                  type="text"
                  name="cPassword"
                  value={values.cPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`title1 ${
                    touched.cPassword &&
                    !!errors.cPassword &&
                    "border border-red-700"
                  }`}
                  placeholder="Confirm password"
                />
                {touched.cPassword && !!errors.cPassword && (
                  <span className="error">{errors.cPassword}</span>
                )}
              </div>
              <div className="c11">
                <input
                  type="date"
                  name="dob"
                  value={values.dob}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`title1 ${
                    touched.dob && !!errors.dob && "border border-red-700"
                  }`}
                  placeholder="Date of Birth"
                />
                {touched.dob && !!errors.dob && (
                  <span className="error">{errors.dob}</span>
                )}
              </div>
              <div>
                <select
                  class="submit2"
                  name="plan"
                  value={values.plan}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option>Select subscription plan</option>
                  <option>Free(1 blog a day)</option>
                  <option>Premium(3 blogs a day) - $3</option>
                  <option>Gold(5 blogs a day) - $5</option>
                  <option>Diamond(10 blogs a day) - $10</option>
                </select>
              </div>
              <button class="submit" type="submit">
                Sign Up
              </button>
              <span type="submit">
                <Link to={`/login`} style={{ color: "black" }}>
                  Login if you are already a user!
                </Link>
              </span>
            </form>
          )}
        </Formik>
      </div>
    </Master_container>
  );
};

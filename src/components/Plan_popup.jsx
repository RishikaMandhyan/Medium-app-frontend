import React from 'react';
import { Formik } from "formik";
import { Link } from 'react-router-dom';


export const Plan_popup=(props) => {
    return (<>

  <div  class="popup" >
  <h1>
  Upgrade your current plan to access more content!
  </h1>
  
<Formik
        initialValues={{
          name: "",
          password: "",
          email: "",
          cPassword: "",
          dob: "",
        }}
        
        onSubmit={(values) => { 

            var plan_id=0;
            if(values.plan=="Free(1 blog a day)") plan_id=1;
            else if (values.plan=="Premium(3 blogs a day) - $3") plan_id=3; //i have put plan id same as number of views allowed for simplicity
            else if (values.plan=="Gold(5 blogs a day) - $5") plan_id=5;
            else if(values.plan=="Diamond(10 blogs a day) - $10") plan_id=10;

            console.log(values);

            var editedArr2=new Array(0);
            props.users.map(function(item){
            if(item.id==props.currentuser.id)
                {
                    editedArr2.push({...item, views:0, plan_id: plan_id});
                }
            else
                {
                    editedArr2.push(item);
                }
            })

            props.setCurrentuser({...props.currentuser, views: 0, plan_id: plan_id});
            props.setUsers(editedArr2);
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
            <div>
              <select class="submit2 submit4"
              name="plan"
              value={values.plan}
              onChange={handleChange}
                onBlur={handleBlur}>
                <option>
                  Select subscription plan
                </option>
                <option>
                  Free(1 blog a day)
                </option>
                <option>
                  Premium(3 blogs a day) - $3
                </option>
                <option>
                  Gold(5 blogs a day) - $5
                </option>
                <option>
                Diamond(10 blogs a day) - $10
                </option>
              </select>
            </div>
            <button class="submit submit3" type="submit">Submit</button>

          </form>
        )}
      </Formik>


  {/* <div>
              <select class="submit2 submit4">
                <option>
                  Select subscription plan
                </option>
                <option>
                  Free(1 blog a day)
                </option>
                <option>
                  Premium(3 blogs a day) - $3
                </option>
                <option>
                  Gold(5 blogs a day) - $5
                </option>
                <option>
                Diamond(10 blogs a day) - $10
                </option>
              </select>
          
            <button class="submit submit3" type="submit">Submit</button>
            </div> */}

  </div></>)

}



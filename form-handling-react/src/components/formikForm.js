import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

const formikForm = () => {
    // define validation schema with yup
    const validationSchema = Yup.object({
        username: Yup.string().required("Username is required"),
       email: Yup.string().required("Email is required"),
        password: Yup.string().required("Password is required")
       
    });
     // initial form values
    const initialValues = {
        username: '',
        email: '',
        password: ''
    }

    //handle form submission

    const onSubmit = (values, {setSubmitting}) => {
        console.log(values);
        setSubmitting(false);
    };

  return (
    <Formik
       initialValues={initialValues}      
        validationSchema={validationSchema}
        onSubmit={onSubmit}
     >
        {({isSubmitting}) => (

   
       <Form>
        <div>
            <label htmlFor="username">Username</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" /> 

             </div>

             <div>
            <label htmlFor="email">Email</label>
           <Field type="email" name="email" />
           <ErrorMessage name="email" component="div" /> 

           </div> 
           
            <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" /> 
            
            </div>
            <button type="submit" disabled={isSubmitting} >Register</button>
        </Form>
     )}
    </Formik>
  )
}

export default formikForm

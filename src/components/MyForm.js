import React from 'react';
import * as Yup from 'yup'; 
import { Formik } from 'formik';


const Wrapper = ({children}) => {


  return(
    <div>
      <h1>This is the Wrapper</h1>
      {
       children
      }
    </div>
  )
}


const MyForm = () => {

  const initialValues = {
    username: "",
    email: "",
    password: "",
    cf_password: ""
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string().max(40).min(6).required(),
    email : Yup.string().email().max(200).required(),
    password: Yup.string().min(8).max(255).required(),
    cf_password: Yup.string().min(8).max(255).required(),
  })

  const mySubmit = (values, helpers) => {
    console.log(helpers)
    helpers.resetForm()
  }

  return (
    <Wrapper>
      <p>This should be under the h1</p>
      <Formik
      initialValues = {initialValues}
      validationSchema = {validationSchema}
      onSubmit = {mySubmit}
      > 
      {({
        errors, 
        handleBlur, 
        handleChange, 
        handleSubmit, 
        touched,
        values,
      }) => (
        <form noValidate onSubmit = {handleSubmit}>
          <h4>Fill out form now please</h4>
          <input name = "username" type = "text" value = {values.username} onBlur = {handleBlur} onChange = {handleChange} autoComplete="new-password" placeholder="username"/>
          <p style={{color : 'red'}}>{errors.username}</p>
          <input name = "email" type = "email" value = {values.email} onBlur = {handleBlur} onChange = {handleChange} autoComplete="new-password" placeholder="email"/>
          {touched.email && <p style={{color : 'red'}}>{errors.email}</p>}
          <input name = "password" type = "password" value = {values.password} onBlur = {handleBlur} onChange = {handleChange} autoComplete="new-password" placeholder="password"/>
          {touched.password && <p style={{color : 'red'}}>{errors.password}</p>}
          <input name = "cf_password" type = "password" value = {values.cf_password} onBlur = {handleBlur} onChange = {handleChange} autoComplete="new-password" placeholder="Confirm Password"/>
          {touched.cf_password && <p style={{color : 'red'}}>{errors.cf_password}</p>}
          <button type ='submit'>Submit</button>
        </form>
      )
      }
      </Formik>
    </Wrapper>
  )
}

export default MyForm

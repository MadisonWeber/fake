import React from 'react';
import * as yup from 'yup'; 
import { Formik } from 'formik';


const Wrapper = ({children}) => {

  console.log('children from wrapper', children)

  return(
    <div>
      <h1>This is the Wrapper</h1>
      {children}
    </div>
  )
}


const MyForm = () => {

  return (
    <Wrapper>
      <p>This should be under the h1</p>
    </Wrapper>
  )
}

export default MyForm

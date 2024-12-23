import React from 'react'
import EducationAndWork from '../components/EducationAndWork'
import { education_data } from '../data'



const Education = () => {
  return (
    <EducationAndWork title={"Education"} data={education_data}/>
  )
}

export default Education
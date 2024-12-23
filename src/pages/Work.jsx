import React from 'react';
import { Work_data } from '../data';
import EducationAndWork from '../components/EducationAndWork';


const Work = () => {
  return (
    
    <EducationAndWork title={"Work"} data={Work_data}/>
  )
}

export default Work
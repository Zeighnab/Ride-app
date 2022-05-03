import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const State = ({state}) => {


 return (
   <>
     <option className="bg-neutral">{state}</option>
   </>
 );
}

export default State
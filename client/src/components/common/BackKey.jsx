import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons";

const BackKey = ({click}) => {
  return (
    <FontAwesomeIcon icon={faCircleArrowLeft} size="2xl" onClick={click}/>

  )
}

export default BackKey
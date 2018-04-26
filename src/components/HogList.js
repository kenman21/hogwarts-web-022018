import React from 'react'
import Hog from './Hog'

const HogList = (props) => {

  console.log(props);

  let allhogs = props.hogs.map(hog =>
    <Hog key={hog.name} {...hog}
    hogClicked={props.hogClicked}
    isClicked = {props.clickedhogs.includes(hog.name)}
    hogHidden = {props.hogHidden}
    isHidden = {props.hiddenhogs.includes(hog.name)}
    />)

  return (
    <div>
      {allhogs}
    </div>
  )
}

export default HogList

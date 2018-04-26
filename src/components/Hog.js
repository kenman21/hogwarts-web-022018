import React from 'react'

const Hog = (props) => {
  let parsed_name = props.name.toLowerCase().replace(/ /g, "_")

  let handlehogClick = (e) => {
    props.hogClicked(e.target.alt)
  }
  let weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
  let medal = "highest medal achieved"

  return (
    <div>
      {!props.isHidden ?
      <div>
        <h3>{props.name}</h3>
        <img src={require(`../hog-imgs/${parsed_name}.jpg`)} alt={props.name} onClick={handlehogClick}/><br/>
        <button id={props.name} onClick={(e)=> props.hogHidden(e.target.id)}>Hide</button>
      </div>
      :
      <div>
        <button id={props.name} onClick={(e)=> props.hogHidden(e.target.id)}>Unhide</button>
      </div>
      }
      {props.isClicked ?
        <div>
          <div>Greased: {props.greased.toString()}</div>
          <div>Specialty: {props.specialty}</div>
          <div>{weight}: {props[weight]}</div>
          <div>{medal}: {props[medal]}</div>
        </div>
        : null
      }
    </div>
  )
}

export default Hog

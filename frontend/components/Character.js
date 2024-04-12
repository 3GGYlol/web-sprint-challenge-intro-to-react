import React from 'react'
import { useState } from 'react'

function Character(props) { 
 const {character} = props;
 const [planetToggle, setPlanetToggle] = useState(false);

const toggle= () => {
  setPlanetToggle(!planetToggle);
  }
function Character() { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div>
      {/* Use the same markup with the same attributes as in the mock */}
    </div>
  )
}

export default Character

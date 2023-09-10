import React from "react"

function Greet(props) {
   return (
      <p>
         "India is my country, I love my country very much."
         "We welcome you here " {props.name}
      </p>
   )
}

export default Greet
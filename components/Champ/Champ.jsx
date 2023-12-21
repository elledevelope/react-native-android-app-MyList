import React from 'react'
import { TextInput } from 'react-native'
import { styleChamp } from "./styleChamp.js";

const Champ = () => {
  return (
    <TextInput 
    placeholder="Nouvel Item"
    style={styleChamp} 
    >

    </TextInput>
  )
}

export default Champ
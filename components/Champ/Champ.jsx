import React from 'react'
import { TextInput } from 'react-native'
import { styleChamp } from "./styleChamp.js";
import TodoListContext from '../../TodoListContext.js';

const Champ = () => {
  const todoListContext = React.useContext(TodoListContext);

  return (
    <TextInput
      placeholder="Nouvel Item"
      style={styleChamp}
      onChangeText={(text) => { todoListContext.setEnter(text) }}
    >
    </TextInput>
  )
}

export default Champ
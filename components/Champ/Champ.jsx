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
      // Setting up the onChangeText prop to call a function when the text in the input changes
      // The function receives the updated text as 'text' and uses 'todoListContext.setEnter' to update the 'enter' state in the context with the new text
      onChangeText={(text) => { todoListContext.setEnter(text) }}

      // Setting the value prop to control the input's value, using the 'enter' state from the context
      // This ensures that the input reflects the current value of the 'enter' state in the context
      value={todoListContext.enter}
    >
    </TextInput>
  )
}

export default Champ
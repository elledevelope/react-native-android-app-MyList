import  React from "react";
const TodoListContext = React.createContext();
export default TodoListContext;


// import React, { createContext } from 'react';
// import { MMKV } from 'react-native-mmkv';

// export const TodoListContext = createContext();

// export const TodoListProvider = ({ children }) => {
//   const storage = new MMKV();

//   // Your context state and logic go here

//   return (
//     <TodoListContext.Provider value={{ storage }}>
//       {children}
//     </TodoListContext.Provider>
//   );
// };

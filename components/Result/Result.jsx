import React from 'react';
import { View, Text, FlatList } from 'react-native';
import TodoListContext from '../../TodoListContext.js';
// import { styleResult } from './styleResult.js';
import Item from '../Item/Item.jsx';

const Result = () => {
  // Accessing the TodoListContext using the useContext hook from the React library
  const todoListContext = React.useContext(TodoListContext);

  return (
    <FlatList
      data={todoListContext.list}
      renderItem={({ item, index }) => <Item item={item} index={index}></Item>}
      keyExtractor={item => item}
    >
    </FlatList>



    // <View>
    //   {/* Using map to iterate over 'list' array */}
    //   {todoListContext.list.map((value, index) => (
    //     // Rendering a Text component for each item in the 'list' array
    //     // 'key' is set to the index for React to efficiently track and manage the list items
    //     <Text key={index}>{value}</Text>
    //   ))}
    // </View>
  );
};

export default Result;

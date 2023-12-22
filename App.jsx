/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Title from './components/Title/Title';
import Champ from './components/Champ/Champ';
import Result from './components/Result/Result';
import TodoListContext from './TodoListContext';
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';
const storage = new MMKVLoader().initialize();

function App() {
  // Using the React.useState hook to create a state variable 'list' with an initial value of an empty array and a function 'setList' to update it
  // const [list, setList] = React.useState([]); //
  const [list, setList] = useMMKVStorage('listStorage', storage, list);
  // Using the 'useMMKVStorage' hook to create a state variable 'listStorage'
  // The state variable is initialized with the value retrieved from the 'storage' instance using the key 'listStorage'
  // The 'setlistStorage' function is provided to update the 'listStorage' state variable
  // const [listStorage, setlistStorage] = useMMKVStorage('listStorage', storage, list); ///
  const [enter, setEnter] = React.useState("");

  const deleteItem = (index) => {
    let listTmp = list;
    listTmp.splice(index, 1);
    setList(listTmp);
  }

  // Load stored data from MMKV when the component mounts
  // useEffect(() => {
  //   if (listStorage) {
  //     setList(listStorage);
  //   }
  // }, []);


  // Defining a function 'handlePress' that will be executed when a certain event (e.g., button press) occurs
  const handlePress = () => {
    // Checking if the 'enter' variable (text input) has a length greater than 0 (i.e., it's not empty)
    if (enter.length > 0) {
      // Updating the 'list' state by creating a new array that includes the current items in 'list' and the new value of 'enter'
      setList([...list, enter]);    
      // Resetting the 'enter' state variable to an empty string, effectively clearing the text input
      setEnter("");
      //vider le Champ??
    }
  };

  // Save 'list' to MMKV whenever it changes
  // useEffect(() => {
  //   setlistStorage(list);  // Update 'listStorage' with the current value of 'list'
  // }, [list]);  // Run this effect only once when the component mounts (empty dependency array) ( Mounting Phase is when a component is being created and inserted into the DOM)


  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        {/* // Providing the TodoListContext with values to be consumed by components within its scope
        // The values include 'list', 'setList', 'enter', and 'setEnter' from the current component's state */}
        <TodoListContext.Provider value={{ list, setList, enter, setEnter, deleteItem }}>
          <View>
            <Title></Title>
            {/* <Text style={styles.TaskStyle}>Enter Item</Text> */}
            <Champ></Champ>
            <Button
              style={styles.buttonStyle}
              title='Ajouter'
              // color="darkblue"
              onPress={handlePress}
            ></Button>
          </View>
          <Result></Result>
          {/* Displaying the entered text from the enter state: */}
          {/* <Text>{enter}</Text> */}
          {/* <Text>{list}</Text> */}
        </TodoListContext.Provider>
        {/* <Text>{listStorage}</Text> */}
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    color: 'black'
  },
  TaskStyle: {
    textAlign: 'center',
    fontSize: 20,

  }
});

export default App;

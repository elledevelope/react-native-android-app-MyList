/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
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

function App() {
  // Using the React.useState hook to create a state variable 'list' with an initial value of an empty array and a function 'setList' to update it
  const [list, setList] = React.useState([]);
  const [enter, setEnter] = React.useState("");

  // Defining a function 'handlePress' that will be executed when a certain event (e.g., button press) occurs
  const handlePress = () => {
    // Checking if the 'enter' variable (text input) has a length greater than 0 (i.e., it's not empty)
    if (enter.length > 0) {
      // Updating the 'list' state by creating a new array that includes the current items in 'list' and the new value of 'enter'
      setList([...list, enter]);
      // Resetting the 'enter' state variable to an empty string, effectively clearing the text input
      setEnter("");


    }
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        {/* // Providing the TodoListContext with values to be consumed by components within its scope
        // The values include 'list', 'setList', 'enter', and 'setEnter' from the current component's state */}
        <TodoListContext.Provider value={{ list, setList, enter, setEnter }}>
          <View>
            <Title></Title>
            <Text
              style={styles.TaskStyle}
            >Enter Item</Text>
            <Champ></Champ>
            <Button
              style={styles.buttonStyle}
              title='Ajouter'
              color="salmon"
              onPress={handlePress}
            ></Button>
          </View>
          <Result></Result>
          {/* Displaying the entered text from the enter state: */}
          {/* <Text>{enter}</Text> */}
          {/* <Text>{list}</Text> */}
        </TodoListContext.Provider>
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
    fontSize: 20
  }
});

export default App;

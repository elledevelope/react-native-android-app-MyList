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

function App() {
  const [list, setList] = React.useState([]);

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <Title></Title>
          <Text>Hello world</Text>
          <Champ></Champ>
          <Button
            style={styles.buttonStyle}
            title='Ajouter'
            color="salmon"
          ></Button>
        </View>
        <Result></Result>
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    color: 'black'
  },
});

export default App;

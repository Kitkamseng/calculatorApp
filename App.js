import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [answerValue, setAnswerValue] = useState(0);

  function buttonPressed(input){
    let emptyArr = [];
    let valueParsed = input;

    emptyArr.push(valueParsed);

    const concatenatedValue = emptyArr.join('');

    console.log(concatenatedValue);

  }

  return (
    <SafeAreaView style={styles.containerTwo}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.resultNumber}>{answerValue}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonOne}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOne}>
          <Text style={styles.buttonText}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOne}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightColumnButton}>
          <Text style={styles.buttonTextWhite}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.mainButtons} onPress={() => buttonPressed(7)}>
          <Text style={styles.buttonTextWhite}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainButtons} onPress={() => buttonPressed(8)}>
          <Text style={styles.buttonTextWhite}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainButtons} onPress={() => buttonPressed(9)}>
          <Text style={styles.buttonTextWhite}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightColumnButton}>
          <Text style={styles.buttonTextWhite}>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.mainButtons} onPress={() => buttonPressed(4)}>
          <Text style={styles.buttonTextWhite}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainButtons} onPress={() => buttonPressed(5)}>
          <Text style={styles.buttonTextWhite}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainButtons} onPress={() => buttonPressed(6)}>
          <Text style={styles.buttonTextWhite}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightColumnButton}>
          <Text style={styles.buttonTextWhite}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.mainButtons} onPress={() => buttonPressed(1)}>
          <Text style={styles.buttonTextWhite}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainButtons} onPress={() => buttonPressed(2)}>
          <Text style={styles.buttonTextWhite}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainButtons} onPress={() => buttonPressed(3)}>
          <Text style={styles.buttonTextWhite}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightColumnButton}>
          <Text style={styles.buttonTextWhite}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.customButton}>
          <Text style={styles.buttonTextWhite}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.mainButtons}>
          <Text style={styles.buttonTextWhite}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rightColumnButton}>
          <Text style={styles.buttonTextWhite}>=</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// const {width, height} = Dimensions.get('window'); 

// const buttonWidth = (width - 20) / 5; 
// const buttonHeight = (height - 20) / 9; 

const { width } = Dimensions.get('screen');
const buttonProportion = 0.2; // Define the desired proportion (40% in this example)
const buttonWidth = (width * buttonProportion);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'column',
    // borderWidth: 3, 
    // borderColor: 'white',
  },
  containerTwo: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    // borderWidth: 3, 
    // borderColor: 'white',
  },
  resultNumber: {
    fontSize: 75, 
    color: 'white',
    margin: 10,
  },  
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },  
  buttonOne: {
    width: buttonWidth,
    aspectRatio: 1,
    backgroundColor: 'lightgrey',
    borderRadius: 50,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 25,
  },  
  buttonTextWhite: {
    fontSize: 25,
    color: 'white',
  },  
  rightColumnButton: {
    width: buttonWidth,
    aspectRatio: 1,
    backgroundColor: '#0181CF',
    borderRadius: 50,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainButtons: {
    width: buttonWidth,
    aspectRatio: 1,
    backgroundColor: '#4A5358',
    borderRadius: 50,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    width: buttonWidth * 2 + 10, 
    backgroundColor: '#4A5358',
    borderRadius: 50,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

import { StatusBar } from 'expo-status-bar';
import { Profiler, useState } from 'react';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity  } from 'react-native';

export default function App() {

    const[frase,setFrase]=useState('');

    function radNumber(){
      const number = Math.floor(Math.random()*10)+1;
      //setFrase(number);
      switch (number){
        case 1: setFrase("Oi, feliz natal");
        break
        case 2: setFrase("Oi,feliz ano novo");
        break
        case 3: setFrase("Oi, feliz aniversario");
        break 
        case 4: setFrase("Páscoa ta ai hem");
        break
        case 5: setFrase("quero minha casa");
        break
        case 6: setFrase("meta de vida? virar dev sênior");
        break
        case 7: setFrase("prof, que atividade easy");
        break
        case 8: setFrase("posso sair mais cedo?");
        break
        case 9 : setFrase("qual seu maior sonho?");
        break
        case 10 : setFrase("cabooooooo numero 10");
      }
      
    } 
  return (
    <View style={styles.container}>
      <Text>
          {frase}
      </Text>
      <TouchableOpacity style={styles.button} onPress={radNumber}>
        <Text>
          Gerar Frase Aleatória
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor:"blue",
    color:"#FFF",
    borderRadius:9,
    height:25
  }
});

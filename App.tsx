import React, { useState } from "react";
import{ Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';






const App = () =>{
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [result, setResult] = useState('');
  



  return(
    <View style={styles.container}>
    
    <Image 
    style={styles.img}
    source={require('./img/cookie.png')}
    ></Image>

      <TextInput
        style={styles.input}
        onChangeText={name => setName(name)}
        placeholder="Your name here"
      />
      <TextInput
        style={styles.input}
        onChangeText={age => setAge(age)}
        placeholder="Your age here"
      />
      <Button
        title="Let's Go"
        color="#00f000"
        onPress={result => {
          var nage = Number(age);
          if(nage < 10) 
            nage *= 7;
          if(nage > 9) {
            while(nage > 9)
              nage = Number(nage.toString().substring(0,1)) + Number(nage.toString().substring(1,2));
        }
        setResult("Welcome, "+ name + ", your lucky number is: " + nage);
        
        }}
        />
      <Text
      style={styles.textout}
      >{result}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    backgroundColor:'white',
    display:'flex',
    height:'100%',
    justifyContent:'center',
  },
  input:{
    height:'auto',
    width:'80%',
    marginBottom:'1%',
    backgroundColor:'silver',
  },
  textout:{
    marginTop:'10%',
    fontSize:26,
    width:'80%',
  },
  img:{
    marginBottom:'10%',
    width:170,
    height:170
  }
  
});

export default App;
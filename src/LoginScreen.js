import React, { useState } from 'react';
import { View, TextInput, Button, Alert, Text, TouchableOpacity, } from 'react-native';
import MyStack from './navigation/navigation';


const LoginScreen = ({navigation} ) => {
//   console.log('props',props)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSignIn = () => {
    if (email && password) {
      if (!email) {
        Alert.alert('Invalid Email', 'Please enter a valid email address.');
      }

      if (!password) {
        Alert.alert(
          'Invalid Password',
          'Password must be at least 8 characters long and contain at least 1 uppercase letter and 1 number and one symbol.'
        );
        return 
      }
      navigation.replace("MyStack")
    //   <MyStack/>
      // Alert.alert('naviagted')

    } else {
      Alert.alert('please fill the both the fileds')
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
  
      <Button title="Sign In" onPress={() => handleSignIn()} />
    </View>
  );
};

export default LoginScreen
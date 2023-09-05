import { StyleSheet, Text, View } from 'react-native';

const Account = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account</Text> 
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
  }
});

export default Account;
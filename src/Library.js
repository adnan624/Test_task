import { StyleSheet, Text, View } from 'react-native';

const Library = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Library</Text> 
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

export default Library;
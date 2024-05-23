import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>My name is <Text style={styles.myName}>Otabil</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#329ea8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name :{
    fontSize : 24,
  },
  myName : {
    fontWeight : 'bold' ,
  }
});

import { Text, View, StyleSheet } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2e1f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#1c0202',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#1c0202',
    borderRadius: 10,
    backgroundColor: '#f3f3f3',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
});

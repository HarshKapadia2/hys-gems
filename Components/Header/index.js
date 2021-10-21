import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';

function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>GEMS</Text>
      <Button
        style={styles.button}
        title="Login/Signup"
        onPress={e => navigation.navigate('Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: '#333',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // position: 'sticky',
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'yellow',
  },
});

export default Header;

// import React from 'react';
// import { Button } from 'react-native';

// const Header = ({ navigation }) => {
//   return (
//     <Button
//       onPress={() => navigation.navigate('Login')}
//       title="Login/Signup"
//       color="#000"
//     />
//   );
// };

// export default Header;

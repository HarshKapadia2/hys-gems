import React from 'react';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Products from './Pages/Product';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Profile from './Pages/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen
          name="Home"
          options={({ navigation }) => {
            return {
              // headerTitle: props => <Text style={{ fontSize: 40 }}>GEMS</Text>,
              headerRight: () => (
                <>
                  <Button
                    onPress={() => navigation.navigate('Login')}
                    title="Login/Signup"
                    color="#000"
                  />
                </>
              ),
            };
          }}
          component={Home}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen
          name="Product"
          options={({ route }) => {
            return {
              title: route.params.name,
            };
          }}
          component={Products}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

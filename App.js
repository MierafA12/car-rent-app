import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/home';
import CarDetails from './components/CarDetailes';
import First from './components/first';
import Form from './components/form';
import Favorite from './components/Favorite';
import Contact from './components/contact';
import { FavoritesProvider } from './components/FavoriteContext';
import Booking from './components/booking';
import About from './components/About';
import Account from './components/Account';

const Stack = createStackNavigator();

const App = () => {
  return (
    <FavoritesProvider>
    <NavigationContainer>
      <Stack.Navigator 
      ><Stack.Screen name="First" component={First} /> 
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CarDetails" component={CarDetails} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
    </FavoritesProvider>
  );
};

export default App;
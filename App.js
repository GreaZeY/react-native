import store from './store';
import {Provider} from "react-redux";
import Categories from './Components/Categories/Categories.jsx'
import { getAllCategories, getAllProducts } from './actions';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './Components/Products/Products.jsx';

const Stack =  createNativeStackNavigator()

export default function App() {
  // dispatching initail data to display
   store.dispatch( getAllCategories() );
   store.dispatch( getAllProducts() );



  return (
    <Provider store={ store } >
    <NavigationContainer >

      <Stack.Navigator initialRouteName='Categories' >
      
   
       <Stack.Screen name='Categories' component={Categories} />
       <Stack.Screen name='Products' component={Products} />
     
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}



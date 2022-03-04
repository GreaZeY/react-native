import { StatusBar } from 'expo-status-bar';
import store from './store';
import { StyleSheet, View,SafeAreaView } from 'react-native';
import {Provider} from "react-redux";
import Home from './Components/Home/Home.jsx'
import { getAllCategories } from './actions';


export default function App() {
   store.dispatch( getAllCategories() );
  return (
    <Provider store={ store } >
    <View >
      <StatusBar backgroundColor='#a6c76c' style="auto" />
      <SafeAreaView>
       <Home/>
      
      </SafeAreaView>
    </View>
    </Provider>
  );
}



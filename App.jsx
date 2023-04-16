import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/AntDesign'
import IconF from 'react-native-vector-icons/FontAwesome'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'

import Home from "./Pages/Home";
import Store from "./Pages/Store";
import Favorites from "./Pages/Favorites";
import Cart from "./Pages/Cart";


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
  
          <Tab.Screen 
            name="Home" 
            component={Home}
            options={{ 
              // tabBarBadge: 0,
              title: 'Home',
              tabBarIcon: () => <Icon name="flag" size={25} color='#000'/>,}}
          />
          <Tab.Screen 
            name="Store" 
            component={Store}
            options={{ 
              // tabBarBadge: 3,
              title: 'Store',
              tabBarIcon: () => <IconM name="storefront-outline" size={29} color='#000'/>,}}
          />
          <Tab.Screen 
            name="Favorites" 
            component={Favorites}
            options={{ 
              // tabBarBadge: 3,
              title: 'Favorites',
              tabBarIcon: () => <Icon name="hearto" size={25} color='#000'/>,}}
          />

          <Tab.Screen 
            name="Cart" 
            component={Cart}
            options={{ 
              tabBarBadge: 3,
              title: 'Cart',
              tabBarIcon: () => <Icon name="shoppingcart" size={25} color='#000'/>,}}
          />

      </Tab.Navigator>
    </NavigationContainer>

  );
}

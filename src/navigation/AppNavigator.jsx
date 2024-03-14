import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SobreScreen from "../screens/SobreScreen";
import ProdutosScreen from "../screens/ProdutosScreen";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigator" 
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen" 
        component={HomeScreen} 
        options={{
          title: "Home",
          tabBarIcon: "home",
        }}
      />
      <Tab.Screen
        name="ProdutosScreen"
        component={ProdutosScreen}
        options={{
          title: "Produtos",
          tabBarIcon: "cart",
        }}
      />
      <Tab.Screen
        name="SobreScreen"
        component={SobreScreen}
        options={{
          title: "Sobre",
          tabBarIcon: "information",
        }}
      />
    </Tab.Navigator>
  );
}

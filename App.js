import LoginScreen from "./src/components/LoginScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from "./src/components/RegisterScreen";
import Screen from "./src/components/Screen";

  const Stack = createNativeStackNavigator();



  export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
       <Stack.Screen name="Login" component={LoginScreen}/>
       <Stack.Screen name="Cadastro" component={RegisterScreen} />
       <Stack.Screen name="Acesso" component={Screen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}



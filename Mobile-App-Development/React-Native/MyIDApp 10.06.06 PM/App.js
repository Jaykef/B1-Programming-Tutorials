import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { ViewMyID, VerifyMyID } from './app/screens';


export default function App() {
  const Stack = createStackNavigator();
  return (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false
    }}
    initialRouteName={'VerifyMyID'}
      >
      <Stack.Screen name="VerifyID" component={VerifyMyID} />
      <Stack.Screen name="ViewMyID" component={ViewMyID} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}



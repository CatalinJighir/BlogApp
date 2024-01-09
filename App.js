import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from './src/context/BlogContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Index"
              component={IndexScreen}
              options={{
                title: 'All Blogs',
                headerTitleAlign: 'center',
              }}
            />
            <Stack.Screen
              name="Show"
              component={ShowScreen}
              options={{
                title: 'My Blog',
                headerTitleAlign: 'center'
              }}
            />
            <Stack.Screen
              name="Create"
              component={CreateScreen}
              options={{
                title: 'Create Blog',
                headerTitleAlign: 'center'
              }}
            />
            <Stack.Screen
              name="Edit"
              component={EditScreen}
              options={{
                title: 'Create Blog',
                headerTitleAlign: 'center'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView >
  );
}
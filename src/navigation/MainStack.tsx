import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainStackParamList, ScreenEnum} from './types';
import {CharactersListScreen} from '../screens/CharactersListScreen';
import {CharacterDetailsScreen} from '../screens/CharacterDetailsScreen';

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ScreenEnum.CharactersList}
          component={CharactersListScreen}
          options={{title: 'All Heroes'}}
        />
        <Stack.Screen
          name={ScreenEnum.CharacterDetails}
          component={CharacterDetailsScreen}
          options={({route}) => ({title: route.params.name})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

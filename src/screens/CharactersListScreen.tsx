import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MainStackParamList, ScreenEnum} from '../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const CharactersListScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(ScreenEnum.CharacterDetails, {
              name: 'Test',
            })
          }>
          <Text>CharactersListScreen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

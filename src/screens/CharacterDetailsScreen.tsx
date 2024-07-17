import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const CharacterDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>CharacterDetailsScreen</Text>
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

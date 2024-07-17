import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {blackText, gray, screenWidth} from '../styles/constans';
import {StarWarsPerson} from '../features/peopleSlice';

interface MovieItemProps {
  item: StarWarsPerson;
  onPress: (movieId: string) => void;
  addFavorite?: (item: StarWarsPerson) => void;
}
export const PersonItem = ({item, onPress, addFavorite}: MovieItemProps) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(item?.id)}
      style={styles.container}>
      <View style={styles.contentContainer}>
        {item?.name && <Text style={styles.title}>{item.name}</Text>}
      </View>
      {addFavorite && (
        <TouchableOpacity
          style={styles.btnFavorite}
          onPress={() => addFavorite(item)}>
          <Text>Add to Favorite</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    borderBottomColor: gray,
    borderBottomWidth: 1,
    paddingVertical: 24,
  },
  contentContainer: {
    flexDirection: 'row',
  },

  img: {width: 180, height: 180, alignSelf: 'center'},
  title: {
    paddingTop: 12,
    paddingLeft: 12,
    fontWeight: '600',
    fontSize: 16,
    color: blackText,
    width: screenWidth * 0.46,
  },
  btnFavorite: {
    alignSelf: 'flex-end',
    paddingRight: 47,
  },
});

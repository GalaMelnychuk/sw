import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MainStackParamList, ScreenEnum} from '../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {getPeople} from '../services/getPeople';
import {useDispatch, useSelector} from 'react-redux';
import {setPeople, StarWarsPerson} from '../features/peopleSlice';
import {RootState} from '../redux/rootReducer';
import {PersonItem} from '../components/PersonItem';
import {white} from '../styles/constans';
import {Loader} from '../components/Loader';
import {ErrorToast} from '../components/ErrorToast';

export const CharactersListScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList>>();
  const dispatch = useDispatch();
  const people = useSelector((state: RootState) => state.people);

  const [page, setPage] = useState(1);
  const [errorText, setErrorText] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const getCharacters = async () => {
    if (loadingMore || loading) {
      return;
    }

    if (page === 1) {
      setLoading(true);
    }
    if (page > 1) {
      setLoadingMore(true);
    }

    const result = await getPeople(page);

    if (result.status === 200) {
      dispatch(
        setPeople({
          ...result.data,
          results: [...people.results, ...result.data.results],
        }),
      );

      if (result.data.next) {
        setPage(prev => prev + 1);
      }

      if (!result.data.next) {
        setHasMore(false);
      }
    } else {
      setErrorText('Something went wrong');
    }
    setLoading(false);
    setLoadingMore(false);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <View style={styles.container}>
      <Loader isLoading={loading} />
      <ErrorToast
        visible={!!errorText}
        handleClose={() => setErrorText('')}
        errorText={errorText}
      />
      <View style={styles.content}>
        <FlatList
          data={people.results}
          renderItem={({item}: {item: StarWarsPerson}) => (
            <PersonItem
              item={item}
              onPress={() =>
                navigation.navigate(ScreenEnum.CharacterDetails, {
                  name: item.name,
                })
              }
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={() => {
            return hasMore ? getCharacters() : {};
          }}
          onEndReachedThreshold={0}
          contentContainerStyle={{}}
          ListFooterComponent={
            loadingMore ? <ActivityIndicator size="large" /> : null
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

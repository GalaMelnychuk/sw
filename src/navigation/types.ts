export enum ScreenEnum {
  CharactersList = 'CharactersListScreen',
  CharacterDetails = 'CharacterDetailsScreen',
}

export type MainStackParamList = {
  [ScreenEnum.CharactersList]: undefined;
  [ScreenEnum.CharacterDetails]: {
    name: string;
  };
};

import * as types from '../constants/profileEditConstants';

export const nextProfileEditStep = { type: types.NEXT_STEP };
export const prevProfileEditStep = { type: types.PREV_STEP };

export const loadProfileEditAction = ({ interests, chosenInterests }) => ({
  type: types.LOAD_PROFILE_EDIT,
  interests,
  chosenInterests,
});

export const choseInterestAction = () => ({
  type: types.CHOSE_INTEREST,
  // TODO: Добавить интерес в выбор
});

export const unchoseInterestAction = () => ({
  type: types.UNCHOSE_INTEREST,
  // TODO: Добавить интерес для исключения из списка
});

import produce from 'immer';
import {
  NEXT_STEP,
  PREV_STEP,
  CHOSE_INTEREST,
  UNCHOSE_INTEREST,
  LOAD_PROFILE_EDIT,
} from '../constants/profileEditConstants';

const initialState = {
  isLoading: true,
  currentStep: 0,
  interests: [],
  chosenInterests: [],
};

/* eslint-disable default-case, no-param-reassign */
const profileEditReducer = (state = initialState, action = {}) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOAD_PROFILE_EDIT:
        draft.currentStep = 0;
        draft.interests = action.interests;
        draft.chosenInterests = action.chosenInterests;
        draft.isLoading = false;
        break;
      case NEXT_STEP:
        if (draft.currentStep < 2) draft.currentStep += 1;
        break;

      case PREV_STEP:
        if (draft.currentStep > 0) draft.currentStep -= 1;
        break;

      case CHOSE_INTEREST:
        // TODO: Добавить интерес в выбранное
        break;

      case UNCHOSE_INTEREST:
        // TODO: Убрать интерес из выбранного
        break;

      default:
        break;
    }
  });

export default profileEditReducer;

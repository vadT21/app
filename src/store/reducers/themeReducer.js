import {
  THEME_ACTIONS,
} from '../../constants';
import { 
  classicTheme,
} from '../../styles/theme';

const {
  CHANGE_THEME,
} = THEME_ACTIONS;

const initialState = {
  theme: classicTheme,
};

const themeReducer = (state = initialState, action) => {
  switch(action.type){
  case CHANGE_THEME:
    return {
      ...state,
      theme: action.payload,
    };
  default:
    return state;
  }
};

export default themeReducer;
import { 
  combineReducers,
} from 'redux';
import calculatorReducer from './calculatorReducer';
import themeReducer from './themeReducer';

export const rootReducer = combineReducers({
  calculatorReducer,
  themeReducer,
});

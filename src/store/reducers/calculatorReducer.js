import { 
  calculateValues,
  checkInfinity,
  roundNumber,
} from '../../helpers';
import {
  CALCULATOR_ACTIONS,
} from '../../constants';

const {
  UPDATE_DISPLAY,
  OPERATOR,
  PREVIOUS_VALUE,
  EQUAL,
  CLEAR_DISPLAY,
  CLEAR_HISTORY,
  CLEAR_ALL,
  DELETE_LAST_NUMBER,
  CHANGE_SIGN,
} = CALCULATOR_ACTIONS;

const initialState = {
  display: '0',
  previousValue: null,
  operator: null,
  history: [],

};

const calculatorReducer = (state = initialState, action) => {
  switch(action.type){
  case UPDATE_DISPLAY:
    return {
      ...state,
      display:
                    state.display === initialState.display
                      ? action.payload
                      : state.display + action.payload,
    };
  case OPERATOR:
    return{
      ...state,
      operator: action.payload,
    };
  case PREVIOUS_VALUE:
    return{
      ...state,
      previousValue: state.display,
      display: '',
    };
  case EQUAL:
    const operation = {
      operator: state.operator,
      values: [
        roundNumber(state.previousValue), 
        roundNumber(state.display),
      ],
    };
    const result = calculateValues(operation);
    operation.result = checkInfinity(result);
    operation.values[0] = checkInfinity(operation.values[0]);
    return {
      ...state,
      history: [...state.history, operation],
      display: operation.result, 
      operator: null,
      previousValue: null,
    };
  case CLEAR_DISPLAY:
    return {
      ...state,
      display: '0',
      previousValue: null,
      operator: null,
    };
  case CLEAR_HISTORY:
    return {
      ...state,
      history: [],
    };
  case CLEAR_ALL:
    return {
      ...initialState,
    };
  case DELETE_LAST_NUMBER:
    const condition = 
                state.display.length === 1 ||
                (state.display.length <= 4 
                    && state.display.startsWith('-'));
    return {
      ...state,
      display: 
                    condition 
                      ? '0'
                      : state.display.toString().slice(0, -1),
    };       
  case CHANGE_SIGN:
    return {
      ...state,
      display: +state.display * -1,
    };   
  default:
    return state;
  }
};

export default calculatorReducer;
import { CALCULATOR_ACTIONS } from '../../constants';

export function updateDisplay(value){
  return {
    type: CALCULATOR_ACTIONS.UPDATE_DISPLAY,
    payload: value,
  };
}

export function operator(value){
  return {
    type: CALCULATOR_ACTIONS.OPERATOR,
    payload: value,
  };
}
export function updatePreviousValue(){
  return {
    type: CALCULATOR_ACTIONS.PREVIOUS_VALUE,
  };
}
export function equal(){
  return {
    type: CALCULATOR_ACTIONS.EQUAL,
  };
}

export function clearDisplay(){
  return {
    type: CALCULATOR_ACTIONS.CLEAR_DISPLAY,
  };
}

export function clearHistory(){
  return {
    type: CALCULATOR_ACTIONS.CLEAR_HISTORY,
  };
}

export function clearAll(){
  return {
    type: CALCULATOR_ACTIONS.CLEAR_ALL,
  };
}

export function deleteLastNumber(){
  return {
    type: CALCULATOR_ACTIONS.DELETE_LAST_NUMBER,
  };
}

export function changeSign(){
  return {
    type: CALCULATOR_ACTIONS.CHANGE_SIGN,
  };
}

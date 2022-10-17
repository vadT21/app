import React, { 
  useState,
} from 'react';
import { 
  useSelector,
  useDispatch,
} from 'react-redux';
import { 
  Style, 
  BasicOperations,
  Digits,
  SubOperations,
  AdvancedOperations,
  Title,
} from './components';
import {
  updateDisplay,
  operator,
  updatePreviousValue,
  equal,
  clearDisplay,
  clearAll,
  deleteLastNumber,
  changeSign,
} from '../../../../store/actions';

const Keypad = () => {

  const title = 'Keypad';
  
  // This status is needed to control the value after calculation
  //  in order not to add numbers at the end of the value
  const [updatedStatus, setUpdatedStatus] = useState(false);
  
  const {
    display,
    previousValue,
    isOperator,
  } = useSelector(state => {
    return {
      display: state.calculatorReducer.display,
      previousValue: state.calculatorReducer.previousValue,
      isOperator: state.calculatorReducer.operator,
    };
  });
  const dispatch = useDispatch();

  // Click handlers for realization pattern "Command"
  const updateDisplayHandler = (event) => {
    if(updatedStatus && !previousValue){
      dispatch(clearDisplay());
      setUpdatedStatus(false);
    }
    const value = event.target.value;
    dispatch(updateDisplay(value));  
  };
  const operatorHandler = (event) => {
    const value = event.target.value;
    if (isOperator){
      if (display){
        dispatch(equal());
        dispatch(operator(value));
        dispatch(updatePreviousValue());
      } else {
        dispatch(operator(value));
      }  
    } else {
      dispatch(operator(value));
      dispatch(updatePreviousValue());
    }
  };
  const equalHandler = () => {
    if(previousValue && display){
      dispatch(equal());
      setUpdatedStatus(true);
    } 
  };
  const dotHandler = (event) => {
    if (Number.isFinite(+display)){
      const value = +display 
        ? event.target.value 
        : '0' + event.target.value; 

      if (!display.toString().includes('.')){
        dispatch(updateDisplay(value));
      }
    }
  };
  const clearDisplayHandler = () => {
    dispatch(clearDisplay());
  };
  const clearAllHandler = () => {
    dispatch(clearAll());
  };
  const deleteLastNumberHandler = () => {
    if (display 
      && 
      Number.isFinite(+display)
      &&
      !display.toString().includes('e')
    ){
      dispatch(deleteLastNumber());
    } 
  };
  const changeSignHandler = () => {
    if (+display){
      dispatch(changeSign());
    }
  };

  // Button values and their handlers if needed
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; 
  const basicOperations = ['+', '-', '/', '*'];
  const subOperations = [ 
    { value: '.', actionHandler: dotHandler},
    { value: '=', actionHandler: equalHandler}, 
  ];
  const advancedOperations = [
    {value: 'C', actionHandler: clearDisplayHandler}, 
    {value: 'AC', actionHandler: clearAllHandler}, 
    {value: '<', actionHandler: deleteLastNumberHandler},
    {value: '+/-', actionHandler: changeSignHandler},
  ];


  return (
    <Style>
      <Title>
        { title }
      </Title>
      {
        digits.map((element, index)=> 
          <Digits 
            key = {index} 
            value = {element} 
            onClick={updateDisplayHandler}> 
            {element}
          </Digits>)
      }
      {
        basicOperations.map((element, index)=> 
          <BasicOperations 
            key = {index} 
            value = {element} 
            onClick={operatorHandler}> 
            {element}
          </BasicOperations>)
      }
      {
        advancedOperations.map((element, index)=> 
          <AdvancedOperations 
            key = {index} 
            onClick={element.actionHandler}> 
            {element.value}
          </AdvancedOperations>)
      }
      {
        subOperations.map((element, index)=> 
          <SubOperations 
            key = {index} 
            value= {element.value} 
            onClick = {element.actionHandler} > 
            {element.value}
          </SubOperations>)
      }
    </Style>
  );
};

export default Keypad;

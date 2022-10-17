import React from 'react';
import { 
  useSelector,
} from 'react-redux';
import { 
  Element, 
  Style, 
  Title,
} from './components';

const Display = () => {

  const title = 'Display';
  
  const {
    previousValue,
    operator,
    display,
  } = useSelector(state => state.calculatorReducer);

  const displayElements = [
    previousValue, 
    operator, 
    display,
  ];

  return (
    <Style>
      <Title>
        { title }
      </Title>
      {
        displayElements.map((el, index) => 
          <Element key = {index}>
            { el }
          </Element>
        )
      }
    </Style>
  );
};

export default Display;
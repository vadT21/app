import React from 'react';
import { 
  useSelector,
} from 'react-redux';
import { 
  Style,  
  Element, 
  Title, 
} from './components';


const History = () => {

  const title = 'History';
    
  const history = useSelector(state => state.calculatorReducer.history);
    
  return (
    <Style>
      <Title> 
        { title }
      </Title>
      {
        history.length
          ?
          history.map((el, index) => 
            <Element 
              key={index}>
              {
                `
                ${el.values[0]}
                ${el.operator}
                ${el.values[1]}
                =
                ${el.result}
                `
              }
            </Element>
          )
          :
          <Element>
            Empty history
          </Element>
      }  
    </Style>
  );
};

 
 
export default History;
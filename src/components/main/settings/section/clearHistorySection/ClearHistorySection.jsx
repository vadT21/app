import React from 'react';
import { 
  useDispatch,
} from 'react-redux';
import { 
  clearHistory,
} from '../../../../../store/actions';
import {
  Section,
  Button,
  Title,
} from './components';


const ClearHistorySection = ()  => {

  const title = 'Clear all history';

  const dispatch = useDispatch();
  const clearHistoryHandler = () => {
    return dispatch(clearHistory());
  };

  return (
    <Section>
      <Title>
        {title}
      </Title>
      <Button 
        onClick = {clearHistoryHandler}
      >
        {title}
      </Button>
    </Section>

  );
};

export default ClearHistorySection;
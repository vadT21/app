import React, { 
  useState,
} from 'react';
import { 
  Style, 
  Swap, 
  Title, 
} from './components';
import Display from './display/Display';
import History from './history/History';
import Keypad from './keypad/Keypad';

export default function Calculator() {

  const title = 'Calculator';

  // in this components was implemented conditional rendering 
  //to display calculator or operation history
  const [state , setState] = useState(true);
  const switchAction = () => {
    setState(!state);
  };


  return (
    <Style>
      <Title>
        { title }
      </Title>
      {
        state
          ?
          <>
            <Display />
            <Keypad />
          </>
          :
          <>
            <History />
          </>
        
      }
      <Swap onClick = {switchAction}> 
        Swap
      </Swap>
    </Style>
  );
}

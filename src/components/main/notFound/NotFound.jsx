import React from 'react';
import { 
  APP_PAGE_LINK, 
  NOT_FOUND_PAGE_LINK,
} from '../../../constants/links';
import { 
  Style,
  Title,
  Text,
  ErrorLink,
  Button,
} from './components';


const NotFound = () => {

  const title = 'Not found page';

  return (
    <Style>
      <Title>
        { title }
      </Title>
      <Text>
        {NOT_FOUND_PAGE_LINK.title}
      </Text>
      <ErrorLink
        to = {APP_PAGE_LINK.link}
      >
        <Button>
          {APP_PAGE_LINK.title}
        </Button>
            
      </ErrorLink>
    </Style>
  );
};

export default NotFound;
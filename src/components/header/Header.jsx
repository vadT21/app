import React from 'react';
import Navigation from './navigation/Navigation';
import { 
  Style, 
  Title, 
} from './components';

const Header = () => {

  const title = 'AppCalc';
  
  return (
    <Style>
      <Title>
        { title }
      </Title>
      <Navigation />
    </Style>
  );
};

export default Header;

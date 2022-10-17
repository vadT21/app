import React from 'react';
import { 
  APP_PAGE_LINK,
  SETTINGS_PAGE_LINK,
} from '../../../constants';
import { 
  Style, 
  Element, 
  List, 
  NavigationLink,
  Img,
} from './components';

const Navigation = () => {

  const links = [
    APP_PAGE_LINK,
    SETTINGS_PAGE_LINK,
  ];

  return (
    <Style>
      <List>
        {
          links.map( (el) => {
            return (
              <NavigationLink 
                to = {el.link} 
                key = {el.title}
              >
                <Element>
                  <Img
                    src = {el.icon.src}
                    alt = {el.icon.alt}
                  />
                </Element>
              </NavigationLink>
            );
          })
        }
      </List>
    </Style>
  );
};

export default Navigation;

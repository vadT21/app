import React from 'react';
import { 
  useDispatch, 
  useSelector,
} from 'react-redux';
import { 
  Select, 
  Option,
  Title,
  Section,
} from './components';
import { 
  changeTheme,
} from '../../../../../store/actions';
import { 
  classicTheme, 
  gothicTheme,
  magentaTheme,
} from '../../../../../styles/theme';

const ThemeSection = () => {

  const title = 'Theme';

  const dispatch = useDispatch();
  const changeThemeHandler = (event) => {
    const value = event.target.value;
    switch(value){
    case classicTheme.title:
      return dispatch(changeTheme(classicTheme));
    case gothicTheme.title:
      return dispatch(changeTheme(gothicTheme));
    case magentaTheme.title:
      return dispatch(changeTheme(magentaTheme));   
    default: 
      return;
    }
        
  };
  const defaultValue = useSelector(state => state.themeReducer.theme.title);
    
  const theme = [
    classicTheme, 
    gothicTheme,
    magentaTheme,
  ];

  return (
    <Section>
      <Title>
        { title }
      </Title>
      <Select 
        onChange={changeThemeHandler}
        value = {defaultValue}
      >
        {
          theme.map((el) => {
            return (
              <Option 
                value = {el.title}
                key = {el.title}
                color = {el.colors}
              >
                { el.title }
              </Option>
            );
          })
        }
      </Select>
    </Section>

  );
};

export default ThemeSection;
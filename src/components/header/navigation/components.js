import styled from 'styled-components';
import { 
  Link,
} from 'react-router-dom';

export const Style = styled.nav`
    display: flex;
    padding: 0px 10px;
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    justify-contens: space-between;
    overflow: hidden;
`;
export const Element = styled.li`
    border-radius: 50%;
    background-color: ${({theme}) => theme.colors.bgColor};
    width 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        background-color: ${({theme}) => theme.colors.secondaryColor};
      } 
    :active {
        background-color: ${({theme}) => theme.colors.primaryColor};
    }
`;
export const Img = styled.img`
    width: 80%;
    height: 80%;
    filter: brightness(0.5);
`;

export const NavigationLink = styled(Link)`
  text-decoration: none;
  padding: 0 5px;

  
`;
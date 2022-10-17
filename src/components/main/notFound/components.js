import { 
  Link,
} from 'react-router-dom';
import styled from 'styled-components';

export const Style = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const Title = styled.h2`
    display: none;
`;

export const Text = styled.p`
    font-size: 32px;
    padding-bottom: 20px;
`;
export const Button = styled.button`
    width: 100px;
    height: 50px;
    background-color: ${({theme}) => theme.colors.bgColor};
    color: ${({theme}) => theme.colors.textColor};
    font-size: 20px;
    font-weight: 600;
    padding: 10px;
    border-radius: 10px;    
    letter-spacing: 1px;

    :hover {
        background-color: ${({theme}) => theme.colors.secondaryColor};
      } 
    :active {
        background-color: ${({theme}) => theme.colors.primaryColor};
    }
`;

export const ErrorLink = styled(Link)`

    text-decoration: none;

    :hover {
        transform: scale(1.15);
    }

`;
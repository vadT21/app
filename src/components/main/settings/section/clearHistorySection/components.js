import styled from 'styled-components';

export const Title = styled.h3`
    display: none;
`;

export const Button = styled.button`
    background-color: ${({theme}) => theme.colors.bgColor};
    color: ${({theme}) => theme.colors.textColor};
    font-size: 16px;
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
export const Section = styled.section`
    padding: 10px 30px;

`;
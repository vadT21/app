import styled from 'styled-components';

export const Section = styled.section`
    padding: 10px 30px;
    display: flex;
`;
export const Title = styled.h3`
    padding-right: 10px;
    text-shadow: ${({theme}) => theme.textShadow};
`;
export const Select = styled.select`
    background-color: ${({theme})=> theme.colors.bgColor};
    font-size: 16px;
    font-weight: 600;
    border-radius: 10px;
    border-width: 3px;
    border-color: ${({theme})=> theme.colors.navColor}; 
    padding: 0 2px;
`;
export const Option = styled.option`
    font-size: 16px;
    font-weight: 600;
    background-color: ${({color})=> color.bgColor};
`;
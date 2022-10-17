import styled from 'styled-components';

export const Style = styled.section`
    display: flex;
    flex-wrap: wrap;
    height: 85%;
    border: 10px solid ${({theme}) => theme.colors.navColor};
    border-radius: 0 0 20px 20px;
    
    @media (max-width: 1024px) and (orientation: landscape){
        height: 65%;
    }
`;
export const Title = styled.h3`
    display: none;
`;

export const Button = styled.button`
    color: ${({theme}) => theme.colors.textColor};
    flex: 0 0 25%;
    background-color: ${({theme}) => theme.colors.primaryColor};
    border-color: ${({theme}) => theme.colors.navColor};
    font-size: 28px;
    border-radius: 5px;

    @media (max-width: 1024px) and (orientation: landscape){
        flex: 0 0 20%;
    }
`;
export const Digits = styled(Button)`
    order: 3;
`;
export const SubOperations = styled(Button)`
    order: 4;
`;
export const BasicOperations = styled(Button)`
    order: 2;
`;
export const AdvancedOperations = styled(Button)`
    order: 1;
`;
import styled from 'styled-components';

export const Style = styled.header`
    width: 100%;
    height: 40px;
    background-color: ${({theme}) => theme.colors.navColor};
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 24px;
    color: ${({theme}) => theme.colors.textColor};
    user-select: none;
`;


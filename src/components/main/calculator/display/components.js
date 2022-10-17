import styled from 'styled-components';

export const Style = styled.section`
    display: flex;
    flex-direction: column;
    border: 10px solid ${({theme}) => theme.colors.navColor};
    border-radius: 20px 20px 0px 0px;
    position: relative;
    height: 15%;
    padding: 10px 20px 10px 70px;
    overflow: hidden;
    background-color: ${({theme}) => theme.colors.secondaryColor};

    @media (max-width: 1024px) and (orientation: landscape){
        height: 35%;
    }
`;
export const Title = styled.h3`
    display: none;
`;

export const Element = styled.p`
    text-align: end;
    height: 33%;
    font-size: calc(18px + (22 - 18) * ((100vw - 500px) / (1920 - 500)));
    text-shadow: ${({theme}) => theme.textShadow};
    font-weight: 600;
    color: ${({theme}) => theme.colors.textColor};
    

    :nth-child(3){
        margin-right: -14px;
    }
`;
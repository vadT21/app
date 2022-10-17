import styled from 'styled-components';
import {
  device,
  size,
} from '../../../styles/propotions';

export const Style = styled.main`
    border: 10px solid ${({theme}) => theme.colors.navColor};
    border-radius: 20px;
    padding: 20px 20px;
    background-color: ${({theme}) => theme.colors.secondaryColor};
    color: ${({theme}) => theme.colors.textColor};
    dispaly: flex;
    flex-direction: column;
    margin-top: 20px;
    letter-spacing: 1px;
    width: ${size.laptop.width};
    height: ${size.laptop.height};

    @media screen and ${device.mobile}{
        width: ${size.mobile.width};
        height: ${size.mobile.height};
    }
`;

export const Title = styled.h2`
    padding-bottom: 10px;
    text-shadow: ${({theme}) => theme.textShadow};
`;



import styled from 'styled-components';
import {
  device,
  size,
} from '../../../styles/propotions';

export const Style = styled.main`
    display: flex;
    flex-direction: column;
    position: relative;
    padding-top: 20px;
    width: ${size.laptop.width};
    height: ${size.laptop.height};
    overflow: hidden;
    @media screen and ${device.mobile}{
        width: ${size.mobile.width};
        height: ${size.mobile.height};
        padding-top: 10px;
    }
`;

export const Title = styled.h2`
    display: none;
`;

export const Swap = styled.button`
    position: absolute;
    top: 35px;
    left: 20px;
    width: calc(36px + (50 - 36) * ((100vw - 500px) / (1920 - 500)));
    height: calc(36px + (50 - 36) * ((100vw - 500px) / (1920 - 500)));
    background-color: ${({theme}) => theme.colors.bgColor};
    border-color: ${({theme}) => theme.colors.primaryColor};
    border-radius: 10px;

    :hover {
        background-color: ${({theme}) => theme.colors.secondaryColor};
    }
    :active{
        background-color: ${({theme}) => theme.colors.primaryColor};
    }
    font-size: calc(12px + (16 - 12) * ((100vw - 500px) / (1920 - 500)));
    font-weight: 600;
`;
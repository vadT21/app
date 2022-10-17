import styled from 'styled-components';

export const Style = styled.section`
    overflow-x: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    border: 10px solid ${({theme}) => theme.colors.navColor};
    border-radius: 20px;
    padding: 20px 0;
    background-color: ${({theme}) => theme.colors.secondaryColor};
    color: ${({theme}) => theme.colors.textColor};
    font-size: 18px;
    font-weight: 300;
    height: 100%;
    
    scrollbar-color: ${({theme}) => theme.colors.secondaryColor};
    scrollbar-width: thin;
    ::-webkit-scrollbar {
        width: 12px;              
      }  
    ::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.colors.navColor};    
        border-radius: 20px;      
      }
    
   
`;
export const Title = styled.h3`
    display: none;
    text-align: center; 
`;
export const Element = styled.p`
    text-align: center;
    padding-bottom: 5px;
    //text-shadow: ${({theme}) => theme.textShadow};
    letter-spacing: 0.25px;
`;

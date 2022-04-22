import styled from "styled-components";


export const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: auto;
    margin: 30vh auto 32px auto;
`;

export const LogoStyled = styled.h1`
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 48px;
    font-size-adjust: initial;
    font-weight: 700;
    letter-spacing: 12px;
    line-height: 54px;
    color: #f8f8f8;
    margin: 8px auto 0 auto;
    animation: ease-in 0.5ms linear;
    &:hover {
        background: linear-gradient(-270deg, #f0f0f0 0%, #96B566 50%, #f0f0f0 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        &  h3 {
            &:hover {
                background: linear-gradient(-270deg, #fff 0%, #96B566 40%, #f0f0f0 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }
`;

export const LogoDescriptionStyled = styled.h3`
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 24px;
    font-size-adjust: initial;
    font-weight: 400;
    letter-spacing: 6px;
    line-height: auto;
    color: #f8f8f8;
    margin: 0 8px auto;
`;
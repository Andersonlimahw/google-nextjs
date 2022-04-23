import styled from "styled-components";

export const FooterStyled = styled.footer`
    font-family: 'Plus Jakarta Sans', sans-serif;
    background: ${(props) => props.theme.colors.primary['050']};
    color: ${(props) => props.theme.colors.neutral['050']};
    border-top: 2px solid ${(props) => props.theme.colors.neutral['900']};
    padding: 32px;
    margin: auto;
    position: fixed;
    bottom: 0;
    width: 100%;
    align-items: center !important;
`;

export const FooterIconsContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 3;
`;

export const FooterIconStyled = styled.img`
    flex: 1;
    margin: 16px;
    height: 24px;
    width: 24px;
    animation: transition ease-in 0.5s;

    &:hover {
        transform: scale(1.2);
        cursor: pointer;
        border: 2px solid ${(props) => props.theme.colors.neutral['050']};
        border-radius: 50%;
    }
`;
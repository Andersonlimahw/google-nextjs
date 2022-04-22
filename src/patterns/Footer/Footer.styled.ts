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
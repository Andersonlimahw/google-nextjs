import styled from "styled-components";

export const InputStyled = styled.input`
    width: 90vw;
    max-width: 1200px;
    margin: auto;
    border: 2px solid ${(props) => props.theme.colors.neutral['050']};
    padding-left: 64px;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-right: 64px;
    background: ${(props) => props.theme.colors.primary['900']};
    color: ${(props) => props.theme.colors.neutral['050']};
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: ${(props) => props.theme.typography.variants.body1};
    border-radius: ${(props) => props.theme.space.x10};
    outline: none;
    ::placeholder {
        color: ${(props) => props.theme.colors.neutral['050']};
        font-style: italic;
        font-weight: 100;
        font-size: ${(props) => props.theme.typography.variants.body1};
    }
`;

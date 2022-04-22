import styled from "styled-components";

export const InputStyled = styled.input`
    width: 90vw;
    margin: auto;
    border: 2px solid ${(props) => props.theme.colors.neutral['050']};
    padding: ${(props) => props.theme.space.x6} ${(props) => props.theme.space.x10};
    background: ${(props) => props.theme.colors.primary['900']};
    color: ${(props) => props.theme.colors.neutral['050']};
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: ${(props) => props.theme.typography.variants.body4};
    border-radius: ${(props) => props.theme.space.x10};
    outline: none;
    ::placeholder {
        color: ${(props) => props.theme.colors.neutral['050']};
        font-style: italic;
        font-weight: 100;
    }
`;

export const IconStyled = styled.span`
    &::before {
        content: "🔍";
        display: inline-flex;
        position: relative;
        margin-right: -30px;
    }
`;

import styled from "styled-components";

export const InputStyled = styled.input`
    width: 90vw;
    margin: auto;
    border: 2px solid ${(props) => props.theme.colors.neutral['050']};
    padding: ${(props) => props.theme.space.x4};
    background: ${(props) => props.theme.colors.primary['900']};
    color: ${(props) => props.theme.colors.neutral['050']};
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: ${(props) => props.theme.typography.variants.body4};
    border-radius: ${(props) => props.theme.space.x10};
`;
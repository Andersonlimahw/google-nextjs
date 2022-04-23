import styled from "styled-components";

export const InputStyled = styled.input`
    width: 90vw;
    margin: auto;
    border: 2px solid ${(props) => props.theme.colors.neutral['050']};
    padding-left: 64px;
    padding-top: 24px;
    padding-bottom: 24px;
    padding-right: 64px;
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

export const IconStyled = styled.div`
    background-image: url('/icons/search.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 24px;
    height: 24px;
    position: absolute;
    left: 50px;
    margin-top: 22px;
`;

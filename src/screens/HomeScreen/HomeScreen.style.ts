import styled from "styled-components";
export const LogoStyled = styled.img`
    width: auto;
    max-width: 272px;
    height: auto;
    margin: 32px auto;
    padding: 8px ${(props) => props.theme.space.x4};
`;

export const ContainerStyled = styled.div`
    width: 100vw;
    height: auto;
    margin: 8px auto;
    form {
        width: 100vw;
        margin: auto;
        text-align: center;
    }
`;
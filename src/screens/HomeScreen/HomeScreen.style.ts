import styled from "styled-components";

export const ContainerStyled = styled.div`
    width: 100vw;
    height: 120px;
    margin: 8px auto;
    form {
        width: 100vw;
        margin: 0 auto;
        text-align: center;
    }
`;

export const LogoStyled = styled.img`
    width: auto;
    max-width: 272px;
    height: auto;
    margin: 30vh auto 32px auto;
    padding: 8px ${(props) => props.theme.space.x4};
`;
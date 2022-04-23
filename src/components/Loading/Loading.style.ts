import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    padding: 16px 32px 176px 16px;

    @media(max-width: 1024px) {
        padding: 16px 16px;
    }
`;

export const ContainerItem = styled.div`
    flex-grow: 1;
    padding: 16px 0;
    min-width: 100%;
    margin-bottom: 48px;
`;
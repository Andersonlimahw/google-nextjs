import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    padding: 16px 32px;

    @media(max-width: 1024px) {
        padding: 16px 16px;
    }
`;

export const ContainerItem = styled.div`
    flex-grow: 4;
    color: #fff;
    padding: 16px 0;
`;
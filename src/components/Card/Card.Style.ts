import styled from "styled-components";

export const CardContainer = styled.div`
    background: ${(props) => props.theme.colors.neutral['050']};
    color: ${(props) => props.theme.colors.primary['050']};
    font-weight: 500;
    padding: 24px;
    border: 1px solid ${(props) => props.theme.colors.primary['050']};
    border-radius: 8px;
    box-shadow: 2px 4px 2px ${(props) => props.theme.colors.neutral['050']};
    margin: 32px auto;
`;

export const CardHeader = styled.div`
    padding: 8px 0;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;


export const CardHeaderICon = styled.div`
    text-align: center;
    vertical-align: center;
    font-size: 10px;
    width: 16px;
    height: 16px;
    background-color: ${(props : any) => props['data-color']};
    border-radius:  60%;
    margin-right: 8px;
    color: ${(props) => props.theme.colors.primary['050']};
    cursor: pointer;
`;

export const CardTitle = styled.h3`
    padding: 8px 0;
    color: ${(props) => props.theme.colors.primary['050']};

    a {
        color: ${(props) => props.theme.colors.primary['050']};
        font-weight: bold;

        &:hover {
            color: ${(props) => props.theme.colors.neutral['900']};
            text-decoration: underline;
        }
    }
`;

export const CardDescription = styled.p`
    padding: 8px 0;
`;

export const CardCite = styled.p`
    padding: 8px 0;
`;


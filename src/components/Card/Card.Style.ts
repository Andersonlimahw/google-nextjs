import styled from "styled-components";

export const CardContainer = styled.div`
    /* background: ${(props) => props.theme.colors.primary['050']};
    color: ${(props) => props.theme.colors.neutral['000']}; */
    background: ${(props) => props.theme.colors.neutral['050']};
    color: ${(props) => props.theme.colors.primary['050']};
    font-weight: 500;
    padding: 24px;
    border: 1px solid ${(props) => props.theme.colors.primary['050']};
    border-radius: 8px;
    box-shadow: 2px 4px 2px ${(props) => props.theme.colors.neutral['050']};
    margin: 16px auto;
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


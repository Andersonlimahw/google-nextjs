import styled from "styled-components";
import { SkeletonProps, ESkeletonVariant } from ".";

const SkeletonPulse = styled.div`
    display: inline-block;
    height: 100%;
    width: 100%;
    background: linear-gradient(-90deg, #f0f0f0 0%, #333 50%, #f0f0f0 100%);
    background-size: 400% 400%;
    animation: pulse 1.2s ease-in-out infinite;
    @keyframes pulse {
    0% {
        background-position: 0% 0%;
    }
    100% {
        background-position: -135% 0%;
    }
    }
`;

export const SkeletonLine = styled(SkeletonPulse)`
    width: ${(props : SkeletonProps) => props.width};
    height: ${(props: SkeletonProps) => props.height};
    border-radius: ${(props: SkeletonProps) =>
        props.variant === ESkeletonVariant.circle ?
        '50%' :
        '6px'};

    &::before {
        content: "\00a0";
    }
`;
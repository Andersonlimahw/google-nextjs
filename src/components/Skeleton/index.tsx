export enum ESkeletonVariant {
    circle = 'circle',
    text = 'text'
}
export type SkeletonProps = {
    width?: string;
    height?: string;
    variant?: ESkeletonVariant;
};

import {
    SkeletonLine
} from './Skeleton.style';

export const Skeleton = ({
    width = '100%',
    height = '24px',
    variant = ESkeletonVariant.text,
}: SkeletonProps) => {
    return <SkeletonLine
        width={width}
        height={height}
        variant={variant}
    />
}
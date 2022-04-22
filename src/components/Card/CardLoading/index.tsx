import { ESkeletonVariant, Skeleton } from "../../Skeleton";
import {
  CardCite,
  CardContainer,
  CardDescription,
  CardHeader,
  CardHeaderICon,
  CardTitle,
} from "../Card.Style";

export const CardLoading = () => {
  return (
    <CardContainer
        data-loading={true}
    >
      <CardHeader>
        <CardHeaderICon>
          <Skeleton
            variant={ESkeletonVariant.circle}
            width="10px"
            height="10px"
          />
        </CardHeaderICon>
        <CardHeaderICon>
          <Skeleton
            variant={ESkeletonVariant.circle}
            width="10px"
            height="10px"
          />
        </CardHeaderICon>
        <CardHeaderICon>
          <Skeleton
            variant={ESkeletonVariant.circle}
            width="10px"
            height="10px"
          />
        </CardHeaderICon>
      </CardHeader>
      <CardTitle>
        <Skeleton />
      </CardTitle>
      <CardDescription>
        <Skeleton />
      </CardDescription>
      <CardCite>
        <Skeleton />
      </CardCite>
    </CardContainer>
  );
};

export default CardLoading;
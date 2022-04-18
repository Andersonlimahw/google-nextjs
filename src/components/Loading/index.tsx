import Card from "../Card";
import { Container, ContainerItem } from "./Loading.style";

type LoadingProps = {
    itemsLength: number;
};

export const Loading = ({ itemsLength }: LoadingProps) => {
  return (
    <Container>
      <ContainerItem>
        {Array.from({ length: itemsLength }).map((x, index: number) => (
          <Card
            key={`${index}_${x}`}
            title="Carrregando..."
            description="..."
            link=""
            cite="..."
         />
        ))}
      </ContainerItem>
    </Container>
  );
};

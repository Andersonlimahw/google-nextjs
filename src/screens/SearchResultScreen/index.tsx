import Card from "../../components/Card";
import SearchModel from "../../domain/models/searchModel";
import {
  Container,
  ContainerItem
} from './SearchResultScreen.styled';

type Props = {
  data: any;
  date: string;
};
const SearchResultScreen = ({ data, date }: Props) => {
  console.log("[SearchResultScreen]: data => ", data);
  return (
    <Container>
      <ContainerItem>
        <h1>
          Results &nbsp;
          <small>
            updated at: {date}
          </small>
        </h1>
      </ContainerItem>
      <div>
        {data &&
          data.results.map((x: SearchModel, index: number) => (
            <Card
              key={`${index}_${x.title}`}
              title={x.title}
              description={x.description}
              link={x.link}
              cite={`${x.cite.domain ?? "..."}`}
            />
          ))}
      </div>
    </Container>
  );
};

export default SearchResultScreen;

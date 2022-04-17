type Props = {
  data: any;
  date: string;
};
const SearchResultScreen = ({ data, date }: Props) => {
  console.log("[SearchResultScreen]: data => ", data);
  return (
    <>
      Updated date : {date}
      <ul>
        {data &&
          data.results.map((x: any, index: number) => (
            <li key={`${index}_${x.title}`}>
              {x.title}
              <br />
              {x.link}
            </li>
          ))}
      </ul>
    </>
  );
};

export default SearchResultScreen;

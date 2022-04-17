import { NextPageContext } from "next";
import googleService from "../src/infra/services/googleService";
import SearchResultScreen from "../src/screens/SearchResultScreen";
export default SearchResultScreen;

export async function getServerSideProps(context : NextPageContext) {
    const query = context.query;
    const searchValue = query.searchValue ?? 'Steve Jobs';
    const searchResult =
        await googleService({ search: searchValue.toString() })
            .then(data => data);
    console.log(context);
    return {
        props: {
            title: 'Google search with next',
            date: new Date().toLocaleString('pt-BR'),
            data: searchResult
        }
    }
}
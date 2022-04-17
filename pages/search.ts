import googleService from "../src/infra/services/googleService";
import SearchResultScreen from "../src/screens/SearchResultScreen";
export default SearchResultScreen;

export async function getServerSideProps(context: any) {
    const searchResult = 
        await googleService({ search: 'Elon musk'}).then(data => data);
    console.log('[context] => ', context);
    return {
        props: {
            title: 'Google serch with next',
            date: new Date().toLocaleDateString('pt-BR'),
            data: searchResult
        }
    }
}
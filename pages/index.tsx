import googleService from "../src/infra/services/googleService";
import HomeScreen from "../src/screens/HomeScreen";
export default HomeScreen;

export async function getServerSideProps() {
    const searchResult = 
        await googleService({ search: 'Elon musk'}).then(data => data)
    return {
        props: {
            title: 'Google serch with next',
            date: new Date().toLocaleDateString('pt-BR'),
            data: searchResult
        }
    }
}
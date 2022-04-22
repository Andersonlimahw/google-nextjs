import { useState } from 'react';
import { useRouter } from 'next/router';
import {
    Input
} from '../../components/Input';
import {
    ContainerStyled
} from "./HomeScreen.style";
import { Logo } from '../../components/Logo';


const HomeScreen = () => {
    const router = useRouter();
    const [searchValue, setSearchValue] = useState('');

    function redirectToSearchResultPage(event:any) {
        event.preventDefault();
        router.push({
            pathname: '/search', 
            query: {
                searchValue: searchValue,
            },
        }, 'search')
    }

    function handleSearchOnBlur(event : any) {
        if(searchValue && searchValue.length > 1) {
            redirectToSearchResultPage(event);
        }
    }
    return (
        <ContainerStyled>
            <Logo />
            <form
                onSubmit={redirectToSearchResultPage}
            >
                <Input
                    type="text"
                    placeholder='let me google it for you'
                    value={searchValue}
                    onChange={(event : any) => setSearchValue(event.target.value)}
                    onBlur={handleSearchOnBlur}
                />
            </form>
        </ContainerStyled>
    )
}

export default HomeScreen;
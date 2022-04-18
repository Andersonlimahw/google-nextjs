import { useState } from 'react';
import { useRouter } from 'next/router';
import {
    Input
} from '../../components/Input';
import { 
    ContainerStyled, LogoStyled 
} from "./HomeScreen.style";


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
            <LogoStyled
                src="/images/google_logo.png"
                alt="logo"
            />
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
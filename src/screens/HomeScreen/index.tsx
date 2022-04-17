import { useState, useEffect } from 'react';
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
  
    function redirecToSearchResultPage(event:any) {
        event.preventDefault();
        router.push({
            pathname: '/search', 
            query: {
                query: searchValue,
            },
        }, 'search')
    }
    return (
        <ContainerStyled>
            <LogoStyled 
                src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
                alt="logo"
            />
            <form 
                onSubmit={redirecToSearchResultPage}
            >
                <Input 
                    type="text"
                    value={searchValue}
                    onChange={(event : any) => setSearchValue(event.target.value)}
                /> 
            </form>
           
           
        </ContainerStyled>
    )
}

export default HomeScreen;
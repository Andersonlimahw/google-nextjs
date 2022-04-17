import { useState } from 'react';
import {
    Input
} from '../../components/Input';
import { 
    ContainerStyled, LogoStyled 
} from "./HomeScreen.style";

const HomeScreen = () => {
    const [searchValue, setSearchValue] = useState('');
    return (
        <ContainerStyled>
            <LogoStyled 
                src="https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png"
                alt="logo"
            />
            <Input 
                type="search"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
            /> 
        </ContainerStyled>
    )
}

export default HomeScreen;
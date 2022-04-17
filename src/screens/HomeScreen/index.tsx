import { useState } from 'react';
import {
    Input
} from '../../components/Input';
import { 
    ContainerStyled, LogoStyled 
} from "./HomeScreen.style";

type Props = {
    data: any, 
    date: string
}
const HomeScreen = ({ data } : Props) => {
    const [searchValue, setSearchValue] = useState('');
    console.log('[HomeScreen]: data => ', data);
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
            <ul>
                {
                    data && data.results.map((x : any) => (
                        <li key={x.title}>
                            {x.title}
                            <br />
                            {x.link}
                        </li>
                    ))
                }
            </ul>
        </ContainerStyled>
    )
}

export default HomeScreen;
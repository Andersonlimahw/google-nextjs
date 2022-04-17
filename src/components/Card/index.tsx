type CardProps = {
    title: string;
    description: string;
    link: string;
    cite: string;
}

import {
    CardContainer,
    CardTitle,
    CardDescription, 
    CardCite
} from './Card.Style';
const Card = ({ title, description, link, cite} : CardProps) => {
    return(
        <CardContainer>
            <CardTitle>
                <a href={link}>
                    {title}
                </a>
            </CardTitle>
            <CardDescription>
             {description}
            </CardDescription>
            <CardCite>
             {cite}
            </CardCite>
        </CardContainer>
    )
}

export default Card;
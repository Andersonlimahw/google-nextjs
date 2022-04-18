import Link from 'next/link';

import {
    CardContainer,
    CardHeader,
    CardHeaderICon,
    CardTitle,
    CardDescription,
    CardCite
} from './Card.Style';

type CardProps = {
    title: string;
    description: string;
    link: string;
    cite: string;
}
const Card = ({ title, description, link, cite} : CardProps) => {
    function openExternalUrl(url : string) {
        window.open(
            url,
            '_blank'
        )
    }
    return(
        <CardContainer>
            <CardHeader>
                <Link href='/'>
                    <CardHeaderICon
                        data-color="rgb(255,69,28, 0.8)"
                    >
                        &times;
                    </CardHeaderICon>
                </Link>
                <Link href='/'>
                    <CardHeaderICon
                        data-color="rgb(255,210,1, 0.8)"
                    >
                        &minus;
                    </CardHeaderICon>
                </Link>
                <CardHeaderICon
                    data-color="rgb(48,209,20, 0.8)"
                    onClick={() => openExternalUrl(link)}
                >
                    &#10011;
                </CardHeaderICon>
            </CardHeader>
            <CardTitle>
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                >
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
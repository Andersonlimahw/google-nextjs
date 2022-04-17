import NextHead from 'next/head';
type Props = {
    title: string
}

const Head = ({title} : Props) => (
    <NextHead>
        <title>
            {title}
        </title>
    </NextHead>
);

export default Head;
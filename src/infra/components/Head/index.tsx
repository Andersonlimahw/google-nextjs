import NextHead from 'next/head';
type Props = {
    title: string;
    children?: any;
}

const Head = ({title, children } : Props) => (
    <NextHead>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <meta name="description" content="A Google clone with nextjs by 🍋  Lemon" />
        <meta name="keywords" content="Nextjs, Google, next, react, reactjs, andersonlimahw, github, front-end" />
        <meta name="author" content="Anderson Lima" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#121212"></meta>
        <title>
            {title}
        </title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />

        {children}
    </NextHead>
);

export default Head;
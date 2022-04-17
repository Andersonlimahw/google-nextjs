type Props = {
    data: any, 
    date: string
}
const SearchResultScreen = ({data, date} : Props) => {
    console.log('[SearchResultScreen]: data => ', data);
    return (
        <>
            Resultados : {date}
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
        </>
    )
}

export default SearchResultScreen;
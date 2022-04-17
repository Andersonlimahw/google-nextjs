export type SearchModel = {
    title: string;
    description: string;
    link: string;
    cite: CiteModel;
}

export type CiteModel = {
    domain: string;
    span: string;
}

export default SearchModel;
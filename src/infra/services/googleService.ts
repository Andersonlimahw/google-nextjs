type SearchProps = {
    search: string;
}

const options = {
	method: 'GET',
	headers: {
		'X-User-Agent': 'desktop',
		'X-Proxy-Location': 'EU',
		'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
		'X-RapidAPI-Key': 'f7f188c34cmshe540af240fecaffp1f0228jsnf976f10f2829'
	}
};

const URL = 'https://google-search3.p.rapidapi.com/api/v1/search/q=:search'

const googleService = async ({ search } : SearchProps) => {
    try {
        return await fetch(URL.replace(':search', search), options)
        .then(response => response.json())
        .then(response => {
            console.log('[Success][googleService]',response);
            return response;
        })
        .catch(error => console.error('[Error][googleService]', error));
    } catch(error : any) {
        console.error(error);
        throw new Error(error.toString());
    } finally {
        console.log('[Finally][googleService: request finished]')
    }
};
export default googleService;
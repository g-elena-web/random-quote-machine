export default class QapiService {

    _apiBase = 'https://api.quotable.io/random?maxLength=100';

    async getRandomQuote() {
        const response= await fetch(this._apiBase);
        if (!response.ok) {
            throw new Error(`Could not fetch quote, received ${response.status}`);
          }
        const data = await response.json();
        return this._transformData(data);
    }

    _transformData(data) {
        return {
            quote: data.content,
            author: data.author
        }
    }
}
class APIClient{
    _baseURL = "https://newsapi.org/v2/top-headlines?country=";
    _apiKEY = "&apiKey=18f1c87e444741aca30db0a569bba999";

    async getAllNews(country){
        const news = await fetch(`${this._baseURL}${country}${this._apiKEY}`);
        if(!news.ok){
            throw new Error("Can't get data!");
        }
        else{
            return await news.json();
        }
    }
}

export default APIClient;

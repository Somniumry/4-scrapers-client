class News {
  constructor(httpClient) {
    this.news = httpClient;
  }

  async renderNews(query, scrolls) {
    const response = await this.news.post("/search/bing", {
      q: query,
      scrolls: scrolls,
    });
    return response.data;
  }
}

export default News;

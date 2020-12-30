class News {
  constructor(httpClient) {
    this.news = httpClient;
  }

  async renderNews(query, scrolls) {
    try {
      console.log(scrolls);
      const response = await this.news.post("/search/bing", {
        q: query,
        scrolls: scrolls,
      });
      return { data: response.data.data, success: true };
    } catch (error) {
      return { data: [], success: false };
    }
  }
}

export default News;

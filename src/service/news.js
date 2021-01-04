class News {
  constructor(httpClient) {
    this.news = httpClient;
  }

  async renderNews(query, scrolls) {
    try {
      const response = await this.news.post("/search/bing", {
        q: query,
        scrolls: scrolls,
      });
      return { data: response.data.data, success: true };
    } catch (error) {
      return { data: [], success: false };
    }
  }

  async scrapNews(newsInfo) {
    try {
      const token = localStorage.getItem("Authorization");
      if (!token) throw Error();

      await this.news.post("/search/scrap/upload", newsInfo);
      return { success: true };
    } catch (error) {
      return { success: false };
    }
  }

  async renderNewsInScrap(query, scrolls) {
    try {
      const response = await this.news.post("/search/scrap", {
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

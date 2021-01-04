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

  async renderNewsInScrap(query, pages) {
    try {
      const response = await this.news.post("/search/scrap", {
        q: query,
        pages: pages,
      });

      return { data: response.data.data, success: true };
    } catch (error) {
      return { data: [], success: false };
    }
  }

  async editScrap(editData) {
    try {
      await this.news.patch("/search/scrap", editData);
      return { success: true };
    } catch (error) {
      return { success: false };
    }
  }

  async deleteScrap(id) {
    try {
      await this.news.delete("/search/scrap", {
        data: id,
      });
      return { success: true };
    } catch (error) {
      return { success: false };
    }
  }
}

export default News;

class User {
  constructor(httpClient) {
    this.user = httpClient;
  }

  async userSignIn(email, password) {
    const response = await this.user.post("/user/login", {
      email,
      password,
    });
    return response.data;
  }
}

export default User;

class User {
  constructor(httpClient) {
    this.user = httpClient;
  }

  async userSignIn(userLoginInfo) {
    const response = await this.user.post("/user/login", userLoginInfo);
    // return response.data;
  }

  async userSignUp(userRegisterInfo) {
    const response = await this.user.post("/user/login", userRegisterInfo);
    // return response.data;
  }
}

export default User;
